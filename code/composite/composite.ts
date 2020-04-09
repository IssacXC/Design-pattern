namespace CompositePattern {
  // 透明组合模式
  export interface Component {
    name: string
    add(file: File): void
    scan(): void
  }
  export class Folder implements Component {
    fileList = []
    name: string
    constructor(name: string) {
      this.name = name
    }
    add(file: File) {
      this.fileList.push(file)
    }

    scan() {
      for (let file of this.fileList) {
        file.scan()
      }
    }
  }


  export class File implements Component {
    name: string
    constructor(name: string) {
      this.name = name
    }
    add(file: File) {
      throw new Error('文件下面不能再添加文件')
    }
    scan() {
      console.log(`开始扫描：${this.name}`)
    }
  }
  // 安全模式相对于透明模式需要进行如下改动：
  // 1. Component代码只保留各个层次的公有方法
  // 2. Demo.ts代码中树枝节点的类型从Component改为Composite，以便获取管理子类操作的方法
  // 安全模式举例
  // export interface Component2 {
  //   name: string
  //   operation(): void
  // }
  // export class Composite implements Component2 {
  //   fileList = []
  //   name: string
  //   constructor(name: string) {
  //     this.name = name
  //   }
  //   operation() {

  //   }
  //   add(file: Leaf) {
  //     this.fileList.push(file)
  //   }

  //   scan() {
  //     for (let file of this.fileList) {
  //       file.scan()
  //     }
  //   }
  // }
  // export class Leaf implements Component2 {
  //   name: string
  //   constructor(name: string) {
  //     this.name = name
  //   }
  //   public operation(): void{}
  // }
}

