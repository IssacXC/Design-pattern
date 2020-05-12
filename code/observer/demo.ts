/// <reference path="observer.ts" />
namespace ObserverPattern {
  let sub: ObserverPattern.ConcreteSubject = new ObserverPattern.ConcreteSubject()
  sub.register(new ObserverPattern.ConcreteObserver(sub, "User1"))
  sub.register(new ObserverPattern.ConcreteObserver(sub, "User2"))
  sub.register(new ObserverPattern.ConcreteObserver(sub, "User3"))
  sub.SubjectState = 123
  sub.notify()
}
