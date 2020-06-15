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

  return "SOCKS5 13.114.70.0:80";

}
