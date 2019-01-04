<template>
  <div>
    <h1>组件a</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: "数据：asdasd"
    };
  },
  provide() {
    return {
      getMap: this.map
    };
  }
};
</script>

<style lang='css' scoped>
div {
  border: solid 1px pink;
  padding: 10px
}
</style>
