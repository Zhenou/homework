<template>
  <div>
    <van-nav-bar
      title="房租管理"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-form @submit="onSubmit">
    <van-cell-group>
      <van-cell class="house_info" title="房源信息" />
    </van-cell-group>
    <van-cell-group>
      <van-cell
        title="小区名称"
        is-link
        value="请输入小区名称"
        title-right="1"
      />
      <van-cell title="租ㅤㅤ 金">¥/月</van-cell>
      <input class="rentmoney" placeholder="请输入租金/月" type="text" />
      <van-cell title="建筑面积">m²</van-cell>
      <input class="renthouse" placeholder="请输入建筑面积" type="text" />
      <van-cell title="户ㅤㅤ 型" is-link value="请选择">请选择</van-cell>
      <van-cell title="所在楼层" is-link value="请选择">请选择</van-cell>
      <van-cell title="朝ㅤㅤ 向" is-link value="请选择">请选择</van-cell>
    </van-cell-group>
    </van-form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.house_info.van-cell {
  color: rgb(86, 178, 123);
  font-weight: 500;
  z-index: 500;
}
.rentmoney {
  position: absolute;
  left: 90px;
  top: 55px;
  z-index: 10000000;
  border: 0px;
}
.rentmoney::-webkit-input-placeholder {
  color: rgb(183, 183, 183);
  font-size: 16px;
}
.van-cell__title {
  display: inline-block;
}
.renthouse {
  position: absolute;
  left: 90px;
  top: 97px;
  z-index: 10000000;
  border: 0px;
}
.renthouse::-webkit-input-placeholder {
  color: rgb(183, 183, 183);
  font-size: 16px;
}
</style>
