function FindProxyForURL(url, host)

{
  if (shExpMatch(host, "*skype*"))
    return "DIRECT";
  
  if (shExpMatch(host, "*.google.*"))
    return "DIRECT";
  
  if (shExpMatch(host, "*bitmex*"))
    return "DIRECT";
  
  if (shExpMatch(host, "*.blockchain.*"))
    return "DIRECT";

  return "SOCKS5 3.7.136.154:80";

}
