namespace ProxyPattern {
  export interface Subject {
    request(): void
  }

  export class Proxy implements Subject {
    private realSubject: RealSubject
    private s: string
    constructor(s: string) {
      this.s = s
    }

    public request(): void {
      console.log("代理请求", this.s)
      if (this.realSubject === null || this.realSubject === undefined) {
        console.log("创建新的RealSubject对象。")
        this.realSubject = new RealSubject(this.s)
      }
      this.realSubject.request()
    }
  }

  export class RealSubject implements Subject {
    private s: string

    constructor(s: string) {
      this.s = s
    }
    public request(): void {
      console.log(this.s, " 调用了RealSubject的request方法")
    }
  }
}
