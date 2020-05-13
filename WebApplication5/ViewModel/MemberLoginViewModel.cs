using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebApplication5.Models;

namespace WebApplication5.ViewModel
{
    public class MemberLoginViewModel
    {

        [Required(ErrorMessage = "請輸入會員帳號")]
        public string Account { get; set; }

        [Required(ErrorMessage = "請輸入密碼")]
        public string Password { get; set; }

        public string Role_Id { get; set; }

        public string Permission_Id { get; set; }
        public string Token { get; set; }

    }
}