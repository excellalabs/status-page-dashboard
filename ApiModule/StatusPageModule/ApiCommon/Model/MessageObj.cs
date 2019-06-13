using System;
using System.Collections.Generic;
using System.Text;

namespace APICommon.Model
{
  public class MessageObj
  {
    public bool IsError { get; set; } = false;
    public string Message { get; set; }
    public int ReturnCode { get; set; } = 200;
  }
}
