using System;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication5.Models;
using WebApplication5.Service;
using WebApplication5.ViewModel;


namespace WebApplication5.Controllers
{
    //下禮拜三晚上七點
    //學生、班老師、輔導老師、註冊前端POST BODY進來
    //新增權限
    //驗證信
    //班級學生pk自動產生
    //RBAC能擋權限
    //列出所有權限
    //學習輔導紀錄4
    //登入查詢學生

    [EnableCors("*", "*", "*")]
    public class ClassController : ApiController
    {
        private readonly ClassDBService classService = new ClassDBService();
        //查詢班級內學生
        //管理者
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P014")]
        [HttpGet]
        [Route("api/Class")]
       // https://localhost:44385/api/Class?Class_Id=C101
        public ResultVM<ClassViewModel> GetClassData(string Class_Id )
        {
            ClassViewModel Data = new ClassViewModel();
            try
            {
                Data.DataList = classService.Search(Class_Id);
                if (Data.DataList == null)
                {
                    return new ResultVM<ClassViewModel>(false, " 查詢無此班級", null);
                }
                else
                { 
                return new ResultVM<ClassViewModel>(true," 查詢成功", Data);
                }
            }
            catch(Exception e)
            {
                return new ResultVM<ClassViewModel>(false, e.Message.ToString(), Data);
            }
        }
        //查有幾個班以及班導師
        //管理者
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P014")]
        [HttpGet]
        [Route("api/Class/All")]
        public ResultVM<ClassAllViewModel> GetClassAll()
        {
            ClassAllViewModel Data = new ClassAllViewModel();
            try
            {
                Data.DataList = classService.SearchAll();
                if (Data.DataList == null)
                {
                    return new ResultVM<ClassAllViewModel>(false, " 查詢無此班級", null);
                }
                else
                {
                    return new ResultVM<ClassAllViewModel>(true, " 查詢成功", Data);
                }
            }
            catch (Exception e)
            {
                return new ResultVM<ClassAllViewModel>(false, e.Message.ToString(), null);
            }
        }
        //班導師登入查看自己班級
        //jerry1005管理C101班級
        //班級導師
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P018")]
        [HttpGet]
        [Route("api/Class/TeacherAll")]
        public ResultVM<ClassTeacherAllViewModel> TeacherGetClassAll()
        {
            string Account = User.Identity.Name;
            ClassTeacherAllViewModel Data = new ClassTeacherAllViewModel();
            try
            {
                Data.DataList = classService.SearchAll(Account);
                if (Data.DataList == null)
                {
                    return new ResultVM<ClassTeacherAllViewModel>(false, " 班級內尚無學生", null);
                }
                else
                {
                    return new ResultVM<ClassTeacherAllViewModel>(true, " 查詢成功", Data);
                }
            }
            catch (Exception e)
            {
                return new ResultVM<ClassTeacherAllViewModel>(false, e.Message.ToString(), null);
            }
        }
        //新增班級
        //管理者
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles ="P015")]
        [HttpPost]
        [Route("api/Class")]
        public ResultVM<Class> InserClassData(Class Data)
        {
            try
            {
                //去新增一筆資料
                classService.InsertClass(Data);
                return new ResultVM<Class>(true, "新增成功", Data);
            }
            catch (Exception e)
            {
                return new ResultVM<Class>(false, e.Message.ToString(), null);
            }
        }
        //刪除班級
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P017")]
        [HttpDelete]
        [Route("api/Class")]
        public ResultVM<Class> DeleteClassData(string Class_Id)
        {
            try
            {
                classService.DeleteClass(Class_Id);
                return new ResultVM<Class>(true, "刪除"+Class_Id+"班級成功", null);
            }
            catch (Exception e)
            {
                return new ResultVM<Class>(false, e.Message.ToString(), null);
            }
        }
        //修改班級
        [EnableCors(origins: "http://studytutor_backend.hsc.nutc.edu.tw", headers: "*", methods: "*")]
        [Authorize(Roles = "P017")]
        [HttpPut]
        [Route("api/Class")]
        public ResultVM<Class> PutClassData(Class UpData)
        {
            try
            {
                classService.PutClass(UpData);
                return new ResultVM<Class>(true, "修改"+UpData.Class_Id+"成功", UpData);
            }
            catch(Exception e)
            {
                return new ResultVM<Class>(false, e.Message.ToString(), UpData);
            }
        }
        //結尾
    }
}
