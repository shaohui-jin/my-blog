const o = {}; // 创建一个新对象

// 通过 defineProperty 使用访问器属性描述符添加对象属性的示例
let bValue = 38;
Object.defineProperty(o, "b", {
  // value: '123',
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});

console.log(o.b) // 38
o.b = 1
console.log(o.b) // 38
