using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication5.ViewModel
{
    public class ResultVM<T>
        //T可以包含其他ViewModel 型態
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }
        public ResultVM(bool success, string message, T data)
        {
            this.Success = success;
            this.Message = message;
            this.Data = data;
        }
    }
}