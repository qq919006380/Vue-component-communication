import Vue from "vue";
import DIParent from "./examples/依赖注入/parent";
import DIchilid from "./examples/依赖注入/chilid";

import BusParent from "./examples/eventBus/parent";
import BusChild from "./examples/eventBus/child";

Vue.prototype.$bus = new Vue;
Vue.component("di-parent", DIParent);
Vue.component("di-chilid", DIchilid);
Vue.component("bus-parent", BusParent);
Vue.component("bus-chilid", BusChild);
new Vue({
  el: "#app"
});
