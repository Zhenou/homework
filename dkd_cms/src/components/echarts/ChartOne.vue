// 页面文件，如index.vue
<template>
  <div>
    <!-- echarts -->
    <div id="main" class="main_container" v-if="isShow"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  GridComponent,
  TooltipComponent
} from 'echarts/components'
import { BarChart, LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LineChart,
  TooltipComponent
])

export default {
  data () {
    return {
      isShow: false
    }
  },
  props: ['CardTableOne'],
  mounted () {
    this.initCharts()
  },
  watch: {
    CardTableOne (val) {
      this.$nextTick(() => {
        this.initCharts()
        // console.log(this.CardTableOne);
      })
    },
    immediate: true,
    deep: true
  },
  methods: {
    initCharts () {
      // 初始化echarts实例
      const myChart = echarts.init(document.getElementById('left'), null, {
        width: 410,
        height: 300
      })
      // 绘制图表
      myChart.setOption({
        title: {
          text: '销售额趋势图',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          confine: 'true',
          formatter: '销售额: {c0}<br/>{b0}'
        },
        grid: {
          left: '5%',
          right: '4%',
          bottom: '3%',
          top: '23%',
          containLabel: true,
          height: '60%'
        },
        xAxis: {
          boundaryGap: false,
          type: 'category',
          data: this.CardTableOne.xAxis,
          axisLine: {
            lineStyle: {
              color: 'rgba(154, 154, 154, 1)'
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '单位：元',
            axisLine: {
              lineStyle: {
                color: 'rgba(154, 154, 154, 1)'
              }
            }
          },
          {
            type: 'value',
            interval: 500
          }
        ],
        // color: 'red',
        series: [
          {
            data: this.CardTableOne.series,
            type: 'line',
            smooth: true,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(236, 105, 99,0.5)' // 0% 处的颜色
                  },
                  {
                    offset: 0.9,
                    color: 'white' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            lineStyle: {
              color: 'red',
              width: 4
            },
            itemStyle: {
              color: 'red'
            },
            symbolSize: 7
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
