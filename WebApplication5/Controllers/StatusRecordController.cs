using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication5.ViewModel;

namespace WebApplication5.Controllers
{
    [EnableCors("*",    // http://studytutor_backend.hsc.nutc.edu.twOrigin來源網域
           "*",                     // Request headers 允許標頭
           "*"                      // HTTP methods   允許使用方法
                                    //,"bar",                  // Response headers
                                    //SupportsCredentials = true  // Allow credentials
      )]
    public class StatusRecordController : ApiController
    {
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        //狀態測試
        public ResultVM<Object>SearchState(int Account)
        {
            return new ResultVM<object>(true, null, null);
        }
    }
}
