<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
        <button @click="fnDel(index)">删除</button>
      </li>
    </ul>
    <button @click="fnAdd">点</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    fnAdd() {
      this.arr.push(parseInt(Math.random() * 10));
    },
    fnDel(index) {
      this.arr.splice(index, 1);
      console.log(index);
    },
  },
};
</script>

<style>
</style>
