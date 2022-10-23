<template>
  <div>
    <p>{{ str }}</p>
    <button @click="fn">反转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      str: "老师说过：世上没有后悔药，只有老鼠药.",
    };
  },
  methods: {
    fn() {
      this.str = this.str.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>
