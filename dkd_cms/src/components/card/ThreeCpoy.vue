<template>
  <el-card class="box-card three-card-one" shadow="never" id="three">
    <div class="three-card-1">
      <div class="left">
        <ChartThree></ChartThree>
      </div>
      <div class="right">
        2
      </div>
    </div>
  </el-card>
</template>

<script>
import ChartThree from '@/components/echarts/ChartThree.vue'
export default {
  components: {
    ChartThree
  }
}
</script>

<style lang="scss" scoped>
.three-card-one {
  border: 0px;
  height: 353px;
  border-radius: 15px;
  padding: 20px;
}
.three-card-1 {
  display: grid;
  grid-template-columns: 65% 35%;
  .left {
    width: 100%;
    background-color: black;
    // height: 300px;
  }
  .right {
    background-color: black;
    width: 100%;
    height: 313px;
    margin-left: 20px;
  }
}
</style>
