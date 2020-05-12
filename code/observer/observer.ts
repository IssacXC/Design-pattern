namespace ObserverPattern {
  export class Subject {
    private observers: Observer[] = []
    public register(observer: Observer): void {
      console.log("register",observer)
      this.observers.push(observer)
    }
    public unregister(observer: Observer): void {
      let n: number = this.observers.indexOf(observer)
      console.log("unregister", observer)
      this.observers.splice(n, 1)
    }
    public notify(): void {
      console.log("notify all the observers", this.observers)
      for (let i = 0; i < this.observers.length; i ++) {
        this.observers[i].update()
      }
    }
  }

  export class ConcreteSubject extends Subject {
    private subjectState: number
    get SubjectState(): number {
      return this.subjectState
    }
    set SubjectState(subjectState: number) {
      this.subjectState = subjectState
    }
  }

  export abstract class Observer {
    public update(): void {}
  }

  export class ConcreteObserver extends Observer {
    private name: string
    private state: number
    private subject: ConcreteSubject
    constructor (subject: ConcreteSubject, name: string) {
      super()
      console.log("Create ConcreteObserver", name)
      this.subject = subject
      this.name = name
    }
    public update(): void {
      console.log("ConcreteObserver update")
      console.log(this.name, this.state)
      this.state = this.subject.SubjectState
    }
    get Subject(): ConcreteSubject {
      return this.subject
    }
    set Subject(subject: ConcreteSubject) {
      this.subject = subject
    }
  }
}
