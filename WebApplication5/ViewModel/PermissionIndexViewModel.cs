using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication5.Models;

namespace WebApplication5.ViewModel
{
    public class PermissionIndexViewModel
    {

        public string Account { get; set; }
        public string Role_Id { get; set; }
        public List<PermissionId> DataList { get; set; }
    }
}