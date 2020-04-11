/// <reference path="facade.ts" />
namespace FacadePattern {
	export namespace Demo {
		export function show() : void {
		  let facade: FacadePattern.Facade = new FacadePattern.Facade()
			facade.operation1()
			facade.operation2()
		}
	}
}

