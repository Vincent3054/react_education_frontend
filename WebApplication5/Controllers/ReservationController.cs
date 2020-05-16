using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
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
    //預約紀錄Controller
    public class ReservationController : ApiController
    {
        private readonly ReservationDBService reservationService = new ReservationDBService();
        private readonly MemberDBService membersService = new MemberDBService();


        //新增預約表單
        [HttpPost]
        [Route("api/Reservation")]
        [Authorize(Roles = "P003")]
        //新增預約輔導給學生
        public ResultVM<object>InsertReservation(Reservation Data)
        {
            //取得登入的學生
            string Account = User.Identity.Name;
            Member memberData = new Member();
            Class ClassData = new Class();
            
            try
            {
            memberData=membersService.GetDataByAccount(Account);
            ClassData=membersService.GetClassByAccount(Account);
            Data.Account = Account;
            Data.Class_Id = ClassData.Class_Id;
            Data.Account = User.Identity.Name;
                //狀態=1為預約成功未指派
            Data.Fettle = 1;
                reservationService.InsertReservation(Data);
               
                return new ResultVM<object>(true, "預約成功", Data);
            }
            catch (Exception e)
            {
                return new ResultVM<object>(false, e.Message.ToString(), null);
            }
        }
        //管理者

        [Authorize(Roles = "P017")]
        [HttpPut]
        [Route("api/Reservation")]
        //收到預約表單指派輔導老師
        public ResultVM<object> InsertPSYReservation(int Reservation_Id,Reservation Data)
        {
            try
            {
                //取得這筆紀錄ID
                Data.Reservation_Id = Reservation_Id;
                //狀態=2為正在安排輔導老師
                Data.Fettle = 2;
                //藉由Id新增指派的資料
                reservationService.InsertPSY(Reservation_Id,Data);
                

                return new ResultVM<object>(true, "指派"+Data.NowPSY+"輔導老師成功", null);
            }
            catch (Exception e)
            {
                return new ResultVM<object>(false, e.Message.ToString(), null);
            }
        }
      

    }
}
