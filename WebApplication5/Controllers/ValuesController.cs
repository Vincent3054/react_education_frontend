using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using WebApplication5.Models;
using WebApplication5.Service;
using WebApplication5.ViewModel;
using System.Web.Cors;
using System.Web.Http.Cors;

namespace WebApplication5.Controllers
{
    [EnableCors("*",    // http://studytutor_backend.hsc.nutc.edu.twOrigin來源網域
           "*",                     // Request headers 允許標頭
           "*"                      // HTTP methods   允許使用方法
                                    //,"bar",                  // Response headers
                                    //SupportsCredentials = true  // Allow credentials
      )]
    public class ValuesController : ApiController
    {
        private readonly MemberDBService memberservice = new MemberDBService();

        public static void Register(HttpConfiguration config)
        {
            var cors = new EnableCorsAttribute("http://studytutor_backend.hsc.nutc.edu.tw", "*", "*");
            config.EnableCors(cors);

        }
        
        /*
         public JsonResult List() 回傳json格式
                return Json(字串變數/其他變數.ToList());    //允許HttpPost請求
                return Json(字串變數/其他變數.ToList(),JsonRequestBehavior.AllowGet);  //允許HttpGet請求
         
            JSON表達方式
         "KEY":Value
         傳送的資料
           [{
                    //KEY一定要是文字，Vaule可以單純一筆
            "name":perry,
            "report":[      //"[ ]"表示陣列可以存放多筆資料
                            {
                                "Subject":"English",
                                "Score":80,
                            },
                            {
                                //第二筆成績
                                "Subject":"Math",
                                "Score":90,
                            },
                       ]
             },

             {
                    //第二個人資料
             }]
         */

        #region  練習
        /*
    // GET api/values
    //GET controller名字，沒有傳入值
    public IEnumerable<string> Get()
    {
        //傳回的json資料
        return new string[] { "value1", "value2" };
    }

    // GET api/values/5
    //GET Controller名字，有傳入int數值
    public string Get(int id)
    {
        //路由有數值，回傳就會回到這裡
        //url輸入api/value/5
        //Route設定預設參數是id所以"/"之後帶參數就會知道
        //id.ToString()會回傳route的id數值5
        return "value" +id.ToString();
    }
    public string GetHelloWorld(int uName)
    {
        //指定傳入參數若不是預設的id
        //url要輸入api/vaules?uName=12345後才會收到uName參數的回傳數值
        return "value" + uName.ToString();
    }

    //在Route中有設定DefaultApi2
    //當輸入url的時候帶入{a}/{b}就可以被抓到了
    public string GetCompute(int a ,int b)
    {
        int result = a + b;
        return result.ToString();
    }
    // POST  api/values/5
    public void Post([FromBody]string vaule)
    {

    }
    */
        #endregion
        //GET查詢，POST送出
        // POST api/values
        /*IHttpActionResult作用
                有資料return OK(Data) 表示Http200
                沒資料return  NotFound();
        */
        //HttpResponseMessage 作用    直接將轉換的 HTTP 回應訊息。
        //HttpResponseException作用   回傳錯誤代碼方式  
        //void -- 傳回 "空"。204 （沒有內容）
        #region  CRUD
        //Create
        //SQL
        //會員  權限表 能進哪一個url
        //角色  輔導老師 最高管理者 老師 班導師
        //會員表  GUID 會員帳號 密碼 驗證碼
        //寄驗證信 驗證的URL 進到驗證controller  信件前端放網址
        [HttpPost]
        [Route("api/values/PostDataAction")]
        public IHttpActionResult PostData(Member Data)
        {
            Data.Member_Id = memberservice.GetGUID();
            //去新增一筆資料
            memberservice.InsertData(Data);
            string result = Data.Member_Id+"PostOk";
            return Ok(result);
        }
        /*
        public ResultViewModel<FilesDetailsViewModel> Get(string id)
        {
            FilesDetailsViewModel Data = new FilesDetailsViewModel();
            Data.File = FilesService.GetDataById(id);
            bool CheckUserResult = FilesService.CheckUser(User.Identity.Name, id);

            if (CheckUserResult && Data.File != null)
            {
                return new ResultViewModel<FilesDetailsViewModel>(true, null, Data);
            }
            else
            {
                return new ResultViewModel<FilesDetailsViewModel>(false, "XX", null);
            }
        }
        */
        //Read
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpGet]
        [Route("api/Values/{Account}")]
        public ResultVM<object> GetData(string Account)
        {
            SearchViewModel Data = new SearchViewModel();
            //藉由帳號取得整筆資料
            Data.member= memberservice.ReadData(Account);
            if(Data.member!=null)
            {
                return new ResultVM<object>(true,"查詢成功",Data);
            }
            else
            {
                Data.member = null;
                return new ResultVM<object>(false, "查詢失敗",null);
            }
        }


        //Update
        [HttpPut]
        [Route("api/Values/{Account}")]
        public IHttpActionResult PutData(Member UpData)
        {
            //修改一筆資料
            memberservice.UpdateData(UpData);
            string result =UpData.Member_Id+ "PutOk";
            return Ok(result);
        }
        
        [HttpDelete]
        [Route("api/Values/Delete")]
        public IHttpActionResult DeleteData(string Account)
        {
            //根據Account刪除一筆資料
            memberservice.DeleteData(Account);
            string result ="DeleteOk";
            return Ok(result);
        }


        #endregion

        #region  註冊登入練習
        /*
        [HttpPost]
        [Route("api/Values")]
        public IHttpActionResult Register(MemberRegisterViewModel memberRegister)
        {
            //判斷頁面輸入的欄位是否都經過驗證無跳錯在進來
            if (ModelState.IsValid)
            {
                //使用者VM的資料填入Model
                memberRegister.newMember.Password = memberRegister.Password;
                //去產生10碼亂數當作驗證碼
                string AuthCode = mailservice.GetValidateCode();
                //將產生的驗證碼填入Model
                memberRegister.newMember.AuthCode = AuthCode;
                
                //將填入VM中的資料到去sql填入註冊
                memberservice.Register(memberRegister.newMember);
                string TempMail = System.IO.File.ReadAllText(Server.MapPath("~/Views/Shared/RegisterEmailTemplate.html"));
                UriBuilder ValidateUrl = new UriBuilder(Request.Url)
                {
                    Path = Url.Action("EmailValidate", "Members", new
                    {
                        Account = memberRegister.newMember.Accout,
                        AuthCode = AuthCode
                    })
                };
                string MailBody = mailservice.GetRegisterMailBody(TempMail,memberRegister.newMember.Name,ValidateUrl.ToString().Replace("%3F","?"));
                mailservice.SendRegisterMail(MailBody, memberRegister.newMember.Email);
                TempData["RegisterState"] = "註冊成功,去收信";
                return Ok(memberRegister);
            }
            memberRegister.Password = null;
            memberRegister.PasswordCheck = null;
 

            return Ok(memberRegister);
        }
       
        [HttpPost]
        [Route("api/Values/Login")]
        public IHttpActionResult Login(MemberLoginViewModel memberLogin)
        {
            string ValidateStr = memberservice.LoginCheck(memberLogin.Account, memberLogin.Password);
            //判斷驗證後結果是否有錯誤訊息
            if (String.IsNullOrEmpty(ValidateStr))
            {
                //無錯誤訊息，則登入
                //先藉由Service取得登入者角色資料
                string RoleData = memberservice.GetRole(memberLogin.Account);
                //設定JWT
                JwtService jwtService = new JwtService();
                //從Web.Config撈出資料
                //Cookie名稱
                string cookieName = WebConfigurationManager.AppSettings["CookieName"].ToString();
                string Token = jwtService.Token(memberLogin.Account, RoleData);
                ////產生一個Cookie
                HttpCookie cookie = new HttpCookie(cookieName);
                //設定單值
                cookie.Value = Server.UrlEncode(Token);
                //寫到用戶端
                Response.Cookies.Add(cookie);
                //設定Cookie期限
                Response.Cookies[cookieName].Expires = DateTime.Now.AddMinutes(Convert.ToInt32(WebConfigurationManager.AppSettings["ExpireMinutes"]));
                //重新導向頁面
                return Ok();
            }
            else
            {
                //有驗證錯誤訊息，加入頁面模型中
                ModelState.AddModelError("", ValidateStr);

                return Ok(memberLogin);
            }
        }
        */
        #endregion

        #region
        /*
        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
        */
        #endregion
    }
}
