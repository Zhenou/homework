// 页面文件，如index.vue
<template>
  <div>
    <!-- echarts -->
    <div id="left1" class="main_container"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  GridComponent,
  TooltipComponent
} from 'echarts/components'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LineChart,
  TooltipComponent,
  PieChart
])

export default {
  data () {
    return {}
  },
  props: ['CardTableThree'],
  mounted () {
    this.initCharts()
  },
  watch: {
    CardTableThree (val) {
      this.$nextTick(() => {
        this.initCharts()
      })
      // console.log(this.CardTableThree.useData)
    },
    immediate: true,
    deep: true
  },
  methods: {
    initCharts () {
      // 初始化echarts实例
      const myChart3 = echarts.init(document.getElementById('left1'), null, {
        width: 460,
        height: 300
      })
      // 绘制图表
      myChart3.setOption({
        color: ['#759CFE', '#87EAB5', '#FFA680', '#BBE8FF', '#B4C5E2'],
        tooltip: {
          trigger: 'item',
          confine: 'true',
          formatter: '销售额: {c0}%<br />{b0}'
        },
        grid: {
          right: '15%',
          bottom: '3%',
          containLabel: true,
          height: '65%'
        },
        series: [
          {
            type: 'pie',
            top: 30,
            bottom: -40,
            left: 50,
            radius: ['20%', '60%'],
            label: {
              show: true,
              fontWeight: '',
              fontSize: 14,
              formatter: ['{a|{b}}', '{b|{d}%}'].join('\n'),
              rich: {
                a: {
                  fontWeight: 'bold',
                  fontSize: 12
                },
                b: {
                  fontWeight: 'normal',
                  align: 'left'
                }
              }
            },
            roseType: 'radius',
            labelLine: {
              show: true
            },
            data: this.CardTableThree.useData
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.main_container {
  width: 300px;
  height: 300px;
  // overflow: hidden;
}
</style>
