/// <reference path="simpleFactory.ts" />
namespace simpleFactoryPattern {
	export namespace Demo {
		export function show() : void {
      let a: simpleFactoryPattern.Product = simpleFactoryPattern.Factory.createProduct("A")
      let b: simpleFactoryPattern.Product = simpleFactoryPattern.Factory.createProduct("B")
      console.log(a.use())
      console.log(b.use())
		}
	}
}