<template>
  <div>
    <div class="top">代办信息</div>
    <template v-if="isReceive">
      <div class="bottom">
        <div class="one">
          <div class="top">
            <span class="top_icon">
              <i class="el-icon-s-order"></i>
            </span>
            <span class="top_text">{{ infoList ? infoList[0].name : "" }}</span>
          </div>
          <div class="bottom_text">
            <span class="bottom_small">新增</span>
            <span class="bottom_big1">{{
              infoList ? infoList[0].value1 : ""
            }}</span>
            <span class="bottom_small">待审核</span>
            <span class="bottom_big2">{{
              infoList ? infoList[0].value2 : ""
            }}</span>
          </div>
        </div>

        <div class="two">
          <div class="top">
            <span class="top_icon">
              <i class="el-icon-s-order"></i>
            </span>
            <span class="top_text">{{ infoList ? infoList[1].name : "" }}</span>
          </div>
          <div class="bottom_text">
            <span class="bottom_small">新增</span>
            <span class="bottom_big1">{{
              infoList ? infoList[1].value1 : ""
            }}</span>
            <span class="bottom_small">待审核</span>
            <span class="bottom_big2">{{
              infoList ? infoList[1].value2 : ""
            }}</span>
          </div>
        </div>

        <div class="three">
          <div class="top">
            <span class="top_icon">
              <i class="el-icon-s-order"></i>
            </span>
            <span class="top_text">{{ infoList ? infoList[2].name : "" }}</span>
          </div>
          <div class="bottom_text">
            <span class="bottom_small">新增</span>
            <span class="bottom_big1">{{
              infoList ? infoList[1].value2 : ""
            }}</span>
            <span class="bottom_small">待审核</span>
            <span class="bottom_big2">{{
              infoList ? infoList[1].value2 : ""
            }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    infoList: {
      type: Array
    }
  },
  data () {
    return {
      isReceive: false
    }
  },
  watch: {
    infoList: function () {
      this.isReceive = true
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  padding-bottom: 20px;
  font-weight: 500;
}
.bottom {
  // padding: 20px;
  display: flex;
  justify-content: space-between;
  .one,
  .two,
  .three {
    width: 100%;
    height: 148px;
    border-radius: 10px;
    padding: 20px;
    background-color: #faf7f7;
    .top {
      display: flex;
      align-items: center;
      .top_icon {
        display: inline-block;
        width: 49px;
        height: 49px;
        background-color: #2c79f6;
        border-radius: 10px;
        font-size: 35px;
        color: white;
        text-align: center;
        line-height: 49px;
      }
      .top_text {
        margin-left: 20px;
      }
    }
    .bottom_text {
      margin-top: 30px;
      font-size: 16px;
      color: #968e8e;
      .bottom_big1,
      .bottom_big2 {
        font-size: 40px;
        margin-right: 10px;
        margin-left: 10px;
      }
      .bottom_big1 {
        color: black;
      }
      .bottom_big2 {
        color: #2c79f6;
      }
    }
    &:hover {
      cursor: pointer;
      background-color: white;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1px);
    }
  }
  .two {
    margin-left: 30px;
    .top_icon {
      background-color: #f5b33f !important;
    }
    .bottom_big2 {
      color: #f5b33f !important;
    }
  }
  .three {
    margin-left: 30px;
    .top_icon {
      background-color: #ef7830 !important;
    }
    .bottom_big2 {
      color: #ef7830 !important;
    }
  }
}
</style>
