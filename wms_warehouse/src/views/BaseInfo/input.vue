<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form ref="form" :model="form">
          <el-card class="box-card">
            <el-row :gutter="20">
              <el-col :span="6">
                <span class="label">仓库编号</span>
                <el-form-item>
                  <el-input v-model="form.code" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <span class="label">仓库名称</span>
                <el-form-item>
                  <el-input v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <span class="label">仓库状态</span>
                <el-form-item>
                  <el-input v-model="form.status" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <div class="button">
                  <el-button type="primary" round>搜索</el-button>
                  <el-button type="success" round>重置</el-button>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '王行',
        code: 'CK000747',
        status: 1
      }

    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.box-card {
  /deep/ .el-card__body {
    padding: 30px;
  }
  border-radius: 15px;
}
.search {
  height: 20px;
}
.label {
  display: inline-block;
  font-size: 12px;
  color: #867e7e;
  margin-bottom: 10px;
}
.el-form-item {
  margin-bottom: 0px;
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
.button {
  position: absolute;
  right: 20px;
  top: 30px;
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
</style>
