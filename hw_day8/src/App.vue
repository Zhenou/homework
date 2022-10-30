<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <trS
          v-for="(item, index) in goodList"
          :key="index"
          :sname="item.name"
          :sprice="item.price"
          :snum="item.num"
          :schecked="item.checked"
          :sindex="index"
          @del="delFn"
          @add="addFn"
          @duc="ducFn"
          @choice="isTrueorFalse"
        ></trS>
        <!-- <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr> -->
      </tbody>
      <tfoot>
        <SumPrice :totalPrice="totalPrice"></SumPrice>
      </tfoot>
    </table>
  </div>
</template>

<script>
import SumPrice from "./components/SumPrice.vue";
import trS from "./components/Gametr.vue";
export default {
  components: {
    trS,
    SumPrice,
  },
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  methods: {
    delFn(dIndex) {
      this.goodList.splice(dIndex, 1);
    },
    addFn(index) {
      this.goodList[index].num++;
    },
    ducFn(index) {
      if (this.goodList[index].num == 0) return;
      this.goodList[index].num--;
    },
    isTrueorFalse(index) {
      this.goodList[index].checked = !this.goodList[index].checked;
    },
  },
  computed: {
    totalPrice() {
      return this.isSum.reduce((sum, item) => sum + item.num * item.price, 0);
    },
    isAll: {
      get() {
        if (this.goodList.length === 0) return false;
        return this.goodList.every((item) => item.checked);
      },
      set(val) {
        this.goodList.forEach((item) => (item.checked = val));
      },
    },
    isSum: {
      get() {
        return this.goodList.filter((item) => item.checked);
      },
    },
  },
};
</script>

<style>
</style>
