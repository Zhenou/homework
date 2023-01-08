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
            <el-form-item label="仓库编号" prop="code">
              <el-input placeholder="请输入" disabled v-model="form.code">
              </el-input> </el-form-item
          ></el-col>
          <el-col :span="6">
            <el-form-item label="所属仓库" prop="warehouseId">
              <el-select
                clear
                placeholder="请输入"
                :clearable="true"
                v-model="form.warehouseId"
              >
                <el-option
                  v-for="(item, key, index) in Info"
                  :key="index"
                  :value="item.id"
                  :label="item.name"
                ></el-option>
              </el-select> </el-form-item

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
                ></el-option> </el-select></el-form-item
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
            <el-form-item label="负责人" prop="personName">
             <el-input placeholder="请输入" v-model="form.personName">
              </el-input> </el-form-item
          ></el-col>
          <el-col :span="6">
            <el-form-item label="联系电话" prop="phone">
              <el-input placeholder="请输入"  v-model="form.phone">
              </el-input></el-form-item
          ></el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="库区状态" prop="status">
              <el-radio-group v-model="form.status">
                <el-radio :label="1">启动</el-radio>
                <el-radio :label="0">停用</el-radio>
              </el-radio-group>
            </el-form-item></el-col
          >
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
import { getAreaAddCode, getAreaCodeInfo, addArea, getAreaDetails, AreaStatusChange } from '@/api/area'
import { OnlyDelete, ChangeRouter } from '@/utils/RouterAdd_Delete'
export default {
  data () {
    return {
      temperatureType: temperatureType,
      bearingType: bearingType,
      useType: useType,
      Info: [], // 所属仓库
      form: {
        bearingType: '',
        code: '',
        name: '',
        personName: '',
        phone: '',
        status: '',
        temperatureType: '',
        useType: '',
        warehouseId: ''
      },
      formRules: {
        bearingType: [{ required: true, message: '请输入' }],
        code: [{ required: true, message: '请输入' }],
        name: [{ required: true, message: '请输入' }],
        personName: [{ required: true, message: '请输入' }],
        status: [{ required: true, message: '请输入' }],
        temperatureType: [{ required: true, message: '请输入' }],
        useType: [{ required: true, message: '请输入' }],
        warehouseId: [{ required: true, message: '请输入' }]
      },
      EditOrAdd: ''
    }
  },
  created () {
    if (this.$route.params.id !== 'null') {
      this.getAreaDetail(this.$route.params.id)
      const item = {
        title: '库区编辑',
        name: this.$route.fullPath,
        path: '/manage-base-info/area',
        id: this.$route.params.id
      }
      this.EditOrAdd = '库区编辑'
      this.$store.commit('routerNav/addTabSecond', item)
    } else {
      this.getAreaCode()
      const item = {
        title: '库区新增',
        name: this.$route.fullPath,
        path: '/manage-base-info/area',
        id: this.$route.params.id
      }
      this.EditOrAdd = '库区新增'
      this.$store.commit('routerNav/addTabSecond', item)
    }
  },
  methods: {
    async getAreaCode () {
      const { data } = await getAreaAddCode()
      this.form.code = data.data
      const res = await getAreaCodeInfo()
      this.Info = res.data.data
    },
    async getAreaDetail (id) {
      const { data: { data } } = await getAreaDetails(id)
      this.form = data
    },
    submit () {
      this.$refs.form.validate(async (res) => {
        if (res) {
          if (this.EditOrAdd === '库区新增') {
            await addArea(this.form)
          } else if (this.EditOrAdd === '库区编辑') {
            await AreaStatusChange(this.form)
          }
          const path = this.$route.path
          OnlyDelete(path)
          ChangeRouter('/manage-base-info/area')
          this.$message.success('操作成功')
          this.$refs.form.resetFields()
          this.form = {
            bearingType: '',
            code: '',
            name: '',
            personName: '',
            phone: '',
            status: '',
            temperatureType: '',
            useType: '',
            warehouseId: ''
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
      this.$router.push('/manage-base-info/area')
      ChangeRouter('/manage-base-info/area')
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
