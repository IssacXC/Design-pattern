namespace CommandPattern {
  export abstract class Command {
    abstract execute(): void
  }

  export class ConcreteCommand1 extends Command {
    private receiver: Receiver
    constructor(receiver: Receiver) {
      super()
      this.receiver = receiver
    }
    public execute(): void {
      console.log("ConcreteCommand1")
      this.receiver.action()
    }
  }

  export class ConcreteCommand2 extends Command {
    private receiver: Receiver
    constructor(receiver: Receiver) {
      super()
      this.receiver = receiver
    }
    public execute(): void {
      console.log("ConcreteCommand2")
      this.receiver.action()
    }
  }

  export class Invoker {
    private commands: Command[]

    constructor() {
      this.commands = []
    }

    public storeAndExecute(cmd: Command) {
      this.commands.push(cmd)
      cmd.execute()
    }
  }

  export class Receiver {
    public action(): void {
      console.log("Receiver")
    }
  }
}

