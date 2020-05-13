using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication5.ViewModel
{
    public class ChangePasswordViewModels
    {
        [Required(ErrorMessage ="請輸入密碼")]
        public string Password { get; set; }

        [Required(ErrorMessage ="請輸入新密碼")]
        public string NewPassword { get; set; }

        [Required(ErrorMessage ="確認新密碼")]
        [Compare("NewPassword",ErrorMessage ="兩次密碼輸入不相同")]
        public string PasswordCheck { get; set; }
    }
}