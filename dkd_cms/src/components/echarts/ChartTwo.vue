<template>
  <div>
    <!-- echarts -->
    <div id="main" class="main_container"></div>
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
    return {}
  },
  props: ['CardTableTwo'],
  mounted () {
    this.initCharts()
  },
  watch: {
    CardTableTwo (val) {
      this.$nextTick(() => {
        this.initCharts()
      })
    },
    immediate: true,
    deep: true
  },
  methods: {
    initCharts () {
      // 初始化echarts实例
      const myChart2 = echarts.init(document.getElementById('right'), null, {
        width: 410,
        height: 300
      })
      // 绘制图表
      myChart2.setOption({
        title: {
          text: '销售额趋势图',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'

          },
          confine: 'true',
          formatter: '销售额: {c0}<br />{b0}'
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '3%',
          top: '23%',
          containLabel: true,
          height: '65%'
        },
        xAxis:
          {
            type: 'category',
            data: this.CardTableTwo.xAxis,
            axisLabel: {
              formatter: function (params) {
                let val = ''
                if (params.length > 3) {
                  val = params.substr(0, 3) + '\n' + '...'
                  return val
                } else {
                  return params
                }
              }
            }
          },
        // color: 'red',
        yAxis: [
          {
            name: '单位:元',
            type: 'value',
            axisLine: {
              lineStyle: {
                color: 'rgba(154, 154, 154, 1)'
              }
            }
          },
          {
            type: 'value',
            interval: 5000
          }
        ],
        color: '#85A7FF', // 竖条颜色
        series: [
          {
            name: '销售额',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
              borderRadius: [5, 5, 0, 0]
            },
            data: this.CardTableTwo.series
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
