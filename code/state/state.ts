namespace StatePattern {
  export interface State {
    handle(context: Context): void
  }

  export class ConcreteStateA implements State {
    public handle(context: Context): void {
      console.log("ConcreteStateA")
      context.State = new ConcreteStateB()
    }
  }

  export class ConcreteStateB implements State {
    public handle(context: Context): void {
      console.log("ConcreteStateB")
      context.State = new ConcreteStateA()
    }
  }

  export class Context {
    private state: State
    constructor(state: State) {
      this.state = state
    }
    get State(): State {
      return this.state
    }
    set State(state: State) {
      this.state = state
    }
    public request(): void {
      console.log("request")
      this.state.handle(this)
    }
  }
}

