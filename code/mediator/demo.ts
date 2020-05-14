/// <reference path="mediator.ts" />
namespace MediatorPattern {
	let cm: MediatorPattern.ConcreteMediator = new MediatorPattern.ConcreteMediator(),
	c1: MediatorPattern.ConcreteColleagueA = new MediatorPattern.ConcreteColleagueA(cm),
	c2: MediatorPattern.ConcreteColleagueB = new MediatorPattern.ConcreteColleagueB(cm)
	cm.concreteColleagueA = c1
	cm.concreteColleagueB = c2
	c1.send("ConcreteColleagueA")
	c2.send("ConcreteColleagueB")
}
