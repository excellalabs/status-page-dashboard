using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ApiCommon.Helpers;
using ApiCommon.Model;
using Newtonsoft.Json;
using StatusPageModule.Model;

namespace StatusPageModule.Helpers
{
  public class StatusHelper
  {
    public List<Process> GetProcessUpdate()
    {
      return SettingsHelper.I.Processes;
    }

    public void SaveProcess(RequestObj RO)
    {
      if (RO.Body != null)
      {
        Process P = JsonConvert.DeserializeObject<Process>(RO.Body as string);
        Process Existing = SettingsHelper.I.Processes.FirstOrDefault(x => x.Name.ToLower() == P.Name.ToLower());

        if (Existing != null)
        {
          Existing.IsManual = P.IsManual;
          Existing.LastUpdate = DateTime.UtcNow;
          if (P.IsManual)
          {
            Existing.Status = P.Status;
            Existing.StatusText = P.StatusText;
          }
        }
        else
        {
          SettingsHelper.I.Processes.Add(P);
        }
      }
    }

    public void DeleteProcess(RequestObj RO)
    {
      if (RO.Body != null)
      {
        Process P = JsonConvert.DeserializeObject<Process>(RO.Body as string);
        Process Existing = SettingsHelper.I.Processes.FirstOrDefault(x => x.Name.ToLower() == P.Name.ToLower());

        if (Existing != null)
        {
          SettingsHelper.I.Processes.Remove(Existing);
        }

      }
    }

  }
}
