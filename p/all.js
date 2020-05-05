function FindProxyForURL(url, host)

{
  if (shExpMatch(host, "*skype*"))
    return "DIRECT";
  
  if (shExpMatch(host, "www.google*"))
    return "DIRECT";

  return "SOCKS5 54.65.39.97:80";

}
