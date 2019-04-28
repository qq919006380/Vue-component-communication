## 依赖注入

通讯方式:父组件向子(孙)组件通信

- provide 选项允许我们指定我们想要提供给后代组件的数据/方法
- inject 在任何后代组件里，我们都可以使用 inject 选项来接收指定的我们想要添加在这个实例上的属性

```
// parent.vue
export default {
    provide() {
        return {
            getMap: 'aaa'
        };
    }
}

//child.vue
export default {
    inject: ["getMap"]
}
```

## eventBus

- bus 定义到全局(在 eventBus 中，bus 本身就是 vue 对象本身)
- 然后在组件中，可以使用 $emit, $on, \$off 分别来分发、监听、取消监听事件
- 解决兄弟间通信，祖父祖孙间通信的最佳方法，不仅限于此，也可以解决父组件子组件间的相互通信
**创建事件总线**

```
// bus.js
import Vue from 'vue'
export const EventBus = new Vue()
```

**创建全局事件总线**

```
// 方法一 app.js
Vue.prototype.$EventBus = new Vue()
```

```
// 方法二 eventBus.js
import Vue from 'vue';
export default new Vue();
```

**独立组件中创建事件总线**

```
import Vue from 'vue'
  export default {
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
  }
```

## \$emit 事件

- 子组件调用父组件方法，通过传参传递数据

child.vue

```
methods: {
    send() {
      this.$emit("事件名称", "今天天气不错");
    }
  }
```

parent.vue

```
<Child @事件名称="onEvent"></Child>
<script>
components: { Child },
  methods: {
    onEvent(e) {
      console.log(e);
    }
  },
  </script>
```

## \$refs

- 父组件调用子组件方法，通过传参传递数据

child1.vue

```
 methods: {
    handleParentClick(e) {
        console.info(e)
    }
}
```

parent.vue  

```
<div>
  <button v-on:click="clickParent">点击</button>
  <child1 ref="child1"></child1>
</div
components: {
  child1: Child1
},
methods: {
  clickParent() {
    this.$refs.child1.handleParentClick("ssss");
  }
}
```

