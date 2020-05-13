using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Cors;
using System.Web.Http.Cors;

namespace WebApplication5.Controllers
{
    public class CorsHandle : Attribute, ICorsPolicyProvider
    {
        private CorsPolicy objProlicy;

        public CorsHandle()
        {
            // 建立一個跨網域存取的原則物件
            objProlicy = new CorsPolicy
            {
                AllowAnyMethod = true,
                AllowAnyHeader = true
            };

            // 在這裡透過資料庫或是設定的方式，可動態加入允許存取的來源網域清單
            objProlicy.Origins.Add("http://studytutor_backend.hsc.nutc.edu.tw");
        }

        public Task<CorsPolicy> GetCorsPolicyAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            return Task.FromResult(objProlicy);
        }
    }
}