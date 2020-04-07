namespace BuilderPattern {
  export abstract class Builder {
    abstract buildPartA (board:string) : void 
    abstract buildPartB (display:string) : void
    abstract buildPartC () : void
    abstract build() : Product
  }


  export class Director {
    public pBuilder: Builder
    public constructor(builder: Builder) {
      this.pBuilder = builder
    }
    public construct(display:string,board:string) {
      this.pBuilder.buildPartA(display)
      this.pBuilder.buildPartB(board)
      this.pBuilder.buildPartC()
    }
  }


  export class Product {
    protected mboard: string
    protected mDisplay: string
    protected mOs: string
    public setBoard(board: string) :void{
      this.mboard = board
    }

    public setDisplay(display: string) : void{
        this.mDisplay = display
    }
    public setOs() :void {
      this.mOs = 'mac'
    }
  }


  export class ConcreteBuilder extends Builder {
    private mbuilder: Product = new Product()
    buildPartA (display:string) {
      this.mbuilder.setDisplay(display)
    }
    buildPartB (board:string) {
      this.mbuilder.setBoard(board)
    }
    buildPartC () {
      this.mbuilder.setOs()
    }
    build(): Product {
      return this.mbuilder
    }
  }
}
