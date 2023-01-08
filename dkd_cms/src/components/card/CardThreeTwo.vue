<template>
  <el-card class="box-card three-card-two" shadow="never">
    <div class="text">
      <span class="text-left">异常设备监控</span>
      <i class="text-right iconfont icon-gengduo"></i>
    </div>
    <div class="img">
      <DataNot404></DataNot404>
    </div>
  </el-card>
</template>

<script>
import DataNot404 from '@/components/DataNot404.vue'
export default {
  components: {
    DataNot404
  }
}
</script>

<style lang="scss" scoped>
.three-card-two {
  border: 0px;
  height: 353px;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  .text {
    .text-left {
      top: 20px;
      left: 30px;
      font-weight: 500;
      position: absolute;
    }
    .text-right {
      top: 20px;
      right: 30px;
      font-size: 20px;
      font-weight: 500;
      position: absolute;
      color:#6587F7
    }
  }
  .img {
    height: 353px;
  }
}
</style>
