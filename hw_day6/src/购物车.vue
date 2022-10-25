<template>
  <div>
    <table class="tb">
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item, index) in arr" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.sname }}</td>
        <td>{{ item.time }}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>
      <tr>
        <td v-if="ifShow" colspan="4">没有数据咯~</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { id: 1, sname: "奔驰", time: "2020-08-01" },
        { id: 2, sname: "宝马", time: "2020-08-02" },
        { id: 3, sname: "奥迪", time: "2020-08-03" },
      ],
      ifShow: false,
    };
  },
  methods: {
    del(index) {
      this.arr.splice(index, 1);
      if (this.arr.length === 0) this.ifShow = true;
    },
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
