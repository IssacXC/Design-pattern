namespace simpleFactoryPattern {
  export interface Product {
    use(param?: any) : void
  }

  export class ConcreteProductA implements Product {
    use = (param?: any) => {
      return "ConcreteProductA的use方法"
    }
  }

  export class ConcreteProductB implements Product {
    use = (param?: any) => {
      return "ConcreteProductB的use方法"
    }
  }


  export namespace Factory {
    export function createProduct(str: string) : Product {
      if (str === "A") {
        return new ConcreteProductA()
      } else if (str === "B") {
        return new ConcreteProductB()
      }
      return null
    }
  }
}