/// <reference path="adapter.ts" />
namespace AdapterPattern {
  // 类适配器
  function classAdapterDemo() {
    let adapter: AdapterPattern.Target = new AdapterPattern.ClassPowerAdapter()
    let phone: AdapterPattern.Client = new AdapterPattern.Client(adapter)
    phone.charge()
  }
  classAdapterDemo()
  // 对象适配器
  function instanceAdapterDemo() {
    let adaptee: AdapterPattern.Adaptee = new AdapterPattern.Adaptee()
    let adapter: AdapterPattern.Target = new AdapterPattern.InstancePowerAdapter(adaptee)
    let phone: AdapterPattern.Client = new AdapterPattern.Client(adapter)
    phone.charge()
  }
  instanceAdapterDemo()
}