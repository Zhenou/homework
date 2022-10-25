<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="fn">点</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["帅哥", "美女", "程序猿"],
    };
  },
  methods: {
    fn() {
      this.arr.push(this.arr[0]);
      this.arr.shift();
    },
  },
};
</script>

<style>
</style>
