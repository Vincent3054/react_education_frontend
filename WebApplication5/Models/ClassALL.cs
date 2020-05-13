using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication5.Models
{
    public class ClassAll
    {
        //班級代號
        public string Class_Id { get; set; }
        //入學年度
        public string Grade { get; set; }
        //班級名稱

        public string ClassName { get; set; }

        //班級導師
        public string Teacher { get; set; }
    }
}