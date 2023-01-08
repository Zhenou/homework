<template>
  <div>
    <van-nav-bar
      title="城市列表"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.back()"
      fixed
      z-index="1000"
    />
    <van-index-bar :index-list="indexList" class="citylist">
      <City :indexList="indexList" :city="city" :chooseCity="chooseCity" @change="change"></City>
      <!-- <van-cell title="北京" /> -->

    </van-index-bar>
  </div>
</template>

<script>
import City from '@/components/city.vue'
import { getCity, getHot, getCityInfo } from '@/api/city'

export default {
  components: {
    City
  },
  async created () {
    // 城市列表
    this.$toast.loading('加载中') //
    const { data } = await getCity(1)
    // 热门数据
    const res = await getHot()
    console.log(data)
    // console.log(res.data)
    // 索引排序
    this.citylist.push(...data.body)
    for (let i = 0; i < this.citylist.length; i++) {
      if (!this.indexList.includes(this.citylist[i].short[0].toUpperCase())) {
        this.indexList.push(this.citylist[i].short[0].toUpperCase())
      } else continue
    }
    // 索引加入前两个
    this.indexList = ['#', '热'].concat(this.indexList.sort())
    // 城市数据排序a-z
    this.citylist.sort((a, b) => a.short < b.short ? -1 : a.short > b.short ? 1 : 0)
    this.citylist.forEach(item => {
      // 新建对象的Key
      const At = item.short[0].toUpperCase()
      if (!(item.short[0].toUpperCase() in this.city)) {
        this.city[At] = []
        // 如果key没有在数组出现过,新建key
      }
      this.city[At].push(item)
      // 将当前项放入匹配的KEy中
    })
    // 放入热门
    this.city['热'] = res.data.body
    this.city['#'] = [{ label: this.chooseCity, value: '2222' }]
    // console.log(this.indexList) // 字母
    // console.log(this.citylist) // 按字母匹配城市
    console.log(this.city)// 按字母匹配城市
    // console.log(this.chooseCity)
    this.$toast.clear()
  },
  data () {
    return {
      indexList: [],
      citylist: [],
      city: {}
    }
  },
  computed: {
    chooseCity () {
      return this.$store.state.chooseCity
    }
  },
  methods: {
    async change ($event) {
      const res = await getCityInfo($event)
      console.log(res)
      // console.log($event) // 打印当前传来的对象
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.citylist.van-index-bar {
  margin-top: 45.25px;
  /deep/ .van-index-anchor {
    //顶部字体
    color: rgb(96,96,96);
    // color: black;
    font-size: 13px;
    font-weight: 400;
  }
}
/deep/ .van-index-anchor.van-index-anchor--sticky.van-hairline--bottom{
    color: rgb(0, 176, 107);
}
/deep/ .van-index-bar__index {
  text-align: center;
  // line-height: 3.5vh;
  color: rgb(96, 96, 96);
  font-weight: 500;
  width: 0px;
  padding-left: 5px;
  padding-right: 12px;
  margin-right: 15px;
  margin-bottom: 10px;
}
/deep/ .van-index-bar__index--active {
  //右边导航
  color: white;
  background-color: rgb(0, 176, 107);
  border-radius: 20px;
}
/deep/ .van-index-anchor--sticky {
  //固定在顶部
  margin-top: 45.25px;
  color: rgb(0, 176, 107);
}
.ododododo{
 .van-index-anchor {
    color: red;
  }
}
</style>
