using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication5.ViewModel
{
    public class ResetPasswordViewModel
    {
       // public string Account { get; set; }
        //public string AuthCode { get; set; }

        [Required(ErrorMessage = "請輸入密碼")]
        public string NewPassword { get; set; }

        [Required(ErrorMessage = "請輸入密碼")]
        [Compare("NewPassword", ErrorMessage = "兩次密碼輸入不一致")]
        public string NewPasswordCheck { get; set; }
    }
}