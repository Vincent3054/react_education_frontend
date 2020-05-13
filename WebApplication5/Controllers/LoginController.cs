using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using WebApplication5.Models;
using WebApplication5.Security;
using WebApplication5.Service;
using WebApplication5.ViewModel;
using System.Web.Http.Cors;

namespace WebApplication5.Controllers
{
    [EnableCors("*", "*", "*")]
    public class LoginController : ApiController
    {
        private readonly MemberDBService membersService = new MemberDBService();
        private readonly MailService mailService = new MailService();

        //登入
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpPost]
        [Route("api/Login")]
        public ResultVM<MemberLoginViewModel> LoginPost(MemberLoginViewModel LoginMember)
        {
            string message = string.Empty;
            try
            {
                // LoginMember.member= membersService.GetDataByAccount(LoginMember.member.Account);
                //驗證登入帳號密碼
                //string ValiateStr = membersService.LoginCheck(LoginMember.Account, LoginMember.Password);
                if (membersService.LoginCheck(LoginMember.Account, LoginMember.Password))
                {
                    LoginMember.Role_Id = membersService.GetRole_Id(LoginMember.Account);
                    //無錯誤訊息，則登入
                    //先藉由Service取得登入者角色資料
                    string RoleData = membersService.GetRole(LoginMember.Account, LoginMember.Role_Id);
                    //設定JWT
                    JwtService jwtService = new JwtService();
                    LoginMember.Token = jwtService.GenerateToken(LoginMember.Account, RoleData);
                    LoginMember.Permission_Id = RoleData;
                    message = "登入成功";
                }
                else
                {
                    message = LoginMember.Account + "未驗證帳號/帳號不存在";
                    LoginMember.Account = null;
                    LoginMember.Password = null;
                }
                
            }
          
            catch (Exception e)
            {
                //回傳狀態錯誤，錯誤訊息
                return new ResultVM<MemberLoginViewModel>(false, e.Message.ToString(), LoginMember);
            }
            //回傳狀態成功，跟資料
            return new ResultVM<MemberLoginViewModel>(true, message, LoginMember);
        }

        //登出
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpDelete]
        [Route("api/Login")]
        [Authorize(Roles = "P001,P002,P003,P004,P005,P006,P007,P008,P009,P010,P011,P012,P013,P014,P015,P016,P017,P018")]
        public ResultVM<object> Logoutout()
        {
            try
            {
                //使用者登出
                HttpContext.Current.Request.Headers.Remove("Authorization");
                string CookieName = WebConfigurationManager.AppSettings["CookieName"].ToString();
                HttpCookie cookie = new HttpCookie(CookieName);
                cookie.Expires = DateTime.Now.AddDays(-1);
                cookie.Values.Clear();
                HttpContext.Current.Response.Cookies.Set(cookie);
            }
            catch (Exception e)
            {
                return new ResultVM<object>(false, e.Message.ToString(), null);
            }
            return new ResultVM<object>(true, "已經登出", null);
        }
        //忘記密碼
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpPut]
        [Route("api/Login")]
        public ResultVM<ForgetViewModel> FrogetPasswordPut([FromBody]ForgetViewModel Data)
        {
            try
            {
                    string AuthCode = mailService.GetValidateCode();
                    if (membersService.ForgetPasswordCheck(Data.Account, AuthCode))
                    {
                        //取得寫好的驗證信範本內容
                        string TempMail = System.IO.File.ReadAllText(
                        System.Web.Hosting.HostingEnvironment.MapPath("~/Email/ForgetPasswordEmail.html"));
                        //宣告Email驗證用的Url
                        string P = "https://localhost:44385/api/Password?";
                        string account = Data.Account;
                        string authcode =AuthCode;
                        string Path = P + "Account=" + account + "&AuthCode=" + authcode;
                        //藉由Service將使用者資料填入驗證信範本中
                        string MailBody = mailService.GetRegisterMailBody(TempMail,
                            Data.Account, Path,AuthCode);
                        //呼叫Service寄出驗證信
                        mailService.SendRegisterMail(MailBody, Data.Email,false);
                        return new ResultVM<ForgetViewModel>(true, "請去收驗證信重設密碼", Data);
                    }
                    else
                    {
                    Data.Account = null;
                    Data.Email = null;
                        //回傳狀態 失敗錯誤訊息
                        return new ResultVM<ForgetViewModel>(false, "此帳號尚未經過驗證或是尚未註冊", Data);
                    }
                

            }
            catch (Exception e)
            {
                //回傳狀態失敗，錯誤訊息
                return new ResultVM<ForgetViewModel>(false, e.Message.ToString(), Data);
            }
        }


    }
}
