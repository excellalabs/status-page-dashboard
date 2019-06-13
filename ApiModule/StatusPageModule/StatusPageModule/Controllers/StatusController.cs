using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using ApiCommon.Helpers;
using ApiCommon.Model;
using APICommon.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StatusPageModule.Helpers;
using StatusPageModule.Model;

namespace StatusPageModule.Controllers
{
  [Route("api")]
  [ApiController]
  public class StatusController : ControllerBase
  {
    [Route("status")]
    [HttpGet]
    public MessageObj GetProcessUpdate()
    {
      RequestObj RO = HttpHelper.ExtractRequest(Request);

      if (RO.Headers.ContainsKey("bearertoken"))
      {

        User U = null;
        if (LoginHelper._LoginCache.ContainsKey(RO.Headers["bearertoken"]))
        {
          U = LoginHelper._LoginCache[RO.Headers["bearertoken"]];
        }

        if (U != null && (U.Permissions.Contains("all") || U.Permissions.Contains("view")))
        { 
          StatusHelper SH = new StatusHelper();

          string ReturnData = JsonConvert.SerializeObject(SH.GetProcessUpdate());
          return new MessageObj() {Message = ReturnData};
        }
        else
        {
          return new MessageObj()
          {
            IsError = true,
            Message = "Authentication Failed",
            ReturnCode = 401
          };
        }
      }

      return new MessageObj()
      {
        IsError = true,
        Message = "Missing Information",
        ReturnCode = 400
      };
    }

    [Route("status")]
    [HttpPost]
    public MessageObj SaveProcess()
    {
      RequestObj RO = HttpHelper.ExtractRequest(Request);
      if (RO.Headers.ContainsKey("bearertoken"))
      {
        User U = null;
        if (LoginHelper._LoginCache.ContainsKey(RO.Headers["bearertoken"]))
        {
          U = LoginHelper._LoginCache[RO.Headers["bearertoken"]];
        }

        if (U != null && U.Permissions.Contains("all"))
        {
          StatusHelper SH = new StatusHelper();
          SH.SaveProcess(RO);
        }
        else
        {
          return new MessageObj()
          {
            IsError = true,
            Message = "Authentication Failed",
            ReturnCode = 401
          };
        }
      }

      return new MessageObj()
      {
        IsError = true,
        Message = "Missing Information",
        ReturnCode = 400
      };
    }

    [Route("status")]
    [HttpDelete]
    public MessageObj DeleteProcess()
    {
      RequestObj RO = HttpHelper.ExtractRequest(Request);
      if (RO.Headers.ContainsKey("bearertoken"))
      {
        User U = null;
        if (LoginHelper._LoginCache.ContainsKey(RO.Headers["bearertoken"]))
        {
          U = LoginHelper._LoginCache[RO.Headers["bearertoken"]];
        }

        if (U != null && U.Permissions.Contains("all"))
        {
          StatusHelper SH = new StatusHelper();
          SH.DeleteProcess(RO);
        }
        else
        {
          return new MessageObj()
          {
            IsError = true,
            Message = "Authentication Failed",
            ReturnCode = 401
          };
        }
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
