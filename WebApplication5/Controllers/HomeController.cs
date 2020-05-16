using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http.Cors;
using System.Web.Http;

namespace WebApplication5.Controllers
{
    [EnableCors(origins: "*", // Origin來源網域
                 headers: "*",                     // Request headers
                 methods: "*"                      // HTTP methods   
                                                   // Response headers
                                                   //Allow credentials
            )]
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            ViewBag.Title = "輔導學習紀錄系統";

            return View();
        }
    }
}
