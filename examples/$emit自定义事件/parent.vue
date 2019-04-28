<template>
  <div class="root">
    parent
    <Child @事件名称="onEvent"></Child>
  </div>
</template>

<script>
import Child from "./chilid.vue";
export default {
  components: { Child },
  methods: {
    onEvent(e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
.root{
  border: 1px solid;
  padding: 10px
}
</style>
