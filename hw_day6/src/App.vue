<template>
  <div>
    <input type="checkbox" v-for="item in arr" :key="item" :value="item" />{{
      item
    }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"],
    };
  },
};
</script>

<style>
</style>
