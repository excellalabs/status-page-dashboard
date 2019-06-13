using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;
using ApiCommon.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace ApiCommon.Helpers
{
  public static class HttpHelper
  {
    public static RequestObj ExtractRequest(HttpRequest Request)
    {
      RequestObj RO = new RequestObj();
      Dictionary<string, string> Headers = new Dictionary<string, string>();
      Dictionary<string, string> QueryParts = new Dictionary<string, string>();
      foreach (KeyValuePair<string, StringValues> header in Request.Headers)
      {
        if (header.Value.Count > 1)
        {
          int hcount = 0;
          foreach (string s in header.Value)
          {
            Headers.Add(header.Key + "[" + hcount + "]", s);
          }
        }
        else
        {
          Headers.Add(header.Key, header.Value[0]);
        }
      }

      RO.Headers = Headers;

      if (Request.QueryString.HasValue)
      {
        QueryParts = HttpUtility.ParseQueryString(Request.QueryString.Value).ToDictionary();
      }

      
        StreamReader body = new StreamReader(Request.Body);
       // body.BaseStream.Seek(0, SeekOrigin.Begin);
        string requestBody = body.ReadToEnd();
        RO.Body = requestBody;
      
      return RO;
    }

    private const string _alg = "HmacSHA256";
    private const string _salt = "Excella2019SLAWISAWESOME";

    public static string GenerateToken(string username, string password)
    {
      string hash = string.Join(":", new string[] {username,password});
      string hashLeft = "";
      string hashRight = "";
      using (HMAC hmac = HMACSHA256.Create(_alg))
      {
        hmac.Key = Encoding.UTF8.GetBytes(GetHashedPassword(password));
        hmac.ComputeHash(Encoding.UTF8.GetBytes(hash));
        hashLeft = Convert.ToBase64String(hmac.Hash);
        hashRight = string.Join(":", new string[] {username, password});
      }

      return Convert.ToBase64String(Encoding.UTF8.GetBytes(string.Join(":", hashLeft, hashRight)));
    }

    public static string GetHashedPassword(string password)
    {
      string key = string.Join(":", new string[] {password, _salt});
      using (HMAC hmac = HMACSHA256.Create(_alg))
      {
        // Hash the key.
        hmac.Key = Encoding.UTF8.GetBytes(_salt);
        hmac.ComputeHash(Encoding.UTF8.GetBytes(key));
        return Convert.ToBase64String(hmac.Hash);
      }
    }
  }
}

