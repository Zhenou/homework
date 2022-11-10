<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input @click="cccc" :checked="isTure" type="checkbox" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tR v-for="item,index in goodList" :key="index" :item="item" :index="index"></tR>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:{{ sumPrice}}</td>
          <td colspan="5"></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import tR from '@/components/HelloWorld.vue'
export default {
  components: {
    tR
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('list', ['goodList', 'isTure']),
    ...mapGetters('list', ['isAll']),
    sumPrice () {
      return this.goodList.filter(item => item.checked).reduce((sum, item) => item.num * item.price + sum, 0)
    }
  },
  methods: {
    cccc () {
      this.$store.dispatch('list/changeTrue')
    }
  }
}
</script>

<style>
</style>
