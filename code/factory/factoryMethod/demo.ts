namespace factoryMethodPattern {
  let factory: Factory = new ConcreteFactory()
  let test = factory.factoryMethod()
  console.log(test.use())
}