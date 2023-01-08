<template>
  <el-card class="box-card three-card-one" shadow="never">
    <div class="top-text-1-1">
      <div class="text-tittle">
        <span class="top-text-2-1 ">合作商点位数Top5</span>
        <i class="text-right iconfont icon-gengduo"></i>
        <div class="echarts">
          <ChartThree :CardTableThree="CardTableThree"></ChartThree>
        </div>
      </div>
      <div class="top-text-1-1-2" id="right2">
        <div class="text">
          <div class="right-text">
            <div class="text-top">
              <p class="text-top1">{{CardTableThree.sumValue}}</p>
              <p class="text-top2">点位数</p>
            </div>
            <div class="text-bottom">
              <p class="text-bottom1">{{CardTableThree.sumName}}</p>
              <p class="text-bottom2">合作商家</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import ChartThree from '@/components/echarts/ChartThree.vue'
export default {
  components: {
    ChartThree
  },
  props: ['CardTableThree'],
  watch: {
    CardTableThree (val) {
      // console.log(this.CardTableThree);
    },
    immediate: true,
    deep: true
  }
}

</script>

<style lang="scss" scoped>
.three-card-one {
  border: 0px;
  height: 393px;
  border-radius: 15px;
  position: relative;
  // width: 100%;
  .top-text-1-1 {
    width: 100%;
    display: grid;
    grid-template-columns: 65% 35%;
    // margin-top: 20px;
    padding: 0px;
    .text-tittle {
      .top-text-2-1 {
        // color: red;
        top: 20px;
        left: 30px;
        font-weight: 500;
        position: absolute;
      }
      .text-right{
         top: 20px;
      right: 30px;
      font-size: 20px;
      font-weight: 500;
      position: absolute;
      color:#6587F7
      }
    }
    .top-text-1-1-2 {
      height: 353px;
      width: 100%;
      // background-color: black;
      .text {
        margin-top: 60px;
        margin-left: 60px;
        .right-text {
          box-sizing: border-box;
          padding-left: 40px;
          padding-top: 10px;
          text-align: left;
          width: 160px;
          height: 230px;
          background: linear-gradient(-135deg, transparent 15px, #f8f8f9 0) top
              right,
            linear-gradient(45deg, transparent 15px, #f8f8f9 0) bottom left;
          background-size: 100% 50%;
          background-repeat: no-repeat;
          .text-top {
            margin-top: 40px;
            .text-top1 {
              font-size: 24px;
              line-height: 24px;
              margin: 0px;
              color: #0a236f;
              font-weight: 600;
            }
            .text-top2 {
              font-size: 12px;
              line-height: 24px;
              margin-top: 5px;
              color: #0f1321;
            }
          }
          .text-bottom {
            .text-bottom1 {
              font-size: 24px;
              line-height: 24px;
              margin: 0px;
              color: #0a236f;
              font-weight: 600;
            }
            .text-bottom2 {
              font-size: 12px;
              line-height: 24px;
              margin-top: 5px;
              color: #0f1321;
            }
          }
        }
      }
    }
  }
}
</style>
