/// <reference path="proxy.ts" />
namespace ProxyPattern {
	let proxy1: ProxyPattern.Proxy = new ProxyPattern.Proxy("proxy1"),
	proxy2: ProxyPattern.Proxy = new ProxyPattern.Proxy("proxy2")
	proxy1.request()
	proxy1.request()
	proxy2.request()
	proxy2.request()
	proxy1.request()
}

