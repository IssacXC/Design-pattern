namespace FacadePattern {
  export class Part1 {
    public method1(): void {
      console.log("`method1`")
    }
  }

  export class Part2 {
    public method2(): void {
      console.log("`method2`")
    }
  }

  export class Part3 {
    public method3(): void {
      console.log("`method3`")
    }
  }

  export class Facade {
    private part1: Part1 = new Part1()
    private part2: Part2 = new Part2()
    private part3: Part3 = new Part3()

    public operation1(): void {
      console.log("调用`operation1` 方法 ===")
      this.part1.method1()
      this.part2.method2()
      console.log("==========================")
    }

    public operation2(): void {
      console.log("调用`operation2` 方法 ===")
      this.part1.method1()
      this.part3.method3()
      console.log("==========================")
    }
  }
}
