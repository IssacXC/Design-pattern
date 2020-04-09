/// <reference path="composite.ts" />
namespace CompositePattern {
  let folder: CompositePattern.Component = new CompositePattern.Folder( '学习资料' )
  let folder1: CompositePattern.Component = new CompositePattern.Folder( 'JavaScript' )
  let folder2: CompositePattern.Component = new CompositePattern.Folder ( 'vue' )
  let file1: CompositePattern.Component = new CompositePattern.File( 'JavaScript 设计模式与开发实践' )
  let file2: CompositePattern.Component = new CompositePattern.File( 'vue.js实战' )
  let file3: CompositePattern.Component = new CompositePattern.File( '重构与模式' )
  folder1.add(file1)
  folder2.add(file2)
  folder.add(folder1)
  folder.add(folder2)
  folder.add(file3)
  // 现在的需求是把移动硬盘里的文件和文件夹都复制到这棵树中，假设我们已经得到了这些文件对象：
  let folder3: CompositePattern.Component = new CompositePattern.Folder( 'Nodejs' )
  let file4: CompositePattern.Component = new CompositePattern.File( '深入浅出 Node.js' )
  folder3.add(file4)
  let file5: CompositePattern.Component = new CompositePattern.File( 'JavaScript 语言精髓与编程实践' )
  // 接下来就是把这些文件都添加到原有的树中：
  folder.add(folder3)
  folder.add(file5)
}
