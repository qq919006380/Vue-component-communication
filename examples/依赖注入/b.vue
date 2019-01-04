<template>
  <div>
      <h1>子组件:b</h1>
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
