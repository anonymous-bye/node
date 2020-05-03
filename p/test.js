function FindProxyForURL(url, host)

{

if (dnsDomainIs(host, “whatismyipaddress.com”))
return "PROXY 18.194.124.67:80";

else if (isPlainHostName(host))

return "DIRECT";

else if (shExpMatch(host, "*skype*"))

return "PROXY 18.194.124.67:80";

else

return "DIRECT";

}