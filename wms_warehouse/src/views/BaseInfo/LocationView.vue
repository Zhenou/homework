<template>
  <div>
    <el-card class="box-card">
      <div class="card-body">
        <div class="left">
          <div class="tittle">库区选择</div>
          <div class="search">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="search-body">
            <div class="area">
              <div class="area-search">
                <el-input placeholder="请输入内容" v-model="input4">
                  <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </div>
              <div class="area-button">

              </div>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      input4: ''
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
    padding: 0px;
    overflow: hidden;
  }
  border-radius: 15px;
}
.left {
  box-sizing: border-box;
  height: calc(100vh - 114px);
  width: 260px;
  // background-color: rgb(236, 236, 236);
  box-shadow: 5px -0px 10px 0px rgba(99, 98, 98, 0.1);
  padding: 30px 20px 30px 20px;
  overflow: hidden;
}

.search {
  padding: 20px 0px 20px 0px;
}

.el-select {
  width: 100%;
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
/deep/ .el-input.is-focus .el-input__inner {
  border: 1px solid #f5b33f !important;
}

.search-body {
  height: calc(100% - 162px);
  background-color: #fdfbf8;
  border: 1px solid #f7f2f1;
  border-radius: 6px;
  padding: 30px;
}
</style>
