<template>
  <div>
    子元素
    <button @click="send">send</button>
  </div>
</template>

<script>
export default {
  methods: {
    send() {
      this.$emit("事件名称", "今天天气不错");
    }
  }
};
</script>

<style>
</style>
