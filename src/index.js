import { compile } from "./compiler";
import { defineReactive } from "./defineReactive";

// const testObj = {};
// defineReactive(testObj, "a", 100);
// console.log(testObj.a);
/**
 * 劫持数据
 */
export function Vue(options) {
  this.$options = options;
  this.$el = document.querySelector(options.el);
  this.$template = this.$el.outerHTML // 需要操作的模板
  this.$data = options.data;

  const keys = Object.keys(this.$data);
  // 把data中的key代理到vm实例对象上
  keys.forEach((key) => {
    defineReactive(this, key, this.$data[key]);
  });

  // 编译器
  compile(this)
}
