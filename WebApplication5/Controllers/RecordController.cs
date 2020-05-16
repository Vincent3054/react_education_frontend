using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication5.Models;
using WebApplication5.Service;
using WebApplication5.ViewModel;
using System.Web.Http.Cors;

namespace WebApplication5.Controllers
{
    [EnableCors(origins: "*", // Origin來源網域
                  headers: "*",                     // Request headers
                  methods: "*"                      // HTTP methods   
                                                    // Response headers
                                                    //Allow credentials
             )]
    public class RecordController : ApiController
    {
        private readonly RecordDBService recordService = new RecordDBService();
        private readonly ReservationDBService reservationService = new ReservationDBService();
        private readonly MemberDBService membersService = new MemberDBService();
        private readonly MessageDBService messageService = new MessageDBService();





        //點狀態3的學生填寫輔導
        //完成填寫資料變成狀態4


        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpGet]
        [Authorize(Roles = "P001,P002,P004,P005,P006,P007,P010,P011,P012,P014,P015,P016,P017,P018")]
        [Route("api/Record")]
        //查看狀態4學生輔導列表，給老師、輔導、管理員
        public ResultVM<RecordIndexViewModel> Record(string Account)
        {
            RecordIndexViewModel Data = new RecordIndexViewModel();
            Data.Account = Account;
            Data.DataList = recordService.GetAllDataList(Data.Account);
            return new ResultVM<RecordIndexViewModel>(true, null, Data);
        }


        //輔導老師填寫輔導紀錄
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpPost]
        [Route("api/Record")]
        [Authorize(Roles = "P015")]
        //新增輔導紀錄，給輔導老師
        public ResultVM<object>CreateRecord(int Reservation_Id,Record Data)
        {
            //點選為3的資料
            try
            {
                //老師帳號
                string Account = User.Identity.Name;
                Data.KeyinTeacher = Account;
                //狀態碼
                int Fettle = 3;
                Reservation reservationData = new Reservation();
                reservationData = reservationService.GetReservation(Reservation_Id);
                if (reservationData != null)
                {
                    //帳號相等，這筆學生紀錄是現在登入的老師所有
                    if (reservationData.NowPSY == Account)
                    {
                        //確認狀態為3指派完成
                        if(reservationData.Fettle == Fettle)
                        //新增輔導紀錄
                        //將學生名稱=紀錄上的申請人
                        Data.Account = reservationData.Account;
                        recordService.InsertRecord(Data, reservationData.Account);
                        //填寫完紀錄，更新狀態碼為4，填寫紀錄完成
                        Fettle = 4;
                        //更新狀態碼
                        reservationService.UpFettle(Fettle, Reservation_Id);
                        //將此學生新增到輔導老師管理表
                        //Account=老師，reservationData.Account=輔導的學生
                        recordService.InsertPSY_Student(Account, reservationData);
                    }
                    else
                    {
                        return new ResultVM<object>(false,"查無此紀錄", null);
                    }
                }
                else
                {
                    return new ResultVM<object>(false, "查無此紀錄", null);
                }
                return new ResultVM<object>(true, "新增"+reservationData.Account+"學生記錄成功", Data);
             }
            catch(Exception e)
            {
                return new ResultVM<object>(false, e.Message.ToString(), null);
            }
        }
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P015")]
        [HttpPut]
        [Route("api/Record")]
        //修改輔導紀錄
        //查看輔導紀錄表
        public ResultVM<EditRecordViewModel> EditRecord(int  A_Id,EditRecordViewModel EData)
        {
            //將頁面紀錄Id填入
            EData.A_Id = A_Id;
            //帳號=輔導老師登入token
            string Account = User.Identity.Name;
            try
            {
                Record Data = new Record();
                //藉由紀錄Id查詢紀錄
               Data=recordService. GetArticleDataById(A_Id);
                if (Data!=null)
                {
                    //帳號相等，這筆學生紀錄是現在登入的老師所有
                    if (Data.KeyinTeacher == Account)
                    {
                        //將輸入欄位更新
                        recordService.UpdateArticle(A_Id, EData);
                    }

                    else
                    {
                        return new ResultVM<EditRecordViewModel>(false, "查無資料", null);
                    }
                }
                else
                {
                    return new ResultVM<EditRecordViewModel>(false, "查無資料",null);
                }
            }

            catch (Exception e)
            {
                return new ResultVM<EditRecordViewModel>(false,e.Message.ToString(), null);
            }
            return new ResultVM<EditRecordViewModel>(true, "修改成功", EData);

           
        }

        //沒這功能
        //刪除輔導紀錄
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P017")]
        [HttpDelete]
        [Route("api/Record")]
        public ResultVM<object>Delete(int A_Id)
        {
            recordService.DeleteArticle(A_Id);
            return new ResultVM<object>(true, "刪除資料第"+A_Id+"資料成功", null);
        }
    }
}
