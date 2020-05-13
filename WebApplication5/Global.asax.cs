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
            //�����ШD���
            HttpRequest httpRequest = HttpContext.Current.Request;
            //�]�wJWT�K�_
            string SecretKey = WebConfigurationManager.AppSettings["SecretKey"].ToString();
            //�]�wCookie�W��
            var token = httpRequest.Headers["Authorization"];


            //�ˬd�O�_�s��TOKEN
            if (token != null)
            {
                //TOKEN�٭�
                JwtObject JwtObject = JWT.Decode<JwtObject>(Convert.ToString(token), Encoding.UTF8.GetBytes(SecretKey), JwsAlgorithm.HS512);
                //�N�ϥΪ̨����ƨ��X
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
