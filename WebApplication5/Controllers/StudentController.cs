using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
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
    public class StudentController : ApiController
    {
        private readonly StudentsDBService studentsService = new StudentsDBService();

        //查詢自己班級裡的學生
        //給班導
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpGet]
        [Authorize(Roles = "P018")]
        [Route("api/Student")]

        public ResultVM<StudentViewModel> GetData(string Account)
        {

           StudentViewModel Data = new StudentViewModel();
            try
            {
                //判斷登入者的帳號
                Account = User.Identity.Name;
                Data.DataList = studentsService.Search(Account);
                return new ResultVM<StudentViewModel>(true, " 查詢成功", Data);
            }
            catch (Exception e)
            {
                return new ResultVM<StudentViewModel>(false, e.Message.ToString(), Data);
            }
        }
    }
}
