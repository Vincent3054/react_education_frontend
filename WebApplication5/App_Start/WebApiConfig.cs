using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication5
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // New code
            
            config.MapHttpAttributeRoutes();
            //針對應用程式中的所有 Web API 控制器啟用 CORS
            /*優先順序的順序為：
            動作
            控制器
            Global
            */
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            config.Routes.MapHttpRoute(
                    name: "DefaultApi",
                    routeTemplate: "api/{controller}/{id}",
                    defaults: new { id = RouteParameter.Optional }
                );
            config.Routes.MapHttpRoute(
                    name: "EmailApi",
                    routeTemplate: "api/{controller}/{Account}/{AuthCode}",
                    defaults: new { id = RouteParameter.Optional }
        );

        }

    }
}