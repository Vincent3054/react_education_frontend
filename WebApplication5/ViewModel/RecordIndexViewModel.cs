using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication5.Models;

namespace WebApplication5.ViewModel
{
    public class RecordIndexViewModel
    {
        //搜尋欄位
        public string Search { get; set; }
        //顯示資料陣列
        public List<Record> DataList { get; set; }
        //文章列表的帳號
        public string Account { get; set; }

        public string Teacher { get; set; }
        public string Phone { get; set; }
    }
}