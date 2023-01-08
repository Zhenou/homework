<template>
  <div>
    <el-card class="box-card-two">
      <div class="one">
        <span class="left">
          <el-button type="warning" round>新增仓库</el-button>
        </span>
        <span class="right">
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
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                style="color: '#FFB637'"
                >编辑</el-button
              >
              <el-button type="text" size="small">停用</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="three">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          code: 'CK000747', // 仓库编码
          name: '王行', // 仓库名称
          type: 'ZZ', // 仓库类型
          location: '天津市/市辖区/和平区', // 省/市/区
          address: '111111', // 详细地址
          status: 1, // 仓库状态
          surface: '1231.00', // 仓库面积
          includedNum: 0, // 库区数量
          personName: '小米', // 负责人
          phone: '13456786324', // 联系电话
          updateTime: '2022-12-11 19:14:50' // 更新时间
        },
        {
          code: 'CK000747', // 仓库编码
          name: '王行', // 仓库名称
          type: 'ZZ', // 仓库类型
          location: '天津市/市辖区/和平区', // 省/市/区
          address: '111111', // 详细地址
          status: 1, // 仓库状态
          surface: '1231.00', // 仓库面积
          includedNum: 0, // 库区数量
          personName: '小米', // 负责人
          phone: '13456786324', // 联系电话
          updateTime: '2022-12-11 19:14:50' // 更新时间
        },
        {
          code: 'CK000747', // 仓库编码
          name: '王行', // 仓库名称
          type: 'ZZ', // 仓库类型
          location: '天津市/市辖区/和平区', // 省/市/区
          address: '111111', // 详细地址
          status: 1, // 仓库状态
          surface: '1231.00', // 仓库面积
          includedNum: 0, // 库区数量
          personName: '小米', // 负责人
          phone: '13456786324', // 联系电话
          updateTime: '2022-12-11 19:14:50' // 更新时间
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    onTableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return ''
      } else {
        return 'statistics-warning-row'
      }
    }
  }
}
</script>

<style lang="less">
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
.right{
  float: right;
  margin-right: 30px;
  .el-button.el-button--warning.is-round {
  background-color: #F6F3F3;
  border: 1px solid #F6F3F3;
  color: black;
  font-weight: 400;
  &:hover {
    background-color: #F8A939;
    border: 1px solid #F8A939;
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
}
</style>
