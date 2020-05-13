using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication5.Models
{
    public class Reservation
    {
       // 預約功能
        //class資料表 班級代號
        public string Class_Id { get; set; }

        public string Account { get; set; }

        //Reservation 資料表
        //編號
        public int Reservation_Id { set; get; }
        //時段 (早上、中午、下午)
        public string Period { get; set; }
        
        //時間(16 :00-17:00)
        public string Time { get; set; }

        //時間(2020/4/25)
        public DateTime Date { get; set; }

        //現在輔導老師
        public string NowPSY { get; set; }

        //上次輔導老師
        public string BeforePSY { get; set; }
        //狀態 (1.2.3.4)
        public int Fettle { get; set; }
        //老師要不要接受指派
        public string  CheckCancel { get; set; }

        //老師備註
        public string TeacherRemarks { get; set; }

        //學生備註
        public string StudentsRemarks { get; set; }
    }
}