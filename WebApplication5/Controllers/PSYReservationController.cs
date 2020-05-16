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
    public class PSYReservationController : ApiController
    {
        private readonly ReservationDBService reservationService = new ReservationDBService();
        private readonly MemberDBService membersService = new MemberDBService();


        //輔導老師

        [Authorize(Roles = "P015")]
        [HttpPut]
        [Route("api/PSYReservation")]
        public ResultVM<object> InsertCheckReservation(int  Reservation_Id, Reservation Data)
        {
          
            string Account = User.Identity.Name;
            //新增取消狀態
            reservationService.InsertCancle(Reservation_Id,Data);
            string Cancel = "1";
            string Check = "0";
            //查詢預約紀錄----------------
            try
            {
                Data = reservationService.GetReservation(Reservation_Id);
                if (Data != null)
                {
                    //帳號相等，按確認
                    if (Data.NowPSY == Account)
                    {
                        if (Data.CheckCancel == Check)
                        {
                            //按接受指派
                            Data.Fettle = 3;
                            reservationService.PSYCheck(Reservation_Id, Data);
                        }
                        //按取消指派
                        if (Data.CheckCancel == Cancel)
                        {
                            //按下取消
                            //退回管理者的指派+清空老師欄位+備註
                            reservationService.PSYCancel(Reservation_Id, Data);
                            Data.Fettle = 1;
                            return new ResultVM<object>(true, Data.Account + "輔導老師取消安排，返回管理者重新指派", null);
                        }
                    }
                    else
                    {
                        return new ResultVM<object>(false, "這筆紀錄不存在", null);
                    }
                }
                else
                {
                    return new ResultVM<object>(false, " 查無紀錄", null);
                }
                return new ResultVM<object>(false, " 指派" + Data.Account + "學生成功", null);
            }
            catch(Exception e)
            {
                return new ResultVM<object>(false,e.Message.ToString(), null);
            }
        }
       

    }
}
