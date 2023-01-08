<template>
  <div class="layout-page" >
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <!-- 增加路由模式 -->
<van-tabbar v-model="active" route>
  <van-tabbar-item  to="/article" icon="fire-o">面筋</van-tabbar-item>
  <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
  <van-tabbar-item to="/like" icon="like-o" badge="99">喜欢</van-tabbar-item>
  <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-page',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped></style>
