using Jose;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using WebApplication5.Security;
using System.Text;

namespace WebApplication5
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
        protected void Application_OnPostAuthenticateRequest(object sender, EventArgs e)
        {
            //接收請求資料
            HttpRequest httpRequest = HttpContext.Current.Request;
            //設定JWT密鑰
            string SecretKey = WebConfigurationManager.AppSettings["SecretKey"].ToString();
            //設定Cookie名稱
            var token = httpRequest.Headers["Authorization"];


            //檢查是否存放TOKEN
            if (token != null)
            {
                //TOKEN還原
                JwtObject JwtObject = JWT.Decode<JwtObject>(Convert.ToString(token), Encoding.UTF8.GetBytes(SecretKey), JwsAlgorithm.HS512);
                //將使用者角色資料取出
                string[] Role = JwtObject.Role.Split(new char[] { ',' });
                if (Convert.ToDateTime(JwtObject.Expire) >= DateTime.Now)
                {
                    var identity = new GenericIdentity(JwtObject.Account);
                    var principal = new GenericPrincipal(identity, Role);
                    HttpContext.Current.User = principal;
                    Thread.CurrentPrincipal = principal;
                }
            }
        }
    }
}
