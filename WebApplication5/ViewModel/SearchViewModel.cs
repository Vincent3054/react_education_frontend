﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication5.Models;

namespace WebApplication5.ViewModel
{
    public class SearchViewModel
    {
        public string Search{get;set;}
        public Member member { get; set; }
    }
}