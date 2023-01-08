<template>
  <div>
    <van-nav-bar
      title="房屋管理"
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
import { getMyrent } from '@/api/rent'
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
  //   const res = await getMyrent()
  //   console.log(res)
  // },
  methods: {
    async onLoad () {
      const res = await getMyrent()
      this.list.push(...res.data.body)
      this.finished = true
    }
  }
}
</script>

<style lang="less">
.cell {
  overflow: hidden;
  .cell_img {
    width: 106px;
    height: 80px;
    display: inline-block;
    margin: 0px;
  }
  .cell_name {
    display: inline-block;
    position: absolute;
    top: -20px;
    left: 115px;
    font-weight: 600;
  }
  .cell_info {
    display: inline-block;
    position: absolute;
    top: 2px;
    left: 115px;
    font-size: 12px;
    color: rgb(170, 173, 174);
  }
  .cell_good {
    display: inline-block;
    position: absolute;
    top: 38px;
    left: 115px;
    font-size: 12px;
    color: rgb(23, 183, 198);
    width: 50px;
    height: 20px;
    line-height: 21px;
    background-color: rgb(219, 244, 247);
    text-align: center;
    border-radius: 5px;
  }
  .cell_price {
    display: inline-block;
    position: absolute;
    top: 60px;
    left: 115px;
    font-size: 16px;
    color: red;
    font-weight: 700;
    font-size: 18px;
  }
  .cell_mouth {
    font-weight: 400;
    display: inline-block;
    position: absolute;
    top: -12px;
    left: 40px;
    font-size: 12px;
    color: red;
    width: 40px;
  }
}
</style>
