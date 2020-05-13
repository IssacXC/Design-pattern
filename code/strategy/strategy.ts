namespace StrategyPattern {
  export interface Strategy {
      execute(): void
  }

  export class ConcreteStrategy1 implements Strategy {
    public execute(): void {
      console.log("ConcreteStrategy1execute")
    }
  }

  export class ConcreteStrategy2 implements Strategy {
    public execute(): void {
      console.log("ConcreteStrategy2execute")
    }
  }

  export class Context {
    private strategy: Strategy
    constructor(strategy: Strategy) {
        this.strategy = strategy
    }
    public executeStrategy(): void {
        this.strategy.execute()
    }
  }
}

