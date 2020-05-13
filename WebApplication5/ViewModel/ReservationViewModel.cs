using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication5.Models;

namespace WebApplication5.ViewModel
{
    //存放學生資料陣列
    public class ReservationViewModel
    {
        public List<Reservation> DataList { get; set; }
    }
}