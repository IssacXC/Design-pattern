namespace TemplateMethodPattern {
  export abstract class AbstractClass {
    abstract method1(): void
    abstract method2(): void
    abstract method3(): void
    public templateMethod(): void {
      console.log("templateMethod")
      this.method1()
      this.method2()
      this.method3()
    }
  }

  export class ConcreteClass extends AbstractClass {
    public method1(): void {
      console.log("method1")
    }
    public method2(): void {
      console.log("method2")
    }
    public method3(): void {
      console.log("method3")
    }
}
}
