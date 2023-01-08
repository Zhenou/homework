<template>
  <div>
    <!-- 第一行 -->
    <el-row :gutter="20">
      <!-- 第一行第一列-->
      <el-col :span="18">
        <!-- 第一行第一列第一行-->
        <el-row :gutter="20">
          <el-col :span="13" class="one-1">
            <CardOneOne :CardOne="CardOne"></CardOneOne>
          </el-col>
          <el-col :span="11" class="one-2">
            <CardOneTwo :CardTwo="CardTwo"></CardOneTwo>
          </el-col>
        </el-row>
        <!-- 第一行第一列第二行-->
        <el-row :gutter="20">
          <el-col :span="24" class="two-1">
            <CardTwoOne
              :CardTableOne="CardTableOne"
              :CardTableTwo="CardTableTwo"
              @upData="upData"
            ></CardTwoOne>
          </el-col>
        </el-row>
      </el-col>
      <!-- 第一行第二列-->
      <el-col :span="6" class="two-3">
        <CardOneThree :CardThree="CardThree"></CardOneThree>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="20">
      <el-col :span="14" class="three-1">
        <CardThreeOne :CardTableThree="CardTableThree"></CardThreeOne>
      </el-col>
      <el-col :span="10" class="three-2">
        <CardThreeTwo></CardThreeTwo>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CardOneOne from '@/components/card/CardOneOne.vue'
import CardOneTwo from '@/components/card/CardOneTwo.vue'
import CardOneThree from '@/components/card/CardOneThree.vue'
import CardTwoOne from '@/components/card/CardTwoOne.vue'
import CardThreeOne from '@/components/card/CardThreeOne.vue'
import CardThreeTwo from '@/components/card/CardThreeTwo.vue'
import {
  getWorkOrder,
  getOrderCount,
  getOrderAmount,
  getTopTen,
  getTableOne,
  getTableTwo,
  getTableThree
} from '@/api/getData'
export default {
  components: {
    CardOneOne,
    CardOneTwo,
    CardOneThree,
    CardTwoOne,
    CardThreeOne,
    CardThreeTwo
  },
  data () {
    return {
      CardOne: {
        cancelTotal: 0,
        completedTotal: 0,
        date: '',
        progressTotal: '',
        repair: '',
        total: 0,
        workerCount: 0
      },
      CardTwo: {
        order: 0,
        amount: 0
      },
      CardThree: [],
      CardTableOne: {},
      CardTableTwo: {},
      CardTableThree: {}

    }
  },
  async created () {
    this.getOne() // 第一个卡片
    this.getTwoOrder() // 第二个卡片订单量
    this.getTwoAmount() // 第二个卡片订金额
    this.getTopTen() // 前十数据
    this.getTableOne() // 图表1
    this.getTableTwo() // 图表2
    this.getTableThree() // 图表3
  },
  methods: {
    upData (value) {
      if (value === 'week') {
        this.getTableOne()
        this.getTableTwo()
      }
      if (value === 'mouth') {
        this.getTableOneMouth()
        this.getTableTwoMouth()
      }
      if (value === 'year') {
        this.getTableOneYear()
        this.getTableTwoYear()
      }
    },
    async getTableOneMouth () { // 图表1的月
      const data = this.$store.getters.time
      data.collectType = 1
      const tableOneMouth = await getTableOne(data)
      const Time = new Date()
      const year = Time.getFullYear()
      const tableDataMouth = {
        series: tableOneMouth.data.series.map((item) => item / 100),
        xAxis: tableOneMouth.data.xAxis
          .map((item) => item.replace(year, ''))
          .map((item) => item.replace(/-/, ''))
      }
      this.CardTableOne = tableDataMouth
    },
    async getTableTwoMouth () { // 图表2的月
      const data = await getTableTwo(this.$store.getters.time)
      // console.log(data)
      const tableData = {
        series: data.data.series.map((item) => item / 100),
        xAxis: data.data.xAxis
      }
      this.CardTableTwo = tableData
      // console.log(this.CardTableTwo );
    },
    async getTableOneYear () { // 图表2的年
      const data = this.$store.getters.yearTime
      data.collectType = 2
      const tableOneMouth = await getTableOne(data)

      const tableDataMouth = {
        series: tableOneMouth.data.series.map((item) => item / 100),
        xAxis: tableOneMouth.data.xAxis
      }
      // console.log(tableDataMouth);
      this.CardTableOne = tableDataMouth
    },
    async getTableTwoYear () {
      const data = await getTableTwo(this.$store.getters.yearTime)
      // console.log(data)
      const tableData = {
        series: data.data.series.map((item) => item / 100),
        xAxis: data.data.xAxis
      }
      this.CardTableTwo = tableData
      // console.log(this.CardTableTwo );
    },
    async getOne () {
      // 工单统计
      const one = await getWorkOrder(this.$store.getters.times)
      // console.log(res)
      // this.CardOne = res.data
      one.data.forEach((item) => {
        for (const k in item) {
          if (!item[k]) {
            this.CardOne[k] = 0
          } else {
            this.CardOne[k] += item[k]
          }
        }
      })
    },
    async getTwoOrder () {
      // 订单量
      const two = await getOrderCount(this.$store.getters.times)
      // console.log(two)
      this.CardTwo.order = two.data
    },
    async getTwoAmount () {
      // 订单金额
      const two = await getOrderAmount(this.$store.getters.times)
      // console.log(two)
      this.CardTwo.amount = (two.data / 1000000).toFixed(2)
    },
    async getTopTen () {
      // 前十请求
      const three = await getTopTen(this.$store.getters.time)
      this.CardThree = three.data
      // console.log(this.CardThree)
    },
    async getTableOne (num = 1) {
      // 图表1
      const data = this.$store.getters.dayTime
      data.collectType = 1
      // console.log(data)
      // console.log(data)
      const tableOne = await getTableOne(data)
      // console.log(tableOne)
      const weekDay = [
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
      // console.log(tableOne)
      const tableData = {
        series: tableOne.data.series.map((item) => item / 100),
        xAxis: tableOne.data.xAxis.map(
          (item) =>
            weekDay[new Date(Date.parse(item.replace(/-/g, '/'))).getDay()]
        )
      }
      // console.log(tableData)
      this.CardTableOne = tableData
    },
    async getTableTwo () {
      // 图表2
      // console.log(this.$store.getters.dayTime.start)
      // console.log(this.$store.getters.dayTime)
      const tableTwo = await getTableTwo(this.$store.getters.dayTime)
      // console.log(tableTwo)
      const tableData = {
        series: tableTwo.data.series.map((item) => item / 100),
        xAxis: tableTwo.data.xAxis
      }
      this.CardTableTwo = tableData
      // console.log(this.CardTableTwo)
    },
    async getTableThree () { // 图表3
      const tableThree = await getTableThree()
      // console.log(tableThree)
      const tableData = {
        // supName: tableThree.data.map((item) => item.name),
        // supValue: tableThree.data.map((item) => item.value),
        useData: [...tableThree.data],
        sumValue: tableThree.data.reduce((sum, item) => item.value + sum, 0),
        sumName: tableThree.data.length
      }
      this.CardTableThree = tableData
      // console.log(this.CardTableThree.useData)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 10px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.text {
  font-size: 14px;
}
.item {
  padding: 18px 0;
}
.one-1 {
  min-width: 200px;
}
</style>
