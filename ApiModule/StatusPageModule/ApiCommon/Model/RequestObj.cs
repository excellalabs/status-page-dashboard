using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;

namespace ApiCommon.Model
{
  public class RequestObj
  {
    public Dictionary<string, string> Headers { get; set; }
    public object Body { get; set; }
    public Dictionary<string, string> QueryStrings { get; set; }
  }
}
