/// <reference path="prototype.ts" />
namespace PrototypePattern {
  let client : PrototypePattern.Client = new PrototypePattern.Client()
  for (let i = 1; i <= 2; i ++) {
    console.log(client.createOne("c" + i).toString())
  }
}