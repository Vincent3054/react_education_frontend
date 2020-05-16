using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication5.Service;
using WebApplication5.ViewModel;
using System.Web.Http.Cors;

namespace WebApplication5.Controllers
{

    [EnableCors(origins: "*", // Origin來源網域
                headers: "*",                     // Request headers
                methods: "*"                      // HTTP methods   
                                                  // Response headers
                                                  //Allow credentials
           )]
    public class StudRecordController : ApiController
    {
        //
        private readonly RecordDBService recordService = new RecordDBService();
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [HttpGet]
        [Authorize(Roles = "P001,P002,P004,P005,P006,P007,P010,P011,P012,P014,P015,P016,P017,P018")]
        [Route("api/StudentRecord")]
        //根據學生Account搜尋紀錄
        //從網址帶?Account=學生
        public ResultVM<RecordIndexViewModel> Record(string Account)
        {
            RecordIndexViewModel Data = new RecordIndexViewModel();
            Data.Account = Account;
            Data.DataList = recordService.GetAllDataList(Data.Account);
            return new ResultVM<RecordIndexViewModel>(true, null, Data);
        }

    }
}
