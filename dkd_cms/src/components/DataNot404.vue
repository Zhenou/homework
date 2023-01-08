<template>
  <div slot="empty">
    <div class="empty-state">
      <img
        src="http://likede2-admin.itheima.net/img/empty.87c4f71b.png"
        alt="暂无数据"
        width="300"
        height="138"
        class="img-404 "
      />
    <p>暂无数据</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.empty-state{
  position: relative;
  top: -50%;
  transform: translateY(50%);
  vertical-align: middle;
  text-align: center;
  .img-404 {
    width: 123px;
    height: 96px;
  }
}
</style>
