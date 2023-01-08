<template>
  <div>
   <router-view></router-view>
    <van-tabbar  v-model="active" router  >
      <van-tabbar-item name="home"  icon="wap-home-o" to="/home" >首页</van-tabbar-item>
      <van-tabbar-item name="find" icon="search" to="/home/find" >找房</van-tabbar-item>
      <van-tabbar-item name="news" icon="newspaper-o" to="/home/news" >资讯</van-tabbar-item>
      <van-tabbar-item name="my"  icon="contact" to="/home/my" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {

}
</script>

<style>
</style>
