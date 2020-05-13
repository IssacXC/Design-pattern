namespace VisitorPattern {
  export interface Visitor {
    visitConcreteElement1(concreteElement1: ConcreteElement1): void
    visitConcreteElement2(concreteElement2: ConcreteElement2): void
  }

  export class ConcreteVisitor1 implements Visitor {
    public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
      console.log("调用ConcreteVisitor1的visitConcreteElement1方法")
    }
    public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
      console.log("调用ConcreteVisitor1的visitConcreteElement2方法")
    }
  }

  export class ConcreteVisitor2 implements Visitor {
    public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
      console.log("调用ConcreteVisitor2的visitConcreteElement1方法")
    }

    public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
      console.log("调用ConcreteVisitor2的visitConcreteElement2方法")
    }
  }


  export interface Element {
    operate(visitor: Visitor): void
  }

  export class ConcreteElement1 implements Element {
    public operate(visitor: Visitor): void {
      console.log("ConcreteElement1")
      visitor.visitConcreteElement1(this)
    }
  }

  export class ConcreteElement2 implements Element {
    public operate(visitor: Visitor): void {
      console.log("ConcreteElement2")
      visitor.visitConcreteElement2(this)
    }
  }

  export class Objs {
    private elements: Element[] = []
    public attach(e: Element): void {
      this.elements.push(e)
    }
    public detach(e: Element): void {
      var index = this.elements.indexOf(e)
      this.elements.splice(index, 1)
    }
    public accept(visitor: Visitor): void {
      for(let i = 0; i < this.elements.length ;i++) {
        this.elements[i].operate(visitor)
      }
    }
  }
}

