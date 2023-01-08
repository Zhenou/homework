<template>
  <el-card class="box-card one-card-two" shadow="never">
    <div class="top-text-2">
      <span class="top-text-2-1">销售统计</span>
      <span class="top-text-2-2">{{timer.start+'~'+timer.end}}</span>
    </div>
    <div class="buttom-text-2">
      <div class="buttom-text-2-1">
        <span class="buttom-text-2-1-1">{{CardTwo.order}}</span>
        <span class="buttom-text-2-1-2">{{CardTwo.amount}}</span>
      </div>
      <div class="buttom-text-2-2">
        <span>订单量(个)</span>
        <span>销售额(万元)</span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['CardTwo'],
  computed: {
    timer () {
      const timer = {
        start: this.$store.getters.time.start.replace(/-/g, '.'),
        end: this.$store.getters.time.end.replace(/-/g, '.')
      }
      return timer
    }
  }
}
</script>

<style lang='scss' scoped>
.one-card-two {
  border: 0px;
  height: 126px;
  border-radius: 15px;
  padding: 20px;
  background: url(http://likede2-admin.itheima.net/img/sale.606b0d8c.png)
    no-repeat right bottom;
  background-color: rgb(249, 239, 233);
  position: relative;
  .top-text-2 {
    .top-text-2-1 {
      position: absolute;
      top: 20px;
      left: 30px;
      font-weight: 500;
    }
    .top-text-2-2 {
      position: absolute;
      top: 23px;
      left: 100px;
      color: rgb(158, 159, 160);
      font-size: 12px;
      font-weight: 400;
    }
  }
  .buttom-text-2 {
    .buttom-text-2-1 {
      font-size: 40px;
      display: grid;
      grid-template-columns: 50% 50%;
      margin-top: 10px;
      color: rgb(237, 99, 94);
      text-shadow: 1px 1px 10px rgba(237, 99, 94, 0.5);
      .buttom-text-2-1-1 {
        left: 40px;
        top: 50px;
        font-weight: 600;
      }
      .buttom-text-2-1-2 {
        left: 120px;
        top: 50px;
        font-weight: 600;
      }
    }
    .buttom-text-2-2 {
      font-size: 12px;
      display: grid;
      grid-template-columns: 50% 50%;
      color: rgb(216, 160, 153);
    }
  }
}
</style>
