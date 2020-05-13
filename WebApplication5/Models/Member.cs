using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication5.Models
{
    public class Member

    {
        [Required(ErrorMessage = "請輸入帳號")]
        [StringLength(30, MinimumLength = 6, ErrorMessage = "帳號長度須介於6-30字元")]
        public string Account { get; set; }

        [Required(ErrorMessage = "請輸入Email")]
        [EmailAddress(ErrorMessage = "請輸入正確emil格式")]
        public string Email { get; set; }

        [Required(ErrorMessage = "請輸入姓名")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "姓名長度介於2~100之間")]
        public string Name { get; set; }

        [Required(ErrorMessage = "請輸入密碼")]
        public string Password { get; set; }
        public string AuthCode { get; set; }

        public string Member_Id { get; set; }

        public string Role_Id { get; set; }

        public string Phone { get; set; }

        public string Sex { get; set; }


        public string Class_Id { get; set; }

        public string Grade { get; set; }

        public string Class_Name { get; set; }

        public string Teacher { get; set; }
    }
}