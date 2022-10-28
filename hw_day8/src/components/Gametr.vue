<template>
  <tr>
    <td><input type="checkbox" @click="choice(sindex)" /></td>
    <td>{{ sname }}</td>
    <td>{{ sprice }}</td>
    <td>
      <button @click="duc(sindex)">-</button>
      {{ snum }}
      <button @click="add(sindex)">+</button>
    </td>
    <td>{{ sumPrice }}</td>
    <td><button @click="delFn(sindex)">删除</button></td>
  </tr>
</template>

<script>
export default {
  props: ["sname", "sprice", "snum", "schecked", "sindex"],
  computed: {
    sumPrice() {
      return this.sprice * this.snum;
    },
  },
  methods: {
    delFn(sindex) {
      this.$emit("del", sindex);
    },
    add(sindex) {
      this.$emit("add", sindex);
    },
    duc(sindex) {
      this.$emit("duc", sindex);
    },
    choice(sindex) {
      // console.log(this.sindex);
      this.$emit("choice", sindex);
    },
  },
};
</script>

<style>
</style>
