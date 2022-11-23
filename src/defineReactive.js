import { compile } from "./compiler";
import Observer from "./observer";

/**
 * 定义响应式
 */
export function defineReactive(obj, key, val) {
  /* 判断类型是否为对象 */
  if (typeof val === 'object'){
    // 遍历对象的每个属性
    new Observer(val)
  }
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 当a属性被使用，会自动调用
      // console.log(`访问了${key}属性`);
      return val;
    },
    set(newValue) {
      // 当a被设置的时候，调用
      // console.log(`设置了${key}属性`);
      if (val !== newValue) {
        val = newValue;
        update(this,key,val)
        compile(this)
      } else {
        return;
      }
    },
  });
}
// 更新vm的data数据
function update(vm,k,val){
  vm.$data[k] = val
}

