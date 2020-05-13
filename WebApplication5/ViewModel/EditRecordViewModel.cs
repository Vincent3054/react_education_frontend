using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication5.ViewModel
{
    public class EditRecordViewModel
    {
        public int  A_Id { get; set; }
        public string Content { get; set; }

        public string Title { get; set; }
        public string Category { get; set; }
        public string Abstract { get; set; }
    }
}