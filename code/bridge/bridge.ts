namespace BridgePattern {

  export class Abstraction {
    implementor: Implementor
    constructor(imp: Implementor) {
      this.implementor = imp
    }
    public operation(s: String): void {
      throw new Error("这是抽象方法!")
    }
  }

  export class RefinedAbstractionA extends Abstraction {
    constructor(imp: Implementor) {
      super(imp)
    }
    public operation(s: String): void {
      console.log("RefinedAbstractionA的operation方法")
      this.implementor.operationImp(s)
    }
  }

  export class RefinedAbstractionB extends Abstraction {
    constructor(imp: Implementor) {
      super(imp)
    }
    public operation(s: String): void {
      console.log("RefinedAbstractionB的operation方法")
      this.implementor.operationImp(s)
    }
  }

  export interface Implementor {
    operationImp(s: any): void
  }

  export class ConcreteImplementorA implements Implementor {
    public operationImp(s: any) : void {
      console.log("`operationImp`方法")
      console.log(s)
    }
  }

  export class ConcreteImplementorB implements Implementor {
    public operationImp(s: any) : void {
      console.log("`operationImp`方法")
      console.log(s)
    }
  }
}
