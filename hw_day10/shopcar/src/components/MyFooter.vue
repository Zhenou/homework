<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        v-model="isAll"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{ totalPrice }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算 ( {{ total }} )
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: Array,
  },
  data() {
    return {
      // isAll: false,
    };
  },
  watch: {},
  computed: {
    isAll: {
      //全选
      get() {
        //如果每一个input都被选中则返回true
        return this.value.every((item) => item.goods_state === true);
      },
      set(val) {
        //当全选按钮被改变之后将改变的值赋给每一个子组件的input
        this.value.forEach((item) => (item.goods_state = val));
      },
    },
    totalPrice() {
      //被选中的总计价格
      // return this.value.reduce((sum, item) => {
      //   if (item.goods_state) return sum + item.goods_price * item.goods_count;
      //   else return sum;
      // }, 0);
      return this.value
        .filter((item) => item.goods_state)
        .reduce((sum, item) => sum + item.goods_price * item.goods_count, 0);
    },
    total() {
      //被选中的总计数量
      // return this.value.reduce((sum, item) => {
      //   if (item.goods_state) return sum + item.goods_count;
      //   else return sum;
      // }, 0);
      return this.value
        .filter((item) => item.goods_state)
        .reduce((sum, item) => sum + item.goods_count, 0);
    },
  },
};
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>
