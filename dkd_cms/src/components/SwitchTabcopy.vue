<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="周 " name="first">用户管理</el-tab-pane>
    <el-tab-pane label="月" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="年" name="third">角色管理</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-tabs__item.is-top.is-active {
  // color: red;
  transition: transform 0.3s;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: transform;
  width: 100px;
  height: 40px;
}
::v-deep .el-tabs__active-bar {
  display: inline-block;
  background-color: red;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
  width: 100px;
  height: 40px;
  z-index: -2;
  padding: 0px;
}
</style>
