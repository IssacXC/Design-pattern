/// <reference path="builder.ts" />
namespace BuilderPattern {
  let builder:Builder = new ConcreteBuilder()
  let pcDirect: Director = new Director(builder)
  pcDirect.construct('a','b')
  let computer = builder.build()
  console.log(computer)
}