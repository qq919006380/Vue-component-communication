<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.$bus.$on("todoSth", params => {
      //获取传递的参数并进行操作
      console.log(params);
    });
  }
};
</script>

<style>
</style>
