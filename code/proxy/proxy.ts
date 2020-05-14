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
      console.log("Proxy", this.s)
      if (this.realSubject === null || this.realSubject === undefined) {
        console.log("new RealSubject")
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
      console.log(this.s, "RealSubject request")
    }
  }
}
