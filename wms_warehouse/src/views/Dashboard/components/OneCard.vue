<template>
  <div class="banner">
    <div class="area">北京总仓</div>
    <div class="left">
      <img
        src="http://www-wms-java.itheima.net/img/avatar@2x.4f4a758f.png"
        alt=""
      />
      <p>仓储管理员</p>
    </div>
    <p class="motto">我不是为了输赢，我就是认真！</p>
    <p class="name">—— 罗永浩</p>
    <div class="right"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.banner {
  .area {
    background-color: #f7ebdb;
    width: 147px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
  }
  .left {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    float: left;
    width: 166px;
    height: 148px;
    background: url("http://www-wms-java.itheima.net/img/dashboard-banner-left@2x.5afd2949.png")
      no-repeat;
    background-size: cover;
    img {
      width: 62px;
      height: 62px;
    }
  }
  .motto,
  .name {
    position: absolute;
  }
  .motto {
    font-size: 18px;
    font-weight: 400;
    color: white;
    top: 40px;
    left: 200px;
  }
  .name {
    font-size: 16px;
    font-weight: 400;
    color: white;
    top: 80px;
    left: 400px;
  }
  .right {
    float: right;
    width: 426px;
    height: 148px;
    background: url("http://www-wms-java.itheima.net/img/dashboard-banner-right@2x.28195570.png")
      no-repeat;
    background-size: cover;
  }
}
</style>
