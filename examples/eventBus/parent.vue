<template>
  <div>
      <button @click='todo'>on</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: "paramsaaa"
    };
  },
  methods: {
    todo() {
      this.$bus.$emit("todoSth", this.params); //this.params是传递的参数
    }
  },
  mounted(){
      window.a=this
      this.$bus.$emit("todoSth", this.params); //this.params是传递的参数
  }
  
};
</script>

<style>
</style>
