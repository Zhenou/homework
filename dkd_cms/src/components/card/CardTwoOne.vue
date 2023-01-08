<template>
  <el-card class="box-card two-card-one" shadow="never">
    <div>
      <div class="top-text-4-1-left">
        <span class="top-text-4-1-1">商品热榜</span>
        <span class="top-text-4-1-2">2022.11.01~2022.11.19</span>
      </div>
      <div class="top-text-4-1-right">
        <SwitchTab @upData="$emit('upData',$event)"></SwitchTab>
        <!-- <div class="button1">周</div>
        <div class="button2">周</div>
        <div class="button3">周</div> -->
      </div>
    </div>
    <div class="top-text-4-2">
      <div class="top-text-4-2-1" id="left">
        <ChartOne :CardTableOne="CardTableOne" ></ChartOne>
      </div>
      <div class="top-text-4-2-2" id="right">
        <ChartTwo :CardTableTwo="CardTableTwo"></ChartTwo>
      </div>
    </div>
  </el-card>
</template>

<script>
import ChartOne from '@/components/echarts/ChartOne.vue'
import ChartTwo from '@/components/echarts/ChartTwo.vue'
import SwitchTab from '@/components/SwitchTab.vue'
export default {
  components: {
    ChartOne,
    ChartTwo,
    SwitchTab
  },
  props: ['CardTableOne', 'CardTableTwo'],
  mounted () {
    // console.log(this.CardTableTwo)
  },
  methods: {
    getMouth () {

    }
  },
  watch: {
    deep: true,
    CardTableOne () {
      // console.log(this.CardTableOne);
      // console.log(this.CardTableTwo);
    }
  }
}
</script>

<style lang="scss" scoped>
.two-card-one {
  border: 0px;
  height: 312px;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  // width: 100%;
  .top-text-4-1-left {
    .top-text-4-1-1 {
      position: absolute;
      top: 20px;
      left: 30px;
      font-weight: 500;
    }
    .top-text-4-1-2 {
      position: absolute;
      top: 23px;
      left: 100px;
      color: rgb(158, 159, 160);
      font-size: 12px;
      font-weight: 400;
    }
  }
  // .top-text-4-1-right {
  //   position: absolute;
  //   top: 23px;
  //   right: 30px;
  //   background-color: #f8faff;
  //   width: 129px;
  //   height: 34px;
  //   border-radius: 10px;
  //   font-size: 14px;
  //   line-height: 22px;
  //   font-weight: 500;
  //   .button1 {
  //     width: 37px;
  //     height: 25px;
  //     background-color: #fff;
  //     border-radius: 5px;
  //     box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
  //     transform: translate(-23px, 4px);
  //   }
  //   .button1,
  //   .button2,
  //   .button3 {
  //     display: inline-block;
  //   }
  // }
  .top-text-4-2 {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 20px;
    .top-text-4-2-1 {
      height: 100%;
      width: 100%;
      // border: 1px solid red;
      // padding: 15px;
      // .charts1 { //图表1
      //   width: 100%;
      //   height: 100%;
      // }
    }
    .top-text-4-2-2 {
      height: 100%;
      width: 100%;
      // padding: 15px;
      // border: 1px solid blue;
    }
  }
}
</style>
