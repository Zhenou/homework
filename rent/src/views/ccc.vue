<template>
  <div>
    <van-nav-bar
      title="城市列表"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.back()"

    />
    <van-index-bar :index-list="indexList" class="citylist"  >
      <van-index-anchor index="">当前城市</van-index-anchor>
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-index-anchor index="B">热门城市</van-index-anchor>
      <van-cell title="文本" />
      <van-index-anchor index="Y">热门城市</van-index-anchor>
      <van-cell title="北京1" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
      <van-cell title="北京" />
    </van-index-bar>
  </div>
</template>

<script>
import { getCity } from '@/api/city'
export default {
  async created () {
    const { data } = await getCity(1)
    // console.log(res)
    this.citylist.push(...data.body)
    for (let i = 0; i < this.citylist.length; i++) {
      if (!this.indexList.includes(this.citylist[i].short[0].toUpperCase())) {
        this.indexList.push(this.citylist[i].short[0].toUpperCase())
      } else continue
    }
    this.indexList = ['#', '热'].concat(this.indexList.sort())
  },
  data () {
    return {
      indexList: [],
      citylist: []
    }
  },
  computed: {}
}
</script>

<style lang="less" scoped>
.citylist .van-index-bar {

  /deep/ .van-index-anchor {
    color: rgb(164, 164, 164);
    font-size: 13px;
    font-weight: 400;

  }
  /deep/ .van-index-bar__index {
    line-height: 3.5vh;
    color: rgb(96, 96, 96);
    font-weight: 500;
  }
}
/deep/.van-index-bar__index--activ{
  color: green;
}
.citylist .van-index-bar{
  color: red;
}
</style>
