<template>
  <div>
    <h1>请选择你喜欢的专栏</h1>
    <span v-for="item in arr" :key="item">
      <label :for="item">
        <input type="checkbox" :id="item" v-model="hobby" :value="item" />{{
          item
        }}</label
      >
    </span>
    <hr />
    <span>已选择的爱好:</span>
    <span v-for="(item, index) in hobby" :key="index"> {{ item }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"],
      hobby: [],
    };
  },
};
</script>

<style>
</style>
