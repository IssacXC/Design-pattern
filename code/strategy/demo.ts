/// <reference path="strategy.ts" />
namespace StrategyPattern {
  let context: StrategyPattern.Context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy1())
  context.executeStrategy()
  context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy2())
  context.executeStrategy()
}
