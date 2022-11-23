import { defineReactive } from "./defineReactive";

export default class Observer {
  constructor(value) {
    if (value instanceof Object) {
      const keys = Object.keys(value);
      keys.forEach((item) => {
        defineReactive(value, item, value[item]);
      });
    }else{
      //
    }
  }
}
