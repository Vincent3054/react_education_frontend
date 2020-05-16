using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication5.Models;
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
    public class PermissionController : ApiController
    {
        private readonly RecordDBService recordService = new RecordDBService();
        private readonly PermissionDBService permissionService = new PermissionDBService();


        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P017")]
        [HttpGet]
        [Route("api/Permission")]

        //權限表
        public ResultVM<PermissionIndexViewModel> PermissionRecord(string Account)
        {
            PermissionIndexViewModel Data = new PermissionIndexViewModel();
            //取得帳號中擁有的權限
            Data.DataList = permissionService.GetAllDataList(Account);
            Data.Account = Account;
            //取得選取帳號的角色
            Data.Role_Id=permissionService.GetRole(Account);
            return new ResultVM<PermissionIndexViewModel>(true, null, Data);
        }

        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P017")]
        [HttpPost]
        [Route("api/Permission")]

        //新增權限
        public ResultVM<object> InsertPemission(string Account,PermissionId Data)
        {
            try
            {
                permissionService.InsertPemission(Account,Data);
                return new ResultVM<object>(true,"新增"+Account+"帳號的"+Data.Permission_Id+"權限成功", null);
            }
            catch (Exception e)
            {
                return new ResultVM<object>(false, e.Message.ToString(), null);
            }
        }
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P017")]
        [HttpPut]
        [Route("api/Permission")]
        //修改權限管理員
        public ResultVM<PermissionIndexViewModel> EditRole(string Account, PermissionIndexViewModel Data)
        {
            try
            {
                permissionService.UpdatePerssion(Account, Data);
                Data.Account = Account;
                return new ResultVM<PermissionIndexViewModel>(true, "修改" + Account + "帳號的" + Data.Role_Id + "角色成功", Data);
            }
            catch(Exception e)
            {
                return new ResultVM<PermissionIndexViewModel>(false, e.Message.ToString(), null);
            }
        }

        //還原例外權限
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P017")]
        [HttpDelete]
        [Route("api/Permission")]
        public ResultVM<object> RestPemission(string Account)
        {
            try
            {
            permissionService.DeletePerssion(Account);
            return new ResultVM<object>(true, "刪除資料" + Account+ "例外權限成功", null);
            }
            catch(Exception e)
            {
                return new ResultVM<object>(false, e.Message.ToString(), null);
            }
        }
    }
}
