<template>
  <div>
    <el-card class="box-card">
      <el-form
        ref="form"
        :model="form"
        :rules="formRules"
        label-width="80px"
        label-position="top"
      >
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="库区" prop="location">
              <el-cascader
                ref="area"
                :clearable="true"
                v-model="form.location"
                :options="Info"
                :props="props"
                @change="onChange"
              ></el-cascader> </el-form-item
          ></el-col>
          <el-col :span="6">
            <el-form-item label="库位编号">
              <el-input placeholder="请输入" disabled v-model="form.code">
              </el-input> </el-form-item
          ></el-col>
          <el-col :span="6">
            <el-form-item label="库区名称" prop="name">
              <el-input
                placeholder="请输入"
                :clearable="true"
                v-model="form.name"
              >
              </el-input> </el-form-item
          ></el-col>
          <el-col :span="6">
            <el-form-item label="温度类型" prop="temperatureType">
              <el-select
                clear
                placeholder="请输入"
                :clearable="true"
                v-model="form.temperatureType"
              >
                <el-option
                  v-for="(item, key, index) in temperatureType"
                  :key="index"
                  :value="key"
                  :label="item"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="承重类型" prop="bearingType">
              <el-select
                clear
                placeholder="请输入"
                :clearable="true"
                v-model="form.bearingType"
              >
                <el-option
                  v-for="(item, key, index) in bearingType"
                  :key="index"
                  :value="key"
                  :label="item"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="6">
            <el-form-item label="用途属性" prop="useType">
              <el-select
                clear
                placeholder="请输入"
                :clearable="true"
                v-model="form.useType"
              >
                <el-option
                  v-for="(item, key, index) in useType"
                  :key="index"
                  :value="key"
                  :label="item"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="6">
            <el-form-item label="库区状态" prop="status">
              <el-radio-group v-model="form.status">
                <el-radio :label="1">启动</el-radio>
                <el-radio :label="0">停用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="承载体积" prop="maxVolume">
              <el-input
                :clearable="true"
                placeholder="请输入"
                onkeyup="value=value.replace(/[^\d]/g,'')"
                v-model="form.maxVolume"
              >
                <template slot="append">㎡</template>
              </el-input>
            </el-form-item></el-col
          >
          <el-col :span="6">
            <el-form-item label="承载上限">
              <el-input
                placeholder="请输入"
                :clearable="true"
                type="number"
                onkeyup="value=value.replace(/[^\d]/g,'')"
                v-model="form.maxNum"
              >
                <template slot="append">个</template>
              </el-input>
            </el-form-item></el-col
          >
          <el-col :span="6">
            <el-form-item label="承载重量" prop="maxWeight">
              <el-input
                placeholder="请输入"
                :clearable="true"
                v-model="form.maxWeight"
              >
                <template slot="append">Kg</template>
              </el-input>
            </el-form-item></el-col
          >
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-col :span="8">
              <el-form-item label="库位排/列/层">
                <el-input
                  placeholder="请输入"
                  :clearable="true"
                  type="number"
                  onkeyup="value=value.replace(/[^\d]/g,'')"
                  v-model="form.locationRow"
                >
                </el-input> </el-form-item
            ></el-col>

            <el-col :span="8">
              <el-form-item :label="'\u2002'">
                <el-input
                  placeholder="请输入"
                  :clearable="true"
                  type="number"
                  onkeyup="value=value.replace(/[^\d]/g,'')"
                  v-model="form.locationColumn"
                >
                </el-input> </el-form-item
            ></el-col>

            <el-col :span="8">
              <el-form-item :label="'\u2002'">
                <el-input
                  placeholder="请输入"
                  :clearable="true"
                  type="number"
                  onkeyup="value=value.replace(/[^\d]/g,'')"
                  v-model="form.locationLayer"
                >
                </el-input> </el-form-item
            ></el-col>
          </el-col>
          <el-col :span="12">
            <el-col :span="8">
              <el-form-item label="库位长/宽/高">
                <el-input
                  placeholder="请输入"
                  :clearable="true"
                  type="number"
                  onkeyup="value=value.replace(/[^\d]/g,'')"
                  v-model="form.locationLength"
                >
                  <template slot="append">㎡</template>
                </el-input>
              </el-form-item></el-col
            >

            <el-col :span="8">
              <el-form-item :label="'\u2002'">
                <el-input
                  placeholder="请输入"
                  :clearable="true"
                  type="number"
                  onkeyup="value=value.replace(/[^\d]/g,'')"
                  v-model="form.locationWidth"
                >
                  <template slot="append">㎡</template>
                </el-input>
              </el-form-item></el-col
            >

            <el-col :span="8">
              <el-form-item :label="'\u2002'">
                <el-input
                  placeholder="请输入"
                  :clearable="true"
                  type="number"
                  onkeyup="value=value.replace(/[^\d]/g,'')"
                  v-model="form.locationHigh"
                >
                  <template slot="append">㎡</template>
                </el-input>
              </el-form-item></el-col
            >
          </el-col>
        </el-row>
      </el-form>
      <hr
        :style="{
          backgroundColor: '#F6F3F3',
          margin: '30px -30px 30px -30px',
          height: '1px',
          border: 'none',
        }"
      />
      <el-row :gutter="20">
        <el-col :span="24">
          <el-button type="success" round @click="goBack">返回</el-button>
          <el-button type="primary" round @click="submit">提交</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { temperatureType, bearingType, useType } from '@/constant/base-info'
import { OnlyDelete, ChangeRouter } from '@/utils/RouterAdd_Delete'
import {
  LocationListAdd,
  getAreaCodeInfo,
  getSecondList,
  addLocationList,
  getEditDetail,
  changeLocationState
} from '@/api/Location'
export default {
  data () {
    const that = this
    return {
      props: {
        label: 'name',
        value: 'id',
        lazy: true,
        children: 'children',
        async lazyLoad (node, resolve) {
          if (!node.value) return
          const list = await that.getSecondList(node.value)
          const nodes = list.map((item) => ({
            id: item.id,
            name: item.name,
            leaf: node.level >= 1
          }))
          if (list.length === 0) {
            that.$set(
              that.Info.find((item) => item.id === node.value),
              'children',
              []
            )
            resolve('暂无数据')
          } else {
            that.$set(
              that.Info.find((item) => item.id === node.value),
              'children',
              nodes
            )
            resolve(nodes)
          }
          // 通过调用resolve将子节点数据返回，通知组件数据加载完成
        }
      },
      temperatureType: temperatureType,
      bearingType: bearingType,
      useType: useType,
      Info: [], // 仓库信息
      form: {
        areaId: '',
        bearingType: '',
        code: '',
        locationColumn: '',
        locationHigh: '',
        locationLayer: '',
        locationLength: '',
        locationRow: '',
        locationWidth: '',
        maxNum: '',
        maxVolume: '',
        maxWeight: '',
        name: '',
        status: '',
        temperatureType: '',
        useType: '',
        warehouseId: '',
        location: []
      },
      formRules: {
        name: [{ required: true, message: '请输入' }],
        temperatureType: [{ required: true, message: '请输入' }],
        bearingType: [{ required: true, message: '请输入' }],
        useType: [{ required: true, message: '请输入' }],
        status: [{ required: true, message: '请输入' }],
        maxVolume: [{ required: true, message: '请输入' }],
        location: [{ required: true, message: '请输入' }]
      },
      EditOrAdd: '',
      second: []
    }
  },
  created () {
    if (this.$route.params.id !== 'null') {
      this.getEditDetail(this.$route.params.id)
      const item = {
        title: '库位编辑',
        name: this.$route.fullPath,
        path: '/manage-base-info/location',
        id: this.$route.params.id
      }
      this.EditOrAdd = '库区编辑'
      this.$store.commit('routerNav/addTabSecond', item)
    } else {
      this.getAreaCode()
      const item = {
        title: '库位新增',
        name: this.$route.fullPath,
        path: '/manage-base-info/location',
        id: this.$route.params.id
      }
      this.EditOrAdd = '库区新增'
      this.$store.commit('routerNav/addTabSecond', item)
    }
  },
  methods: {
    async getAreaCode () {
      const { data } = await LocationListAdd()
      this.form.code = data.data
      const res = await getAreaCodeInfo()
      this.Info = res.data.data
    },
    async getEditDetail (id) {
      const {
        data: { data }
      } = await getEditDetail(id)
      this.form = data
      this.form.location = [data.warehouseId, data.areaId]
      const res = await getAreaCodeInfo()
      this.Info = res.data.data
      const item = this.Info.find(item => item.id === this.form.warehouseId)
      const res2 = await this.getSecondList(item.id)
      this.$set(this.Info.find(item => item.id === this.form.warehouseId), 'children', res2)
      const item2 = item.children.find(item => item.id === this.form.areaId)
      this.$refs.area._data.inputValue = `${item.name}/${item2.name}`
    },
    submit () {
      this.$refs.form.validate(async (res) => {
        if (res) {
          if (this.EditOrAdd === '库区新增') {
            await addLocationList(this.form)
          } else if (this.EditOrAdd === '库区编辑') {
            await changeLocationState(this.form)
          }
          const path = this.$route.path
          OnlyDelete(path)
          ChangeRouter('/manage-base-info/location')
          this.$message.success('提交成功')
          this.$refs.form.resetFields()
          this.form = {
            areaId: '',
            bearingType: '',
            code: '',
            locationColumn: '',
            locationHigh: '',
            locationLayer: '',
            locationLength: '',
            locationRow: '',
            locationWidth: '',
            maxNum: '',
            maxVolume: '',
            maxWeight: '',
            name: '',
            status: '',
            temperatureType: '',
            useType: '',
            warehouseId: '',
            location: []
          }
        } else {
          this.$message.error('请填必填项')
        }
        return false
      })
    },
    goBack () {
      const path = this.$route.path
      OnlyDelete(path)
      ChangeRouter('/manage-base-info/location')
      this.$router.push('/manage-base-info/location')
    },
    onChange (val) {
      const item = this.second.find((item) => item.id === val[1])
      this.form.warehouseId = val[0]
      this.form.areaId = val[1]
      this.form.temperatureType = item.temperatureType
      this.form.bearingType = item.bearingType
      this.form.useType = item.useType
      this.form.status = item.status
    },
    async getSecondList (id) {
      const res = await getSecondList(id)
      this.second = res.data.data
      return res.data.data
    }
  }
}
</script>

<style lang='less' scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  border-radius: 15px;
  width: 100%;
  /deep/ .el-card__body {
    padding: 30px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
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
//表单
.el-col-24 {
  text-align: center;
}
.el-form-item {
  margin-bottom: 0px;
  /deep/.el-form-item__label {
    font-size: 12px;
    color: #7e7374;
    line-height: 20px;
  }

  /deep/ .el-input__inner {
    line-height: 50px;
    background-color: #f7f5f5;
    border: none;
    border-radius: 5px;
    &:hover {
      border: 1px solid #867e7e;
    }
    &:focus {
      border: 1px solid #f5b33f;
    }
  }
}
.el-cascader {
  width: 100%;
}

.el-button.is-round {
  padding: 12px 70px;
}
.el-button.el-button--primary.is-round {
  background-color: #f5b33f;
  border: 1px solid #f5b33f;
  color: black;
  font-weight: 400;
  &:hover {
    background-color: #f19336;
    border: 1px solid #f19336;
  }
}
.el-button.el-button--success.is-round {
  background-color: #f7f5f5;
  border: 1px solid #f7f5f5;
  color: black;
  font-weight: 400;
  &:hover {
    background-color: #f5b33f;
    border: 1px solid #f5b33f;
  }
}
/deep/input::-webkit-input-placeholder {
  color: #c0b6b6;
  font-size: 14px;
}

/deep/ .el-input.is-focus .el-input__inner {
  border: 1px solid #f5b33f !important;
}
.el-select {
  width: 100%;
}
.el-input-group--append {
  /deep/.el-input__inner {
    border-radius: 5px 0px 0px 5px;
  }
}
/deep/ .el-input-group__append {
  color: #565556;
  background-color: #e4dada;
  width: 20px;
  padding: 0px 10px 0 10px;
  text-align: center;
  border-radius: 0px 5px 5px 0px;
}
/deep/.el-radio__input.is-checked + .el-radio__label {
  color: #f9af48 !important;
}
/deep/.el-radio__input.is-checked .el-radio__inner {
  background: #f9af48 !important;
  border-color: #f9af48 !important;
}
</style>
