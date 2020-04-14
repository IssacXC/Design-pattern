/// <reference path="flyweight.ts" />
namespace FlyweightPattern {

  let factory: FlyweightPattern.FlyweightFactory = new FlyweightPattern.FlyweightFactory(),
  conc1: FlyweightPattern.ConcreteFlyweight = <FlyweightPattern.ConcreteFlyweight>factory.getFlyweight("conc1"),
  conc2: FlyweightPattern.ConcreteFlyweight = <FlyweightPattern.ConcreteFlyweight>factory.getFlyweight("conc2")

  conc1.operation("1")
  conc2.operation("2")

}

