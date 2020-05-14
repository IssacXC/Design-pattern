namespace BridgePattern {

  export abstract class Abstraction {
    implementor: Implementor
    constructor(imp: Implementor) {
      this.implementor = imp
    }
    abstract operation(s: String): void
  }

  export class RefinedAbstractionA extends Abstraction {
    constructor(imp: Implementor) {
      super(imp)
    }
    public operation(s: String): void {
      console.log("RefinedAbstractionA")
      this.implementor.operationImp(s)
    }
  }

  export class RefinedAbstractionB extends Abstraction {
    constructor(imp: Implementor) {
      super(imp)
    }
    public operation(s: String): void {
      console.log("RefinedAbstractionB")
      this.implementor.operationImp(s)
    }
  }

  export interface Implementor {
    operationImp(s: any): void
  }

  export class ConcreteImplementorA implements Implementor {
    public operationImp(s: any) : void {
      console.log("ConcreteImplementorA")
      console.log(s)
    }
  }

  export class ConcreteImplementorB implements Implementor {
    public operationImp(s: any) : void {
      console.log("ConcreteImplementorB")
      console.log(s)
    }
  }
}
