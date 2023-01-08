<template>
  <div>
    <div class="top">任务导航</div>
    <div class="bottom">
      <div class="icon_text1">
        <div class="icon">
          <i class="el-icon-s-order"></i>
        </div>
        <div class="text">收货任务</div>
      </div>

      <div class="icon_text2">
        <div class="icon">
          <i class="el-icon-s-order"></i>
        </div>
        <div class="text">收货任务</div>
      </div>

      <div class="icon_text3">
        <div class="icon">
          <i class="el-icon-s-order"></i>
        </div>
        <div class="text">收货任务</div>
      </div>

      <div class="icon_text4">
        <div class="icon">
          <i class="el-icon-s-order"></i>
        </div>
        <div class="text">收货任务</div>
      </div>

      <div class="icon_text5">
        <div class="icon">
          <i class="el-icon-s-order"></i>
        </div>
        <div class="text">收货任务</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.top {
  margin-bottom: 20px;
  font-weight: 500;
}
.bottom {
  display: flex;
  .icon_text1,
  .icon_text2,
  .icon_text3,
  .icon_text4,
  .icon_text5 {
    height: 93px;
    width: 100%;
    background-color: #faf7f7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    .icon {
      margin-left: 10px;
      width: 50px;
      height: 50px;
      background-color: #2c79f6;
      border-radius: 25px;
      text-align: center;
      font-size: 30px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text {
      margin-left: -10px;
    }
    &:hover{
      cursor: pointer ;
      background-color: white;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1px);

    }
  }
  .icon_text2,
  .icon_text3,
  .icon_text4,
  .icon_text5 {
    margin-left: 30px;
  }
  .icon_text2{
    .icon{
      background-color: #76D2EF !important;
    }
  }
  .icon_text3{
    .icon{
      background-color: #EF7830 !important;
    }
  }
  .icon_text4{
    .icon{
      background-color: #ED6C9D !important;
    }
  }
  .icon_text5{
    .icon{
      background-color: #F5B33F !important;
    }
  }
}
</style>
