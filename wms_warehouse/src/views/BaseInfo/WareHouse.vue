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
                    <el-input
                      v-model="form.like_code"
                      placeholder="请输入"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <span class="label">仓库名称</span>
                  <el-form-item>
                    <el-input
                      v-model="form.like_name"
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
                    <el-button
                      type="primary"
                      round
                      @click="getWareHouseList('search')"
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
          <el-button type="warning" round>下载库区模版</el-button>
          <el-button type="warning" round>导入库存信息</el-button>
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
            prop="code"
            label="仓库编码"
            align="center"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="仓库名称"
            align="center"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="type"
            label="仓库类型"
            align="center"
            width="150"
            :formatter="forMatType"
          >
          </el-table-column>
          <el-table-column
            prop="location"
            label="省/市/区"
            align="center"
            width="200"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="详细地址"
            align="center"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="status"
            label="仓库状态"
            align="center"
            width="150"
          >
            <template v-slot="{ row }">
              {{ row.status ? "启用" : "停用" }}
            </template>
          </el-table-column>
          <el-table-column
            prop="surface"
            label="仓库面积m²"
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
                @click="listEdit(scope.row.id)"
                >编辑</el-button
              >
              <el-button
                type="text"
                size="small"
                @click="changeStatus(scope.row)"
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
  </div>
</template>

<script>
import {
  getWareHouseList,
  WareHouseListDelete,
  changeStatus
} from '@/api/warehouse'
import { BaseInfo } from '@/constant/base-info'
export default {
  data () {
    return {
      BaseInfo: BaseInfo,
      form: {
        like_name: '',
        like_code: '',
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
      path: ''
    }
  },
  created () {
    this.getWareHouseList('default')
    this.path =
      this.$route.path === '/manage-base-info/area'
        ? true
        : this.$route.path === '/manage-base-info/location'
  },
  methods: {
    // -------
    changePages (val) {
      this.page.size = val
      this.page.pages = 1
      this.getWareHouseList()
    },
    changeSize (val) {
      this.page.pages = val
      this.getWareHouseList()
    },
    onTableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return ''
      } else {
        return 'statistics-warning-row'
      }
    },
    async getWareHouseList (tag) {
      this.tableLoading = true
      let res = {}
      if (tag === 'search') {
        // 搜索请求
        const data = this.form
        res = await getWareHouseList(data)
      } else if (tag === 'default') {
        // 默认请求
        res = await getWareHouseList({ size: 10 })
      } else if (!tag) {
        // 页码请求
        res = await getWareHouseList({
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
    deleteWareHouse (id) {
      this.$confirm('确认删除吗?', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await WareHouseListDelete({ 'ids[]': id })
          this.$message.success('删除成功!')
          this.getWareHouseList('default')
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    },
    changeStatus (row) {
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
          await changeStatus({ status: row.status ? 0 : 1, id: row.id })
          this.$message.success('修改成功!')
          this.getWareHouseList('default')
        })
        .catch(() => {
          this.$message.info('已取消修改')
        })
    },
    async addTopList () {
      await this.$router.push('/manage-base-info/warehouse/details/null')
      const item = {
        title: this.$route.meta.title,
        name: this.$route.fullPath,
        path: '/manage-base-info/warehouse',
        id: this.$route.meta.id
      }
      this.$store.commit('routerNav/addTabSecond', item)
    },
    listEdit (id) {
      this.$router.push({ name: 'WarehouseEdit', params: { id } })
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
</style>
