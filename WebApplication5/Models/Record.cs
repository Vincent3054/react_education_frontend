using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication5.Models
{
    public class Record
    {
        //輔導紀錄編號
        public int A_Id { get; set; }

        //受輔導學生帳號
        public string Account { get; set; }

        //發文時間
        public DateTime CreateTime { get; set; }
        //當下登入填寫人
        public string KeyinTeacher { get; set; }
        //文章類別
        public string Category { get; set; }
        //標題
        public string Title { get; set; }
        //晤談內容
        public string Content { get; set; }
        //輔導摘要
        public string Abstract {get;set;}




    }
}