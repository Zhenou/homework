<template>
  <div>
    <van-nav-bar
      title="地图"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.go(-1)"
      placeholder
    />
    <baidu-map
      class="map"
      :center="circlePath.center"
      :zoom="zoom"
    >
    <template v-if="showMap">
   <Label  v-for="(item,index) in cityList" :key="index" :item="item" @change='reload(item)'></Label>
   </template>
   <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" @click="click"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
import { getMapCity } from '@/api/map.js'
import Label from '@/components/Lable.vue'
export default {
  components: {
    Label
  },
  data () {
    return {
      circlePath: {
        center: this.$store.state.chooseCity,
        radius: 500
      },
      cityCode: {
        text: '',
        code: ''
      },
      cityList: [],
      showMap: true,
      zoom: 10
    }
  },
  methods: {
    click () {
      console.log('1')
    },
    updateCirclePath (e) {
      this.circlePath.center = e.target.getCenter()
      this.circlePath.radius = e.target.getRadius()
    },
    async reload (item) {
      this.show = false
      const { data: { body } } = await getMapCity(item.value)
      console.log(body)
      this.cityList = body
      this.circlePath.center = body[0].label
      this.show = true
      this.zoom += 2
    }
  },
  async created () {
    this.$toast.loading('加载中')
    const data = [
      {
        label: '北京',
        value: 'AREA|88cff55c-aaa4-e2e0',
        pinyin: 'beijing',
        short: 'bj'
      },
      {
        label: '广州',
        value: 'AREA|e4940177-c04c-383d',
        pinyin: 'guangzhou',
        short: 'gz'
      },
      {
        label: '上海',
        value: 'AREA|dbf46d32-7e76-1196',
        pinyin: 'shanghai',
        short: 'sh'
      },
      {
        label: '深圳',
        value: 'AREA|a6649a11-be98-b150',
        pinyin: 'shenzhen',
        short: 'sz'
      }
    ]
    for (const k in data) {
      if (this.$store.state.chooseCity === data[k].label) {
        this.cityCode.text = data[k].label
        this.cityCode.code = data[k].value
      }
    }
    console.log(data)
    const { data: { body } } = await getMapCity(this.cityCode.code)
    this.cityList = body
    console.log(this.cityList)
    this.$toast.clear('加载中')
  }
}
</script>
<style>
.map {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
}
</style>
