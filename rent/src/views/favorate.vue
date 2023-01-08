<template>
   <div>
    <van-nav-bar
      title="房屋收藏"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <houseinfo v-for="item in list" :key="item.houseCode" :item='item'></houseinfo>
    </van-list>
  </div>
</template>

<script>
import { getFavorate } from '@/api/rent'
import houseinfo from '@/components/houseinfo.vue'
export default {
  components: {
    houseinfo
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  // async created () {
  //   const res = await getFavorate()
  //   console.log(res)
  // },
  methods: {
    async onLoad () {
      const res = await getFavorate()
      this.list.push(...res.data.body)
      this.finished = true
    }
  }
}
</script>

<style>

</style>
