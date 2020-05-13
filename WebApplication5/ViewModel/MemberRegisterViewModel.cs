using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebApplication5.Models;

namespace WebApplication5.ViewModel
{
    public class MemberRegisterViewModel
    {
        public Member  member { get; set; }

        [Required(ErrorMessage = "請輸入密碼")]
        public string Password { get; set; }

        public string Name { get; set; }

        public string Account { get; set; }
        [Required(ErrorMessage = "請輸入Email")]
        public string Email { get; set; }

        [Compare("Password", ErrorMessage = "兩次密碼輸入不一致")]
        [Required(ErrorMessage = "請輸入確認密碼")]
        public string PasswordCheck { get; set; }

        public string Phone { get; set; }

        public string Sex { get; set; }
    }
}