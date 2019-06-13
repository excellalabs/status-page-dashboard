using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;

namespace ApiCommon
{
  public static class ToDictionaryExtension
  {
    public static Dictionary<string, string> ToDictionary(this NameValueCollection nvc)
    {
      return nvc.AllKeys.ToDictionary(k => k, k => nvc[k]);
    }
  }
}
