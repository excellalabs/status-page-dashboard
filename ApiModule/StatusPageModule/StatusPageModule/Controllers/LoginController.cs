using System;
using System.Net.Http;
using ApiCommon.Helpers;
using ApiCommon.Model;
using Microsoft.AspNetCore.Mvc;
using APICommon.Model;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using StatusPageModule.Helpers;

namespace StatusPageModule.Controllers
{
  [Controller]
  [Route("api/auth")]
  public class LoginController: ControllerBase
  {
    [Route("login")]
    [HttpPost]
    public MessageObj Login()
    {
      RequestObj RO = HttpHelper.ExtractRequest(Request);

      if (RO.Headers.ContainsKey("u") && RO.Headers.ContainsKey("p"))
      {
        LoginHelper LH = new LoginHelper();

        string UserName = RO.Headers["u"];
        string Password = RO.Headers["p"];

        User UObj = LH.Login(UserName, Password);

        if (UObj != null)
        {
          string UserObj = JsonConvert.SerializeObject(UObj);

          MessageObj Mo = new MessageObj()
          {
            Message = UserObj
          };
          return Mo;
        }

        return new MessageObj()
        {
          IsError = true,
          Message = "Authentication Failed",
          ReturnCode = 401
        };

      }

      return new MessageObj()
      {
        IsError = true,
        Message = "Missing Information",
        ReturnCode = 400
      };
    }
  }
}
