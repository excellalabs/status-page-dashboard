using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using ApiCommon.Helpers;
using ApiCommon.Model;
using Newtonsoft.Json;
using StatusPageModule.Model;

namespace StatusPageModule.Controllers
{
  public class Startup
  {
    public static void FirstRun()
    {
      using (FileStream FS = File.Open(AppDomain.CurrentDomain.BaseDirectory + "settings/AuthOverride.dat",
        FileMode.Open,
        FileAccess.ReadWrite, FileShare.ReadWrite))
      {
        TextReader TR = new StreamReader(FS);
        AuthSettings S = JsonConvert.DeserializeObject<AuthSettings>(TR.ReadToEnd());
        SettingsHelper.I.AuthSetting = S;
      }


      using (FileStream FS = File.Open(AppDomain.CurrentDomain.BaseDirectory + "settings/Processes.dat",
        FileMode.Open,
        FileAccess.ReadWrite, FileShare.ReadWrite))
      {
        TextReader TR = new StreamReader(FS);
        List<Process> S = JsonConvert.DeserializeObject<List<Process>>(TR.ReadToEnd());
        SettingsHelper.I.Processes = S;
      }

    }
  }
}
