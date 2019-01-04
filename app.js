import Vue from 'vue';
import a from './examples/依赖注入/a';
import b from './examples/依赖注入/b';

Vue.component('di-a', a)
Vue.component('di-b', b)
new Vue({
    el: '#app'
})