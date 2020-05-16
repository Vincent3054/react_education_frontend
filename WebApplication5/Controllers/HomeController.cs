using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http.Cors;
using System.Web.Http;

namespace WebApplication5.Controllers
{
    [EnableCors("*",    // http://studytutor_backend.hsc.nutc.edu.twOrigin來源網域
           "*",                     // Request headers 允許標頭
           "*"                      // HTTP methods   允許使用方法
                                    //,"bar",                  // Response headers
                                    //SupportsCredentials = true  // Allow credentials
      )]
    public class HomeController : Controller
    {
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        public ActionResult Index()
        {
            ViewBag.Title = "輔導學習紀錄系統";

            return View();
        }
    }
}
