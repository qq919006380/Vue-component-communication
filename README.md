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
- bus定义到全局(在eventBus中，bus本身就是vue对象本身)
- 然后在组件中，可以使用 $emit, $on, $off 分别来分发、监听、取消监听事件
#### 创建事件总线
```
// bus.js 
import Vue from 'vue' 
export const EventBus = new Vue()
```
##### 创建全局事件总线
```
// app.js
Vue.prototype.$EventBus = new Vue()
```
##### 独立组件中创建事件总线
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

