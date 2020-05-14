namespace MediatorPattern {
  export interface Mediator {
    send(msg: string, colleague: Colleague): void
  }

  export abstract class Colleague {
    public mediator: Mediator
    constructor(mediator: Mediator) {
      this.mediator = mediator
    }
    abstract send(msg: string): void
    abstract receive(msg: string): void
  }

  export class ConcreteColleagueA extends Colleague {
    constructor(mediator: Mediator) {
      super(mediator)
    }
    public send(msg: string): void {
      this.mediator.send(msg, this)
    }
    public receive(msg: string): void {
      console.log(msg, "ConcreteColleagueA")
    }
  }

  export class ConcreteColleagueB extends Colleague {
    constructor(mediator: Mediator) {
      super(mediator)
    }
    public send(msg: string): void {
      this.mediator.send(msg, this)
    }
    public receive(msg: string): void {
      console.log(msg, "ConcreteColleagueB")
    }
  }

  export class ConcreteMediator implements Mediator {
    public concreteColleagueA: ConcreteColleagueA
    public concreteColleagueB: ConcreteColleagueB
    public send(msg: string, colleague: Colleague): void {
      if (this.concreteColleagueA === colleague) {
        this.concreteColleagueB.receive(msg)
      } else {
        this.concreteColleagueA.receive(msg)
      }
    }
  }
}
