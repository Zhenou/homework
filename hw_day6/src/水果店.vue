<template>
  <div>
    <table class="uuu">
      <tr>
        <th>欢迎光临vue开发的收银系统水果店</th>
      </tr>
      <tr>
        <td>苹果10¥/斤,折扣《8折》</td>
      </tr>
      <tr>
        <td>请输入你要购买的斤数<input type="text" v-model.number="dddd" /></td>
      </tr>
      <tr>
        <td><button @click="fn">结账买单</button></td>
      </tr>
      <tr>
        <td>结账单:总价{{ sum }}¥元,折后价:{{ dis }}¥元,省了{{ save }}¥元</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 10,
      base: 0.8,
      dddd: 0,
      sum: 0,
      dis: 0,
      save: 0,
    };
  },
  methods: {
    fn() {
      this.sum = this.dddd * this.price;
      this.dis = this.dddd * this.price * this.base;
      this.save = this.sum - this.dis;
    },
  },
};
</script>

<style>
table {
  margin: auto;
  border: 1px solid black;
}
tr td {
  text-align: center;
  margin: auto;
  border: 1px solid black;
}
tr td button {
  display: block;
  margin: auto;
}
</style>
