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
    [EnableCors("*",    // http://studytutor_backend.hsc.nutc.edu.twOrigin來源網域
           "*",                     // Request headers 允許標頭
           "*"                      // HTTP methods   允許使用方法
                                    //,"bar",                  // Response headers
                                    //SupportsCredentials = true  // Allow credentials
      )]
    public class PasswordController : ApiController
    {
        private readonly MemberDBService membersService = new MemberDBService();

        //重設密碼
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpPut]
        [Route("api/Password")]
        public ResultVM<ResetPasswordViewModel> PasswordPUT(string Account,string AuthCode,ResetPasswordViewModel Data)
        {
            try
            {
                string ResetStr = membersService.ResetPassword(Account,AuthCode, Data.NewPassword);
                if (ResetStr == null)
                {

                    return new ResultVM<ResetPasswordViewModel>(true, "重設密碼成功", Data);
                }
                else
                {
                    Data.NewPassword = null;
                    Data.NewPasswordCheck = null;
                    return new ResultVM<ResetPasswordViewModel>(true, ResetStr, Data);
                }
            }
            catch (Exception e)
            {
                return new ResultVM<ResetPasswordViewModel>(false, e.Message.ToString(), null);
            }
        }
    }
}
