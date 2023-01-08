<template>
  <div>
    <el-container>
      <el-header>
        <div class="top_nav">
          <div class="left">
            <el-scrollbar>
              <el-tabs
                :value="defaultActiveTop"
                type="card"
                @tab-remove="removeTab"
                @tab-click="clickChangNav"
              >
                <el-tab-pane
                  v-for="(item, index) in editableTabs"
                  :key="item.id"
                  :label="item.title"
                  :name="item.name"
                  :closable="index === 0 ? false : true"
                >
                </el-tab-pane>
              </el-tabs>
            </el-scrollbar>
          </div>
          <span class="right">
            <el-dropdown @command="handleCommand">
              <span>
                <i class="el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu
                slot="dropdown"
                style="min-width: 118px"
                placement="bottom"
              >
                <el-dropdown-item command="a">
                  <i class="el-icon-back"></i>关闭左侧
                </el-dropdown-item>
                <el-dropdown-item command="b">
                  <i class="el-icon-right"></i>关闭右侧
                </el-dropdown-item>
                <el-dropdown-item command="c">
                  <i class="el-icon-close"></i>关闭其他
                </el-dropdown-item>
                <el-dropdown-item command="d">
                  <i class="el-icon-error"></i>关闭全部
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="nav_img">
            <img
              src="http://www-wms-java.itheima.net/img/logo@2x.2c4f2c76.png"
              alt=""
            />
          </div>
          <el-scrollbar>
            <el-menu
              class="el-menu-vertical-demo"
              :default-active="defaultActiveLeft"
              text-color="#807576"
              :router="true"
              @select="topNavAdd"
            >
              <el-menu-item index="/dashboard">
                <i class="el-icon-menu"></i>
                <span slot="title">工作台</span>
              </el-menu-item>

              <el-submenu index="/manage-base-info">
                <template slot="title">
                  <i class="el-icon-c-scale-to-original"></i>
                  <span>基础信息管理</span>
                </template>
                <el-menu-item index="/manage-base-info/warehouse">
                  <div class="line_dot">
                    <span>仓库管理</span>
                    <span class="vline"></span>
                    <span class="vDot"></span>
                  </div>
                </el-menu-item>
                <el-menu-item index="/manage-base-info/area"
                  ><div class="line_dot">
                    <span>库区管理</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
                <el-menu-item index="/manage-base-info/location"
                  ><div class="line_dot">
                    <span>库位管理</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
                <el-menu-item index="/manage-base-info/location-view"
                  ><div class="line_dot">
                    <span>库位视图</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
                <el-menu-item index="/manage-base-info/goods"
                  ><div class="line_dot">
                    <span>货品管理</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
                <el-menu-item index="/manage-base-info/goods-type"
                  ><div class="line_dot">
                    <span>货品类型管理</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-c-scale-to-original"></i>
                  <span>商务管理</span>
                </template>
                <el-menu-item index="/manage-business/goods-owner">
                  <div class="line_dot">
                    <span>货主管理</span>
                    <span class="vline"></span>
                    <span class="vDot"></span>
                  </div>
                </el-menu-item>
                <el-menu-item index="/manage-business/task-picking"
                  ><div class="line_dot">
                    <span>承运商管理</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
              </el-submenu>

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-c-scale-to-original"></i>
                  <span>库内管理</span>
                </template>
                <el-menu-item index="/manage-storage/list">
                  <div class="line_dot">
                    <span>盘点单</span>
                    <span class="vline"></span>
                    <span class="vDot"></span>
                  </div>
                </el-menu-item>
                <el-menu-item index="/manage-storage/list-task"
                  ><div class="line_dot">
                    <span>盘点任务</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
                <el-menu-item index="/manage-storage/storage-lose-profit"
                  ><div class="line_dot">
                    <span>库存损益</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
                <el-menu-item index="/manage-storage/latest-storage"
                  ><div class="line_dot">
                    <span>实时库存</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
              </el-submenu>

              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-c-scale-to-original"></i>
                  <span>入库管理</span>
                </template>
                <el-menu-item index="/manage-storage-in/list-in/list">
                  <div class="line_dot">
                    <span>入库单</span>
                    <span class="vline"></span>
                    <span class="vDot"></span>
                  </div>
                </el-menu-item>
                <el-menu-item index="/manage-storage-in/list-in/task-receive"
                  ><div class="line_dot">
                    <span>收货任务</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
                <el-menu-item index="/manage-storage-in/list-in/task-add"
                  ><div class="line_dot">
                    <span>上架任务</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
              </el-submenu>

              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-c-scale-to-original"></i>
                  <span>出库管理</span>
                </template>
                <el-menu-item index="/manage-storage-out/list-out">
                  <div class="line_dot">
                    <span>出库单</span>
                    <span class="vline"></span>
                    <span class="vDot"></span>
                  </div>
                </el-menu-item>
                <el-menu-item index="/manage-storage-out/task-picking"
                  ><div class="line_dot">
                    <span>拣货任务</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
                <el-menu-item index="/manage-storage-out/manage-task-transfer"
                  ><div class="line_dot">
                    <span>交接任务</span>
                    <span class="vline"></span>
                    <span class="vDot"></span></div
                ></el-menu-item>
              </el-submenu>
            </el-menu>
          </el-scrollbar>
          <div class="nav_left_bottom">
            <img
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              alt=""
            />
            <p>admin</p>
            <span class="nav_right" @click="logout">
              <i class="el-icon-d-arrow-right"></i>
            </span>
          </div>
        </el-aside>
        <el-main>
            <router-view :key="$route.fullPath">  </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { DeleteRouter, ChangeRouter, AddRouter } from '@/utils/RouterAdd_Delete'
export default {
  data () {
    return {}
  },

  computed: {
    ...mapState('routerNav', [
      'defaultActiveTop',
      'defaultActiveLeft',
      'editableTabs'
    ])
  },
  mounted () {
    // this.defaultActive = this.$route.path
    // this.$store.commit('routerNav/setActive', this.$route.path)
  },
  methods: {
    removeTab (targetName) {
      DeleteRouter(targetName)
      // this.$store.commit('routerNav/removeTab', targetName)
    },
    clickChangNav (e) {
      ChangeRouter(e._props.name)
      // this.$store.commit('routerNav/clickChangNav', e._props.name)
    },
    handleCommand (command) {
      // 右侧按钮
      this.$message('click on item ' + command)
    },
    logout () {
      // 退出
      this.$store.commit('routerNav/setA', '333')
    },
    topNavAdd (path) {
      // 新增顶部按钮
      const item = this.$router.options.routes[1].children.find(
        (item) => item.path === path
      )
      AddRouter(item)
      // this.$store.commit('routerNav/addTab', item)
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #f4efef;
  // background-color: black;
  // background-color: gray;
  color: #333;
  line-height: 64px;
  height: 64px !important;
  width: calc(100vw - 226px);
  position: absolute;
  left: 226px;
  padding: 0;
  min-width: calc(1300px - 226px);
}

.el-aside {
  background-color: #ffffff;
  // background-color: blue;
  color: #333;
  text-align: center;
  width: 226px !important;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.el-main {
  padding: 20px 30px 20px 30px;
  margin-left: 226px;
  width: calc(100vw - 226px);
  min-width: calc(1300px - 226px);
  height: calc(100vh - 64px);
  background-color: #fdf9f9;
  // background-color: gray;
  color: #333;
  // text-align: center;
  // line-height: 160px;
  margin-top: 64px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-tag.el-tag--light {
  float: left;
}
.nav_img {
  height: 100px;
  width: 226px;
  line-height: 100px;
  text-align: center;
  img {
    width: 150px;
    vertical-align: middle;
  }
}
.el-menu {
  height: calc(100vh - 163px);
}
.el-menu-vertical-demo {
  text-align: left;
  width: 206px;
  border: 0px;
  .el-menu-item {
    transition: none;
  }
  .el-submenu {
    /deep/.el-submenu__title {
      transition: none;
    }
  }
  // }
}
/deep/ .el-submenu__title:hover {
  color: none !important;
  background: none;
}
.el-menu-item:hover {
  color: none !important;
  background: none;
}

.el-submenu.is-active {
  //带子级的标题
  // background-color: #fff4de;
  // border-radius: 0 25px 25px 0;
  /deep/ .el-submenu__title,
  i {
    z-index: 1000;
    background-color: #fff4de;
    border-radius: 0 25px 25px 0;
    color: #ffbc38 !important;
  }
}
.el-menu-item.is-active {
  //不带子级的标题
  z-index: 1000;
  background-color: #fff4de;
  border-radius: 0 25px 25px 0;
  color: #ffbc38;
}

//子级标签选中状态
/deep/ .el-menu.el-menu--inline {
  .el-menu-item:nth-child(1) {
    padding-left: 60px !important;
    //  overflow: hidden;
    .line_dot {
      position: relative;
      .vline {
        border-left: 1px solid #d3c9c8;
        position: absolute;
        top: 5px;
        left: -20px;
        height: 10px;
      }
    }
  }
  .el-menu-item {
    padding-left: 60px !important;
    //  overflow: hidden;
    .line_dot {
      position: relative;
      .vline {
        border-left: 1px solid #d3c9c8;
        position: absolute;
        top: -10px;
        left: -20px;
        height: 20px;
      }
      .vDot {
        position: absolute;
        width: 6px;
        height: 6px;
        top: 22px;
        left: -22px;
        border-radius: 25px;
        background-color: #d3c9c8;
      }
    }
  }
  .el-menu-item:hover {
    background: none;
  }
  .el-menu-item.is-active:nth-child(1) {
    color: #463e3f;
    font-weight: 500;
    background: none;
    .vDot {
      background-color: #ffa811;
    }
  }
  .el-menu-item.is-active {
    color: #463e3f;
    font-weight: 500;
    background: none;
    .vDot {
      background-color: #ffa811;
    }
  }
}
//面包屑
/deep/ .el-tabs.el-tabs--card.el-tabs--top {
  height: 64px;
  width: calc(100vw - 226px - 80px);
  min-width: calc(1300px - 226px - 80px);
}
/deep/ .el-tabs__nav.is-top {
  overflow: hidden;
  border: 0px;
  margin-left: -6px;
}
/deep/ .el-tabs__header.is-top {
  border-bottom: 0px;
  /deep/ .el-tabs__nav-wrap.is-scrollable.is-top {
  }
}
/deep/ .el-tabs__item {
  margin-left: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  color: #beb7b7;
}
/deep/ .el-tabs__item.is-active {
  margin-left: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  color: #f5b33f;
}
.nav_top {
  line-height: 64px;
}
.left {
  float: left;
}
.right {
  position: absolute;
  top: 0px;
  right: 30px;
  .el-dropdown-selfdefine {
    .el-icon-arrow-down {
      width: 32px;
      height: 32px;
      background-color: white;
      vertical-align: middle;
      display: inline-block;
      border-radius: 8px;
      text-align: center;
      line-height: 32px;
    }
  }
}

/deep/ .el-tabs__nav-prev {
  left: 5px;
  line-height: 64px;
}
/deep/ .el-tabs__nav-next {
  line-height: 64px !important;
}

//右侧按钮高度
.el-dropdown-menu {
  top: 40px !important;
}
//左侧菜单底部
.nav_left_bottom {
  overflow: hidden;
  height: 62px;
  border-top: 1px solid #f4efee;
  display: flex;
  align-items: center;
  // justify-content: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50px;
    margin-left: 40px;
  }
  p {
    font-size: 14px;
    margin-left: 10px;
    padding-right: 15px;
    border-right: 1px solid #d9d3d2;
  }
  .nav_right {
    margin-left: 20px;
    cursor: pointer;
  }
}
//弹出框
</style>
