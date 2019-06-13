using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Principal;
using System.Text;
using ApiCommon.Helpers;
using ApiCommon.Model;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace StatusPageModule.Helpers
{
  public class LoginHelper
  {
    public static Dictionary<string, User> _LoginCache { get; } = new Dictionary<string, User>();

        public User Login(string Username, string Password)
        {
            string AToken = HttpHelper.GenerateToken(Username, Password);

            if (_LoginCache.ContainsKey(AToken))
            {
              return _LoginCache[AToken];
            }

            //do jumpcloud here

            //admin override
            if (Username == "AdminOR" && AToken == SettingsHelper.I.AuthSetting.AdminPW)
            {
              _LoginCache.Add(AToken,
                new User() {Permissions = new List<string>() {"all"}, UserName = "AdminOR", Token = AToken});
              return _LoginCache[AToken];
            }

            return null;
        }
  }
}
