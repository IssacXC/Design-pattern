/// <reference path="state.ts" />
namespace StatePattern {
  let context: StatePattern.Context = new StatePattern.Context(new StatePattern.ConcreteStateA())
  context.request()
  context.request()
  context.request()
  context.request()
  context.request()
  context.request()
  context.request()
  context.request()
}
