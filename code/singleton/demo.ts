namespace SingletonPattern {
  let singleton1 = Singleton.getInstance()
  let singleton2 = Singleton.getInstance()
  let c = singleton1 === singleton2 ? '两个单例等效' : '两个单例不等效'
  console.log(c)
}