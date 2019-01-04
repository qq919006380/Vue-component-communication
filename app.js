import Vue from 'vue';
import parent from './examples/依赖注入/parent';
import chilid from './examples/依赖注入/chilid';

Vue.component('di-parent', parent)
Vue.component('di-chilid', chilid)
new Vue({
    el: '#app'
})