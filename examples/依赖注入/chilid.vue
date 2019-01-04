<template>
  <div>
      <h3>子组件:b</h3>
    <div>{{getMap}}</div>   
  </div>
</template>

<script>
export default {
  // 注入
  inject: ["getMap"]
};
</script>

<style>
</style>
