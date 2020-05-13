using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication5.ViewModel
{
    public class ForgetViewModel
    {
        public string Account { get; set; }
        [EmailAddress(ErrorMessage = "非Email格式")]
        public string Email { get; set; }
    }
}