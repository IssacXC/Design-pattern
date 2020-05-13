/// <reference path="visitor.ts" />
namespace VisitorPattern {
		    var objs: VisitorPattern.Objs = new VisitorPattern.Objs()

			objs.attach(new VisitorPattern.ConcreteElement1())
			objs.attach(new VisitorPattern.ConcreteElement2())

			var v1: VisitorPattern.ConcreteVisitor1 = new VisitorPattern.ConcreteVisitor1(),
				v2: VisitorPattern.ConcreteVisitor2 = new VisitorPattern.ConcreteVisitor2()

			objs.accept(v1)
			objs.accept(v2)
}
