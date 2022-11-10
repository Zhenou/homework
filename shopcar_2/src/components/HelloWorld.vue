<template>
  <tr>
    <td><input type="checkbox"  :checked="item.checked" @click="change(index)" /></td>
    <td>{{item.name}}</td>
    <td>{{item.price}}</td>
    <td><button @click="ddd(-1,index)">-</button>{{item.num}}<button @click="ddd(1,index)">+</button></td>
    <td>{{price}}</td>
    <td><button @click="del(index)">删除</button></td>
  </tr>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number
  },
  methods: {
    change (index) {
      // console.log(index)
      this.$store.dispatch('list/changen', index)
    },
    del (index) {
      console.log(index)
      this.$store.dispatch('list/delfn', index)
    },
    ddd (num, index) {
      this.$store.dispatch('list/sub', {
        num,
        index
      })
    }
  },
  computed: {
    price () {
      return this.item.num * this.item.price
    }
  }
}
</script>

<style>
</style>
