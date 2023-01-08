<template>
  <div>
    <ul>
      <li>
        <router-link to="/contacts/sroutera">一级A</router-link>
      </li>
      <li>
        <router-link to="/contacts/srouterb">一级B</router-link>
      </li>
      <li>
        <router-link to="/contacts/srouterc">一级C</router-link>
      </li>
    </ul>

    <button @click="clickFn">随机显示</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn() {
      const num = parseInt(Math.random() * 10);
      if (num > 0 && num < 3) {
        this.$router.push({
          path: "/contacts/sroutera",
        });
      } else if (num > 3 && num < 6) {
        this.$router.push({
          path: "/contacts/srouterb",
        });
      } else if (num > 6 && num < 9) {
        this.$router.push({
          path: "/contacts/srouterc",
        });
      }
    },
  },
};
</script>

<style>
</style>
