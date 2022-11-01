<template>
  <div class="my-goods-item" :value="value">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="input"
          :checked="item.goods_state"
          @click="item.goods_state = !item.goods_state"
        />
        <label class="custom-control-label" for="input">
          <img :src="item.goods_img" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ item.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{ item.goods_price }}</span>
        <span>
          <!-- 绑定count组件里的方法 -->
          <MyCount
            :num="item.goods_count"
            :id="item.id"
            @addFn="addFn"
            @subFn="subFn"
          ></MyCount
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import MyFooter from "./MyFooter.vue";
import MyCount from "./MyCount.vue";
export default {
  props: {
    //获取每个item,类型为对象
    item: Object,
    //从父组件绑定数据
    value: Array,
  },
  components: {
    //注册组件
    MyCount,
    MyFooter,
  },
  methods: {
    addFn(id) {
      //增加按钮
      this.value.find((item) => item.id === id).goods_count++;
    },
    subFn(id) {
      //减少按钮
      const target = this.value.find((item) => item.id === id);
      // console.log(target);
      if (target.goods_count === 0) return;
      target.goods_count--;
    },
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
