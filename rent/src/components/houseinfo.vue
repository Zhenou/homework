<template>

    <van-cell >
      <img
        class="cell_img"
        :src="'http://liufusong.top:8080' + item.houseImg"
      />
      <p class="cell_name">{{ item.title }}</p>
      <p class="cell_info">{{ item.desc }}</p>
      <div class="cell_good">{{ item.tags[0] }}</div>
      <div class="cell_price">
        {{ item.price }}
        <span class="cell_mouth">元/月</span>
      </div>
    </van-cell>

</template>

<script>

export default {
  props: {
    item: Object
  }
}
</script>

<style lang="less">
.cell_img {
    width: 106px;
    height: 80px;
    display: inline-block;
    margin: 0px;
  }
  .cell_name {
    display: inline-block;
    position: absolute;
    top: -20px;
    left: 115px;
    font-weight: 600;
  }
  .cell_info {
    display: inline-block;
    position: absolute;
    top: 2px;
    left: 115px;
    font-size: 12px;
    color: rgb(170, 173, 174);
  }
  .cell_good {
    display: inline-block;
    position: absolute;
    top: 38px;
    left: 115px;
    font-size: 12px;
    color: rgb(23, 183, 198);
    width: 50px;
    height: 20px;
    line-height: 21px;
    background-color: rgb(219, 244, 247);
    text-align: center;
    border-radius: 5px;
  }
  .cell_price {
    display: inline-block;
    position: absolute;
    top: 60px;
    left: 115px;
    font-size: 16px;
    color: red;
    font-weight: 700;
    font-size: 18px;
  }
  .cell_mouth {
    font-weight: 400;
    display: inline-block;
    position: absolute;
    font-size: 12px;
    color: red;
    width: 40px;
  }
</style>
