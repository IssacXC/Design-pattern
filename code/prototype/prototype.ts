namespace PrototypePattern {
  export interface Prototype {
    clone(): Prototype
    toString(): string
  }

  export class Concrete1 implements Prototype {
    clone() : Prototype {
      return new Concrete1()
    }
    toString(): string {
      return "Concrete1"
    }
  }

  export class Concrete2 implements Prototype {
    clone() : Prototype {
      return new Concrete2()
    }

    toString(): string {
      return "Concrete2"
    }
  }

  export class Client {
    private prototypeMap: { [s: string]: Prototype } = {}
    constructor() {
      this.prototypeMap['c1'] = new Concrete1()
      this.prototypeMap['c2'] = new Concrete2()
    }
    createOne(s: string): Prototype {
      console.log(s)
      return this.prototypeMap[s].clone()
    }
  }
}
