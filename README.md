## 依赖注入
通讯方式:父组件向子(孙)组件通信
- provide 选项允许我们指定我们想要提供给后代组件的数据/方法
- inject 在任何后代组件里，我们都可以使用 inject 选项来接收指定的我们想要添加在这个实例上的属性
```
// a.vue
export default {
    provide() {
        return {
            getMap: 'aaa'
        };
    }
}

//b.vue
export default {
    inject: ["getMap"]
}
```


