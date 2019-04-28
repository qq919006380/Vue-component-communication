import Vue from "vue";
import DIParent from "./examples/依赖注入/parent";
import DIchild from "./examples/依赖注入/chilid";

import BusParent from "./examples/eventBus/parent";
import BusChild from "./examples/eventBus/child";

import emitParent from './examples/$emit自定义事件/parent.vue';
import emitChild from './examples/$emit自定义事件/chilid.vue';
Vue.prototype.$bus = new Vue;
// 依赖注入
Vue.component("di-parent", DIParent);
Vue.component("di-child", DIchild);
//事件总线
Vue.component("bus-parent", BusParent);
Vue.component("bus-child", BusChild);
//$emit自定义事件，子组件调用父组件事件，通过参数传递通讯
Vue.component("emit-parent",emitParent)
Vue.component("emit-child",emitChild)
Vue.component()
new Vue({
  el: "#app"
});
