<template>
  <div>
    <h3>parent:</h3>
    <input type="text" @input="input">
      <button @click='todo'>发布消息</button>
      <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: '',
      value:this.value,
    };
  },
  methods: {
    todo() {
      this.$bus.$emit("todoSth", this.value); //this.params是传递的参数
    },
    input(){
      this.value=this.$el.querySelector('input').value
    }
  },
  
};
</script>

<style lang='css' scoped>
div {
  border: solid 1px pink;
  padding: 10px
}
</style>

