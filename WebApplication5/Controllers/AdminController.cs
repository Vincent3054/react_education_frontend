﻿using System;
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
