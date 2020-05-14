namespace AbstractFactoryPattern {
  export interface AbstractProductA {
    useA(): string
  }
  export interface AbstractProductB {
    useB(): string
  }
  export interface AbstractFactory {
    createProductA(param?: any) : AbstractProductA
    createProductB(param?: any) : AbstractProductB
  }

  export class ProductA1 implements AbstractProductA {
    useA = () => {
      return "ProductA1"
    }
  }
  export class ProductB1 implements AbstractProductB {
    useB = () => {
      return "ProductB1"
    }
  }

  export class ProductA2 implements AbstractProductA {
    useA = () => {
      return "ProductA2"
    }
  }
  export class ProductB2 implements AbstractProductB {
    useB = () => {
      return "ProductB2"
    }
  }


  export class ConcreteFactory1 implements AbstractFactory {
    createProductA(param?: any) : AbstractProductA {
      return new ProductA1()
    }

    createProductB(param?: any) : AbstractProductB {
      return new ProductB1()
    }
  }
  export class ConcreteFactory2 implements AbstractFactory {
    createProductA(param?: any) : AbstractProductA {
      return new ProductA2()
    }

    createProductB(param?: any) : AbstractProductB {
      return new ProductB2()
    }
  }

  export class Tester {
    private abstractProductA: AbstractProductA
    private abstractProductB: AbstractProductB

    constructor(factory: AbstractFactory) {
      this.abstractProductA = factory.createProductA()
      this.abstractProductB = factory.createProductB()
    }

    public test(): void {
      console.log(this.abstractProductA.useA())
      console.log(this.abstractProductB.useB())
    }
  }
}