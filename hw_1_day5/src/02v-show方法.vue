<template>
  <div>
    <p>{{ isShow ? str : str1 }}</p>
    <button @click="fn(), (isShow = !isShow)">反转</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isShow: true,
      str: "老师说过：世上没有后悔药，只有老鼠药.",
      str1: "",
    };
  },
  methods: {
    fn() {
      this.str1 = this.str.split("").reverse().join("");
      // console.log(this);
      // console.log(this.str1);
    },
  },
};
</script>

<style>
</style>
