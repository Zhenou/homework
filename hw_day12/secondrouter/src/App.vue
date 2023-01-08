<template>
  <div>
    <h1>嵌套路由</h1>
    <router-link to="/home">主页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link to="/sport">体育</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
