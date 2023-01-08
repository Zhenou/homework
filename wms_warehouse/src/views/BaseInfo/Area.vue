<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form ref="form" :model="form">
          <el-card class="box-card">
            <el-row :gutter="20">
              <el-col :span="6">
                <span class="label">仓库名称</span>
                <el-form-item>
                  <el-input
                    v-model="form.warehouseName"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <span class="label">库区名称</span>
                <el-form-item>
                  <el-input
                    v-model="form.name"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <span class="label">仓库状态</span>
                <el-form-item>
                  <el-select
                    :clearable="true"
                    v-model.trim="form.status"
                    placeholder="请输入"
                  >
                    <el-option :label="'全部'" :value="null">全部</el-option>
                    <el-option :label="'停用'" :value="0">停用</el-option>
                    <el-option :label="'启用'" :value="1">启用</el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <div class="button">
                  <el-button type="primary" round @click="getAreaList('search')"
                    >搜索</el-button
                  >
                  <el-button type="success" round @click="formReset"
                    >重置</el-button
                  >
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-form>
      </el-col>
    </el-row>

    <el-card class="box-card-two">
      <div class="one">
        <span class="left">
          <el-button type="warning" round @click="addTopList"
            >新增仓库</el-button
          >
        </span>
        <span class="right" v-if="path">
          <el-button type="warning" @click="downLoad" round
            >下载库区模版</el-button
          >
          <el-button type="warning" @click="outerVisible = true" round
            >导入库存信息</el-button
          >
        </span>
      </div>
      <div class="two">
        <el-table
          class="elTable"
          :header-cell-style="{
            background: '#f8f6ef',
            color: '#887e7e',
            fontSize: '13px',
            fontWeight: 400,
            paddingTop: '10px',
            paddingBottom: '10px',
            borderColor: '#F4ECEB',
          }"
          :cell-style="{
            fontSize: '13px',
            paddingTop: '5px',
            paddingBottom: '5px',
            height: '44px',
            lineHeight: '44px',
            fontWeight: 400,
            borderColor: '#F4ECEB',
          }"
          :data="tableData"
          border
          style="width: 100%"
          :row-class-name="onTableRowClassName"
          v-loading="tableLoading"
        >
          <el-table-column type="index" label="序号" align="center" width="68">
          </el-table-column>
          <el-table-column
            prop="warehouseName"
            label="所属仓库"
            align="center"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="code"
            label="库区编号"
            align="center"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="库区名称"
            align="center"
            width="150"
          >
          </el-table-column>

          <el-table-column
            prop="temperatureType"
            label="温度类型"
            align="center"
            width="150"
            :formatter="(row, column, cellValue) => temperatureType[cellValue]"
          >
          </el-table-column>

          <el-table-column
            prop="bearingType"
            label="承重类型"
            align="center"
            width="200"
            :formatter="(row, column, cellValue) => bearingType[cellValue]"
          >
          </el-table-column>

          <el-table-column
            prop="useType"
            label="用途属性"
            align="center"
            width="150"
            :formatter="(row, column, cellValue) => useType[cellValue]"
          >
          </el-table-column>
          <el-table-column
            prop="status"
            label="仓库状态"
            align="center"
            width="150"
          >
            <template v-slot="{ row }">
              {{ row.status ? "启用" : "禁用" }}
            </template>
          </el-table-column>
          <el-table-column
            prop="personName"
            label="负责人"
            align="center"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="phone"
            label="联系电话"
            align="center"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="includedNum"
            label="库区数量"
            align="center"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="updateTime"
            label="更新时间"
            align="center"
            width="200"
          >
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            align="center"
            width="180"
          >
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                style="color: '#FFB637'"
                @click="
                  $router.push({
                    name: 'AreaNewEdit',
                    params: { id: scope.row.id },
                  })
                "
                >编辑</el-button
              >
              <el-button
                type="text"
                size="small"
                @click="AreaStatusChange(scope.row)"
                >{{ scope.row.status ? "停用" : "启用" }}</el-button
              >
              <el-button
                type="text"
                size="small"
                @click="deleteWareHouse(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="three">
        <el-pagination
          @size-change="changePages"
          @current-change="changeSize"
          :current-page="page.current"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="page.total"
        >
        </el-pagination>
      </div>
    </el-card>

    <el-dialog title="导入库区" :visible.sync="outerVisible" width="30%">
      <el-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body
      >
        <div class="loadAfter">
          <div class="dia_one">
            导入成功
            <span style="color: green">{{fileResult.success}}</span>
            条,失败
            <span style="color: red">{{fileResult.fail}}</span>条
          </div>
          <div class="dia_two">{{fileResult.message.join()}}</div>
        </div>
        <div slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          round
          @click="clearDialog"
          >确定</el-button
        >
      </div>
      </el-dialog>

      <div class="loadBefore">
        <el-upload
          ref="file"
          class="upload-demo"
          drag
          action="http://localhost:8080//api/area/importExcel"
          show-file-list
          :limit="1"
          :on-change="ready"
          :auto-upload="false"
          append-to-body
          :disabled="fileReady"
          :on-success="success"
        >
          <i
            class="el-icon-upload"
            :style="fileReady ? 'color:#c1c4cb' : 'color:#55ba7c'"
          ></i>
          <div class="el-upload__text" :style="{ cursor: 'default' }">
            将文件拖到此处，或<em>点击上传</em>
            <div>仅支持单个表单文件导入</div>
          </div>
        </el-upload>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button round @click="outerVisible = false">取 消</el-button>
        <el-button
          type="primary"
          :disabled="!fileReady"
          round
          @click="submit"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getAreaList, AreaListDelete, AreaStatusChange } from '@/api/area'
import { temperatureType, bearingType, useType } from '@/constant/base-info'
export default {
  data () {
    return {
      temperatureType: temperatureType,
      bearingType: bearingType,
      useType: useType,
      form: {
        warehouseName: '',
        name: '',
        status: ''
      },
      // -------
      tableData: [],
      page: {
        current: 1,
        pages: 1,
        size: 10,
        total: 10
      },
      tableLoading: false,
      path: '',
      fileReady: false,
      outerVisible: false,
      innerVisible: false,
      fileResult: {
        fail: 0,
        success: 0,
        total: 0,
        message: []
      }
    }
  },
  created () {
    this.getAreaList('default')
    this.path =
      this.$route.path === '/manage-base-info/area'
        ? true
        : this.$route.path === '/manage-base-info/location'
  },
  methods: {
    // -------
    changePages (val) { // 改变页码条数
      this.page.size = val
      this.page.pages = 1
      this.getAreaList()
    },
    changeSize (val) { // 改变页码
      this.page.pages = val
      this.getAreaList()
    },
    onTableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return ''
      } else {
        return 'statistics-warning-row'
      }
    },
    async getAreaList (tag) {
      this.tableLoading = true
      let res = {}
      if (tag === 'search') {
        // 搜索请求
        const data = this.form
        res = await getAreaList(data)
      } else if (tag === 'default') {
        // 默认请求
        res = await getAreaList({ size: 10 })
      } else if (!tag) {
        // 页码请求
        res = await getAreaList({
          current: this.page.pages,
          size: this.page.size
        })
      }
      this.tableData = res.data.data.records
      this.page = {
        current: Number(res.data.data.current),
        pages: Number(res.data.data.pages),
        size: Number(res.data.data.size),
        total: Number(res.data.data.total)
      }
      this.tableLoading = false
    },
    forMatType (row, column, cellValue, index) {
      return this.BaseInfo[cellValue]
    },
    formReset () {
      this.form = {
        like_name: '',
        like_code: '',
        status: ''
      }
    },
    deleteWareHouse (id) { // 删除
      this.$confirm('确认删除吗?', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await AreaListDelete({ 'ids[]': id })
          this.$message.success('删除成功!')
          this.getAreaList('default')
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    },
    AreaStatusChange (row) { // 改变状态
      this.$confirm(
        `确认${row.status ? '停用' : '启用'}吗?`,
        `确认${row.status ? '停用' : '启用'}`,
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(async () => {
          await AreaStatusChange({ status: row.status ? 0 : 1, id: row.id })
          this.$message.success('修改成功!')
          this.getAreaList('default')
        })
        .catch(() => {
          this.$message.info('已取消修改')
        })
    },
    async addTopList () { // 编辑
      this.$router.push({ name: 'AreaNewEdit', params: { id: 'null' } })
    },
    downLoad () { // 下载模版
      const a = document.createElement('a')
      const evt = document.createEvent('MouseEvents')
      a.download = 'areaTemplate'
      a.href = './doucument/areaTemplate.xlsx'
      evt.initEvent('click', true, true)
      a.dispatchEvent(evt)
      window.URL.revokeObjectURL(a.href)
    },
    ready (file, fileList) { // 上传文件
      if (file.status === 'ready') {
        this.fileReady = true
      }
    },
    async submit () { // 提交文件
      await this.$refs.file.submit()
      this.outerVisible = false
      this.innerVisible = true
    },
    async success (response, file, fileList) { // 拿到结果
      this.fileResult = await response.data
    },
    clearDialog () { // 完成上传
      this.$refs.file.clearFiles()
      this.innerVisible = false
      this.getAreaList('default')
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

/deep/ .el-input.is-focus .el-input__inner {
  border: 1px solid #f5b33f !important;
}
.el-select {
  width: 100%;
}
// -------

.box-card-two {
  border-radius: 15px;
  /deep/ .el-card__body {
    padding: 0px;
  }
}
.el-button.el-button--warning.is-round {
  background-color: #55ba7c;
  border: 1px solid #55ba7c;
  color: white;
  font-weight: 400;
  &:hover {
    background-color: #347750;
    border: 1px solid #347750;
  }
}
.right {
  float: right;
  margin-right: 30px;
  .el-button.el-button--warning.is-round {
    background-color: #f6f3f3;
    border: 1px solid #f6f3f3;
    color: black;
    font-weight: 400;
    &:hover {
      background-color: #f8a939;
      border: 1px solid #f8a939;
    }
  }
}
.one {
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.two {
  margin-bottom: 20px;
}
.three {
  text-align: center;
  margin-bottom: 30px;
}
/deep/.el-table__row.statistics-warning-row {
  background-color: #fdfbf8;
}
/deep/.el-table__body .el-table__row.hover-row td {
  background-color: #fff4de !important;
}

/deep/ .cell {
  .el-button.el-button--text.el-button--small {
    color: #ffb83a;
  }
}

.el-pagination {
  /deep/ .el-pager li:hover {
    color: #ffb83a;
  }
  /deep/ .el-pager li.active {
    color: #ffb83a;
  }
  /deep/ .el-input.is-focus .el-input__inner {
    border: 1px solid #f5b33f !important;
  }
  /deep/ .el-pagination__sizes .el-input .el-input__inner:hover {
    border: 1px solid #857e7e;
  }
}

.loadBefore {
  border: 1px solid #ebebeb;
  border-radius: 5px;
  background-color: #F9F9F9;

}
.loadAfter{
  border: 1px solid #ebebeb;
  border-radius: 5px;
  background-color: #F9F9F9;
  height: 180px ;
  text-align: center;
  .dia_one{
    margin: 0px;
    margin-top: 20px;
  }
  .dia_two{
    text-align: left;
    color:#B4ACAC;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 14px;
  }
}
/deep/.el-upload-dragger{
  background-color: #F9F9F9;
}
/deep/ .el-dialog__body {
  padding: 10px;
  .upload-demo {
    width: 100%;
  }
}
/deep/.el-upload {
  width: 100% !important;
}
/deep/.el-upload-dragger {
  width: 100%;
  border: none;
}
/deep/ .el-upload-list__item-name {
  text-align: center;
  margin: 0px;
}
/deep/ .el-upload-list__item.is-ready {
  margin-top: -30px;
}

.dialog-footer {
  .el-button--primary.is-disabled {
    color: #b3abab;
    background-color: #f7f5f5;
    border: 1px solid #f7f5f5;
    &:hover {
      color: #b3abab;
      background-color: #f7f5f5;
      border: 1px solid #f7f5f5;
    }
  }
  .el-button--primary {
    background-color: #f5b33f;
    border: 1px solid #f5b33f;
    color: black;
    font-weight: 400;
    &:hover {
      background-color: #f19336;
      border: 1px solid #f19336;
    }
  }
  .el-button--default {
    background-color: #f7f5f5;
    border: 1px solid #f7f5f5;
    color: black;
    font-weight: 400;
    &:hover {
      background-color: #f5b33f;
      border: 1px solid #f5b33f;
    }
  }
}
</style>
