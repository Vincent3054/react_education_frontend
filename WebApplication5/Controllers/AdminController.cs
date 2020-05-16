using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication5.Controllers
{
    [EnableCors(origins: "*", // Origin來源網域
                  headers: "*",                     // Request headers
                  methods: "*"                      // HTTP methods   
                                                    // Response headers
                                                    //Allow credentials
             )]
    public class AdminController : ApiController
    {
        [EnableCors("http://studytutor_backend.hsc.nutc.edu.tw", // Origin來源網域
             "*",                     // Request headers 允許標頭
             "*"                      // HTTP methods   允許使用方法
                                      //,"bar",                  // Response headers
                                      //SupportsCredentials = true  // Allow credentials
        )]
        //引用CorsHandle.cs
        [CorsHandle]
        public static void Register(HttpConfiguration config)
        {
            var cors = new EnableCorsAttribute("http://studytutor_backend.hsc.nutc.edu.tw", "*", "*");
            config.EnableCors(cors);

        }
        //管理者
        //進入修改權限頁面，傳入所有3個角色
    }
}
