namespace DecoratorPattern {

  export interface Component {
    operation(): void
  }

  export class ConcreteComponent implements Component {
    private s: String
    constructor(s: String) {
      this.s = s
    }

    public operation(): void {
      console.log(this.s, "实现了ConcreteComponent的operation方法")
    }
  }

  export class Decorator implements Component {
    private component: Component
    private id: Number

    constructor(id: Number, component: Component) {
      this.id = id
      this.component = component
    }

    public get Id(): Number {
      return this.id
    }

    public operation(): void {
      console.log(this.id, "实现了装饰器的operation方法")
      this.component.operation()
    }
  }

  export class ConcreteDecorator extends Decorator {
    constructor(id: Number, component: Component) {
      super(id, component)
    }

    public operation(): void {
      super.operation()
      console.log(this.Id, "实现了ConcreteDecorator的Operation方法")
    }
  }
}
