/// <reference path="bridge.ts" />
namespace BridgePattern {
    let abstractionA: BridgePattern.Abstraction = new BridgePattern.RefinedAbstractionA(new BridgePattern.ConcreteImplementorA())
    let abstractionB: BridgePattern.Abstraction = new BridgePattern.RefinedAbstractionB(new BridgePattern.ConcreteImplementorB())
    abstractionA.operation("abstractionA")
    abstractionB.operation("abstractionB")
}

