using System;
using System.Collections.Generic;
using System.Text;

namespace StatusPageModule.Model
{
  public class Process
  {
    public string Name { get; set; }
    public string Status { get; set; }
    public string StatusText { get; set; }
    public DateTime LastUpdate { get; set; }
    public List<Process> SubProcess { get; set; } = new List<Process>();
    public bool IsManual { get; set; }
    public bool IsAutomaticAvail { get; set; }

  }
}
