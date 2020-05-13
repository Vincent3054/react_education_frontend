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
    public class MembersController : ApiController
    {
       private readonly MemberDBService membersService = new MemberDBService();
       private readonly MailService mailService = new MailService();

        //註冊
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpPost]
        [Route("api/Members")]
        public ResultVM<object> Register(Member RegisterData)
        {
            try
            {

                    if (membersService.AccountCheck(RegisterData .Account))
                    { 
                        //將前端資料中的欄位填入

                        //驗證碼
                        string AuthCode = mailService.GetValidateCode();
                        RegisterData .AuthCode = AuthCode;
                        //將註冊資料寫到資料庫
                        membersService.Register(RegisterData );
                      //將不同角色的資料寫入學生、班導師、輔導老師
                       membersService.Register_RoleTale(RegisterData);
                        //存入角色
                        membersService.InstrRole(RegisterData);
                        //取得寫好的驗證信範本內容
                        string TempMail = System.IO.File.ReadAllText(
                         System.Web.Hosting.HostingEnvironment.MapPath("~/Email/RegisterEmail.html"));
                        //宣告Email驗證用的Url
                        //UriBuilder ValidateUrl = new UriBuilder(Url.Link("EmailApi",new { Account = RegisterData.Account, AuthCode = AuthCode }));
                        //Uri ValidateUrl= new Uri(Url.Link("EmailApi", new { Account = RegisterData.Account, AuthCode = AuthCode }));
                        //藉由Service將使用者資料填入驗證信範本中
                        string P = "https://localhost:44385/api/Members/Login?";
                        string account = RegisterData.Account;
                        string authcode = RegisterData.AuthCode;
                          string Path = P + "Account="+account +"&AuthCode="+ authcode;
                        //string Path = P + "AuthCode=" + authcode + "&Account=" + account;
                        string MailBody = mailService.GetRegisterMailBody(TempMail,
                            RegisterData. Account,Path,null);
                        //呼叫Service寄出驗證信
                        mailService.SendRegisterMail(MailBody, RegisterData. Email, true);
                      
                        //回傳成功、沒有錯誤訊息，資料包
                    return new ResultVM<object>(true, "註冊成功", null);
                }
                    else
                    {
                        return new ResultVM<object>(false, "帳號已經被使用", null);

                }
               

           }//try
            //有錯誤訊息，回傳狀態失敗，以及錯誤訊息代碼回去
            catch(Exception e)
            {
                return new ResultVM<object>(false, e.Message.ToString(), null);

            }
         }
        /*
         *  public ResultVM<MemberRegisterViewModel> Register(MemberRegisterViewModel RegisterData)
        {
            try
            {
                //驗證頁面資料
                if (ModelState.IsValid)
                {
                    if (membersService.AccountCheck(RegisterData.member.Account))
                    {

                        //將前端資料中的欄位填入
                        RegisterData.member.Password = RegisterData.Password;
                        RegisterData.member.Name = RegisterData.Name;
                        RegisterData.member.Account = RegisterData.Account;
                        RegisterData.member.Email = RegisterData.Email;
                        //驗證碼
                        string AuthCode = mailService.GetValidateCode();
                        RegisterData.member.AuthCode = AuthCode;
                        membersService.Register(RegisterData.member);
                        //取得寫好的驗證信範本內容
                        string TempMail = System.IO.File.ReadAllText(
                         System.Web.Hosting.HostingEnvironment.MapPath("~Email/RegisterEmail.html"));
                        //宣告Email驗證用的Url
                        Uri ValidateUrl = new Uri(Url.Link("EmailApi", new { Account = RegisterData.member.Account, AuthCode = AuthCode }));
                        //藉由Service將使用者資料填入驗證信範本中
                        string MailBody = mailService.GetRegisterMailBody(TempMail,
                            RegisterData.member.Name, ValidateUrl.ToString().Replace("%3F", "?"), null);
                        //呼叫Service寄出驗證信
                        mailService.SendRegisterMail(MailBody, RegisterData.member.Email, true);
                        //回傳成功、沒有錯誤訊息，資料包
                        return new ResultVM<MemberRegisterViewModel>(true, null, RegisterData);
                    }
                    else
                    {
                        return new ResultVM<MemberRegisterViewModel>(true, "此帳號沒有通過驗證", RegisterData);
                    }
                }
                else
                {
                    return new ResultVM<MemberRegisterViewModel>(true, "驗證錯誤", RegisterData);
                }
            }
            //有錯誤訊息，回傳狀態失敗，以及錯誤訊息代碼回去
            catch(Exception e)
            {
                return new ResultVM<MemberRegisterViewModel>(false, e.Message.ToString(),RegisterData);
            }
         }
         */


        //接收驗證信
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpGet]
        [Route("api/Members")]
       
        public ResultVM<object> EmailVaildate(string Account, string AuthCode)
        {
            try
            {
                //存放訊息
                string ValidateStr = membersService.EmailValidate(Account, AuthCode);
                //回傳狀態成功，驗證結果
                return new ResultVM<object>(true, ValidateStr, null);
            }
            catch(Exception e)
            {
                //若有錯誤回傳狀態錯誤，錯誤代碼
                return new ResultVM<object>(false, e.Message.ToString(), null);
            }
         }

        //修改密碼
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpPut]
        [Route("api/Members")]
        [Authorize(Roles = "P003")]
        public ResultVM<ChangePasswordViewModels> Change( [FromBody] ChangePasswordViewModels Data)
        {  
            string Message = string.Empty;
             try
            {
                string Account;
                //驗證頁面
                if (ModelState.IsValid)
                {
                    Account = User.Identity.Name;
                    Message=membersService.ChangePassword(Account,Data);
                }
              
                
                else
                {
                    //驗證沒通過
                    return new ResultVM<ChangePasswordViewModels>(false, "輸入有錯誤",null);
                }
                //驗證通過，回傳狀態成功，跟資料回去
                return new ResultVM<ChangePasswordViewModels>(true, Message, null);
            }
            catch(Exception e)
            {
                //若執行錯誤，回傳狀失敗，錯誤代碼
                return new ResultVM<ChangePasswordViewModels>(false, e.Message.ToString(), null);
            }
        }

    }
}
