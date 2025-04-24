function newFun(fn, ...args) {
// 1.先创建一个空对象
  let newObj = {}
// 2.把空对象和构造函数通过原型链进行链接
  newObj.__proto__ = fn.prototype
// 3.把构造函数的this绑定到新的空对象上
  const result = fn.apply(newObj, args)
// 4.根据构造函数返回的类型进行判断，如果是引用数据类型，则返回这个引用类型，如果是值类型，则返回对象
  return result instanceof Object ? result : newObj
}

