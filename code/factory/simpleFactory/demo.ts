namespace simpleFactoryPattern {
	export namespace Demo {
		export function show() : void {
      var a: simpleFactoryPattern.Product = simpleFactoryPattern.Factory.createProduct("A")
      var b: simpleFactoryPattern.Product = simpleFactoryPattern.Factory.createProduct("B")
      console.log(a.use())
      console.log(b.use())
		}
	}
}