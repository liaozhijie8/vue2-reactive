export function compile(vm) {
  // 获取dom 的innerHTML
  const node = vm.$el;
  let template = vm.$template;
  // 替换
  const keys = Object.keys(vm.$data);
  keys.forEach((key) => {
    console.log(key)
    let reg = new RegExp(`{{${key}}}`, "g");
    template = template.replaceAll(reg, vm.$data[key]);
  });
  // let reg = new RegExp('{{msg}}','g')
  // template = template.replaceAll(reg,'hello')
  // reg = new RegExp('{{title}}','g')
  // template = template.replaceAll(reg,'响应式原理')
  node.innerHTML = template;
}
