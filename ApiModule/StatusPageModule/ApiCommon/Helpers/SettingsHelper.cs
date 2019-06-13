using System;
using System.Collections.Generic;
using StatusPageModule.Model;
using System.Text;
using ApiCommon.Model;

namespace ApiCommon.Helpers
{
  public class SettingsHelper
  {
    #region Singleton Setup

    private static SettingsHelper Instance = null;
    public static SettingsHelper I
    {
      get { return Instance ?? (Instance = new SettingsHelper()); }

      set { Instance = value; }
    }
    #endregion

    public AuthSettings AuthSetting { get; set; }
    public List<Process> Processes { get; set; }

  }
}
