<template>
  <div>
    <div class="top">
      <div class="top_left">入库/出库信息</div>
      <div class="top_right">
        <el-radio-group v-model="radio1" size="medium" fill="#F5B33F">
          <el-radio-button label="本周"></el-radio-button>
          <el-radio-button label="本月"></el-radio-button>
          <el-radio-button label="全年"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="charts"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio1: '本周',
      radio2: '本月',
      radio3: '全年'
    }
  }
}
</script>

<style lang='less' scoped>
.top {
  margin-bottom: 20px;
  font-weight: 500;
  .top_left {
    float: left;
  }
  .top_right {
    float: right;
  }
}
.el-radio-group {
  .el-radio-button.el-radio-button--medium.is-active {
    /deep/ .el-radio-button__inner:hover {
      color: white;
    }
  }
}
/deep/ .el-radio-button__inner:hover {
  color: #f5b33f;
}
</style>
