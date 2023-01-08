<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/class">分类</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/my">我的</router-link>
    <a href="javascript:;" @click="Tick('/home', 'home')">首页</a>
    <a href="javascript:;" @click="Tick('/class', 'class')">分类</a>
    <a href="javascript:;" @click="Tick('/order', 'order')">订单</a>
    <a href="javascript:;" @click="Tick('/my', 'my')">我的</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    Tick(path, name) {
      this.$router.push({
        path,
        name,
      });
    },
  },
};
</script>

<style>
a {
  display: inline-block;
  width: 40px;
}
</style>
