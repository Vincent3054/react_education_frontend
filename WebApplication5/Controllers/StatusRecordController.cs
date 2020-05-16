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
    [EnableCors(origins: "*", // Origin來源網域
                  headers: "*",                     // Request headers
                  methods: "*"                      // HTTP methods   
                                                    // Response headers
                                                    //Allow credentials
             )]
    public class StatusRecordController : ApiController
    {

        //狀態測試
        public ResultVM<Object>SearchState(int Account)
        {
            return new ResultVM<object>(true, null, null);
        }
    }
}
