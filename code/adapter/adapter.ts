namespace AdapterPattern {
  // 适配器有2种实现模式，类模式和对象模式
  // 目标接口
  export interface Target {
    connect5v(): void
  }
  // 被适配类
  export class Adaptee {
    connect220v() {
      console.log('接通220V电源，')
    }
  }
  // 客户类，保存对适配器对象的引用关系，通过访问适配器对象来间接使用被适配对象
  // 这里，手机充电时只需要知道适配器对象的5V接口就能调用被适配的220V插座来充电了
  export class Client {
    private voltage5v: Target
    constructor(voltage5v: Target) {
      this.voltage5v = voltage5v
    }
    charge(): void {
      this.voltage5v.connect5v()
      console.log('已经接通电源，手机开始充电')
    }
  }

  // 类适配器
  // Adaptee是被适配的类，接口跟最终要求不一致
  // Target包含想要提供的接口
  // 因此"继承"被适配的类，"实现"想要支持的接口
  export class ClassPowerAdapter extends Adaptee implements Target {
    connect5v(): void {
      this.connect220v()
      console.log('将220V电源转化为5v电源，')
    }
  }

  // 对象适配器
  // 适配器中持有被适配类的对象的引用
  export class InstancePowerAdapter implements Target {
    private Adaptee: Adaptee
    constructor(Adaptee: Adaptee) {
      this.Adaptee = Adaptee
    }
    connect5v(): void {
      this.Adaptee.connect220v()
      console.log('将220V电源转化为5v电源，')
    }
  }

}