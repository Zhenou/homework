<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="input"
          :checked="item.goods_state"
          @change="$emit('changeFn')"
        />
        <label class="custom-control-label" for="input">
          <img :src="item.goods_img" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ item.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥{{ item.goods_price }}</span>
        <span
          ><MyCount
            :num="value"
            @addFn="$emit('input', value + 1)"
            @subFn="$emit('input', value > 1 ? value - 1 : value)"
            @inputFn="$emit('input', +$event)"
          ></MyCount>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MyCount from "./MyCount.vue";
export default {
  components: {
    MyCount,
  },
  props: {
    item: Object,
    value: Number,
  },
};
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
