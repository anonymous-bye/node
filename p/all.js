function FindProxyForURL(url, host)

{
  if (shExpMatch(host, "*skype*"))
    return "DIRECT";

  return "SOCKS5 54.65.39.97:80";

}
