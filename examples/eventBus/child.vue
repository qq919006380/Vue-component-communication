<template>
  <div>
    <div>订阅的消息:{{params}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: "..."
    };
  },
  created() {
    this.$bus.$on("todoSth", params => {
      this.params = params;
    });
  }
};
</script>

<style>
</style>
