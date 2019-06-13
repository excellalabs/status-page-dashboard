using System;
using System.Collections.Generic;
using System.Text;

namespace ApiCommon.Model
{
  public class User
  {
    public string UserName { get; set; }
    public List<string> Permissions { get; set; }
    public string Token { get; set; }
  }
}
