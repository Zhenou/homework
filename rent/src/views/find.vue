<template>
  <div>
    <van-search
      v-model="valueText"
      placeholder="请输入小区或地址"
      :label="cityCode.text"
      background="#1cb676"
      show-action
    >
      <template #action>
        <span @click="$router.push('/city')" class="shfont">上海</span>
        <div>
          <i
            class="iconfont icon-ditu"
            style="color: white; font-size: 24px"
          ></i>
        </div>
      </template>
    </van-search>
    <!-- 弹出层 -->
    <van-dropdown-menu>
      <van-dropdown-item title="区域" ref="ccc" v-model="allData.area">
        <van-picker
          title="标题"
          :columns="columns"
          ref="area"
          @change="onChange"
        />
        <van-button
          type="danger"
          block
          @click="onConfirmA(), $refs.ccc.toggle()"
        >
          确认
        </van-button>
      </van-dropdown-item>
      <van-dropdown-item title="方式" ref="bbb">
        <van-picker title="标题" :columns="columnsFF" ref="fff" />
        <van-button
          type="danger"
          block
          @click="onConfirmF(), $refs.bbb.toggle()"
        >
          确认
        </van-button>
      </van-dropdown-item>
      <van-dropdown-item title="租金" ref="ppp">
        <van-picker title="标题" :columns="columnsPrice" ref="price" />
        <van-button
          type="danger"
          block
          @click="onConfirmP(), $refs.ppp.toggle()"
        >
          确认
        </van-button>
      </van-dropdown-item>
      <van-dropdown-item title="筛选" ref="item">
     <van-cell>展示弹出层</van-cell>
      </van-dropdown-item>
    </van-dropdown-menu>
    <houseinfo
      v-for="(item, index) in cityList"
      :key="index"
      :item="item"
    ></houseinfo>
  </div>
</template>

<script>
import { gethouse, getArea } from '@/api/house'
import houseinfo from '@/components/houseinfo.vue'
export default {
  components: {
    houseinfo
  },
  data () {
    return {
      columnsFF: ['请选择', '整租', '合租'],
      columnsPrice: [
        '请选择',
        '1000及以下',
        '1000-2000',
        '2000-3000',
        '3000-4000',
        '4000-5000',
        '5000-7000',
        '7000以上'
      ],
      valueText: '',
      valueCity: '',
      columns: [
        // 第一列
        {
          values: ['请选择'],
          defaultIndex: 0
        },
        // 第二列
        {
          values: ['请选择'],
          defaultIndex: 0
        }
      ],
      cityCode: { text: this.$store.state.chooseCity, code: '11' },
      allCode: [],
      allData: {
        area: '',
        FF: '',
        price: '',
        others: ''
      },
      cityList: [],
      show: true
    }
  },

  methods: {

    onConfirmA (index) {
      const a = this.$refs.area.getValues()
      this.allData.area = a[1]
      // console.log(this.cityCode.code)
    },
    onConfirmF () {
      const f = this.$refs.fff.getValues()
      console.log(f)
      this.allData.FF = f[0]
    },
    onConfirmP () {
      const p = this.$refs.price.getValues()
      console.log(p)
      this.allData.price = p[0]
    },
    async onChange (picker, values) {
      console.log(values)
      if (values[1] !== '请选择' && this.valueCity === values[0]) {
        return
      }
      if (values[0] === '请选择') {
        this.columns[1].values = ['请选择']
        return
      }
      if (values[0] !== '请选择') {
        this.columns[1].values = ['请选择']
      }
      const code = this.allCode.filter((item) => item.label === values[0])
      console.log(code[0].value)
      const area2 = await getArea(code[0].value)
      console.log(area2)
      for (const key in area2.data.body) {
        this.columns[1].values.push(area2.data.body[key].label)
      }
      this.valueCity = values[0]
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
    // 城市数据
    const hosuelist = await gethouse(this.cityCode.code)
    console.log(hosuelist)
    this.cityList = hosuelist.data.body.list
    // 列表数据
    const area = await getArea(this.cityCode.code)
    this.allCode = area.data.body
    // const area2 = await getArea(this.cityCode.code)
    for (const key in this.allCode) {
      this.columns[0].values.push(this.allCode[key].label)
    }
    this.$toast.clear('加载中')
  }
}
</script>

<style lang="less" scoped>
.van-search {
  .van-search__label {
    color: rgb(116, 116, 117);
    margin-left: -10px;
    margin-right: 10px;
    font-size: 12px;
  }
  .van-search__label::after {
    content: "▼";
    font-size: 5px;
    margin-left: 2px;
  }
  .van-search__label::before {
    content: "|";
    margin-left: 45px;
    margin-top: -1px;
    display: inline-block;
    position: absolute;
    color: rgba(116, 116, 117, 1);
  }
}
.shfont {
  position: absolute;
  left: 18px;
  color: #fff0;
  top: 23px;
}
/deep/ .van-dropdown-menu__title--active {
  color: rgb(0, 175, 107);
}
</style>
