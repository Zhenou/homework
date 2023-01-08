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
          <el-col :span="8">
            <el-form-item label="仓库编码" prop="code">
              <el-input placeholder="请输入" disabled v-model="form.code">
              </el-input> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="仓库名称" prop="name">
              <el-input
                placeholder="请输入"
                :clearable="true"
                v-model="form.name"
              >
              </el-input> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="仓库类型" prop="type">
              <el-select
                clear
                placeholder="请输入"
                :clearable="true"
                v-model="form.type"
              >
                <el-option
                  v-for="(item, key, index) in BaseInfo"
                  :key="index"
                  :value="key"
                  :label="item"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="16"
            ><el-form-item label="省/市/区" prop="city">
              <el-cascader
                :clearable="true"
                v-model="city"
                :options="area"
                :props="{ value: 'code', label: 'name', children: 'children' }"
                @change="changeValue"
              ></el-cascader> </el-form-item
          ></el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item label="详细地址">
              <el-input placeholder="请输入" :clearable="true" v-model="form.address"> </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="仓库状态" prop="status">
              <el-radio-group v-model="form.status">
                <el-radio label="1">启动</el-radio>
                <el-radio label="2">停用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="仓库面积">
              <el-input placeholder="请输入" :clearable="true" v-model="form.surface">
                <template slot="append">㎡</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="负责人" prop="personName">
              <el-input placeholder="请输入" :clearable="true" v-model="form.personName">
              </el-input> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="联系电话">
              <el-input placeholder="请输入" :clearable="true" v-model="form.phone">
              </el-input> </el-form-item
          ></el-col>
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
          <el-button
            type="success"
            round
            @click="goBack"
            >返回</el-button
          >
          <el-button type="primary" round @click="submit">提交</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { BaseInfo } from '@/constant/base-info'
import { WareHouseListAdd, WareHouseAdd } from '@/api/warehouse'
import AreaJson from '@/constant/Area.json'
import { OnlyDelete, ChangeRouter } from '@/utils/RouterAdd_Delete'
export default {
  data () {
    return {
      BaseInfo: BaseInfo,
      form: {
        name: '',
        address: '',
        area: '',
        city: '',
        code: '',
        location: '',
        personName: '',
        phone: '',
        province: '',
        status: '',
        surface: '',
        type: ''
      },
      formRules: {
        name: [{ required: true, message: '请输入' }],
        address: [{ required: true, message: '请输入' }],
        area: [{ required: true, message: '请输入' }],
        city: [{ required: true, message: '请输入' }],
        location: [{ required: true, message: '请输入' }],
        personName: [{ required: true, message: '请输入' }],
        phone: [{ required: true, message: '请输入' }],
        province: [{ required: true, message: '请输入' }],
        status: [{ required: true, message: '请输入' }],
        surface: [{ required: true, message: '请输入' }],
        type: [{ required: true, message: '请输入' }]
      },
      area: [],
      city: ''
    }
  },
  created () {
    this.getWareHouseListAdd()
    this.area = AreaJson
    // for (let i = 0; i < this.area.length; i++) {
    //   if (this.area[i].children.length === 0) {
    //     delete this.area[i].children // 解决因为省级区域没有下级市的BUG
    //   }
    // }
  },
  methods: {
    async getWareHouseListAdd () {
      const { data } = await WareHouseListAdd()
      this.form.code = data.data
    },
    submit () {
      this.$refs.form.validate(async (res) => {
        if (res) {
          await WareHouseAdd(this.form)
          const path = this.$route.path
          OnlyDelete(path)
          ChangeRouter('/manage-base-info/warehouse')
          this.$message.success('新增成功')
          this.$refs.form.resetFields()
          this.form = {
            name: '',
            address: '',
            area: '',
            city: '',
            code: '',
            location: '',
            personName: '',
            phone: '',
            province: '',
            status: '',
            surface: '',
            type: ''
          }
        } else {
          this.$message.error('请填必填项')
        }
        return false
      })
    },
    changeValue (value) {
      console.log('value🚀==>', value)
      this.form.province = value[0]
      this.form.city = value[1]
      this.form.area = value[2] ? value[2] : ''
    },
    goBack () {
      const path = this.$route.path
      OnlyDelete(path)
      this.$router.push('/manage-base-info/warehouse')
      ChangeRouter('/manage-base-info/warehouse')
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
