<template>
  <div>
    <el-container>
      <el-header>
        <div class="left">
          <img
            src="http://likede2-admin.itheima.net/img/logo.3673fab5.png"
            alt=""
          />
        </div>
        <div class="right">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <span class="welcome">欢迎您,</span>
          <span class="username">{{uesrName}}</span>
          <el-tooltip content="退出登陆" placement="bottom">
            <span class="logout" @click="logout">退出<i class="el-icon-caret-bottom"></i></span>
          </el-tooltip>
        </div>
      </el-header>
      <el-container>
        <el-aside width="167px">
          <el-menu
            default-active="/home"
            active-text-color="#5373e0"
            class="el-menu-vertical-demo"
            :router="true"
          >
            <!-- 1标签 -->
            <el-menu-item index="/home" >
              <i class="iconfont icon-home"></i>
              <span slot="title" >帝可得</span>
            </el-menu-item>
            <!-- 2标签 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="iconfont icon-task"></i>
                <span>工单管理</span>
              </template>
              <el-menu-item index="2-1">运营工单</el-menu-item>
              <el-menu-item index="2-2">运维工单</el-menu-item>
            </el-submenu>
            <!-- 3标签 -->
            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont icon-gps"></i>
                <span>点位管理</span>
              </template>
              <el-menu-item index="3-1">区域管理</el-menu-item>
              <el-menu-item index="3-2">点位管理</el-menu-item>
              <el-menu-item index="3-3">合作商管理</el-menu-item>
            </el-submenu>
            <!-- 4标签 -->
            <el-submenu index="4">
              <template slot="title">
                <i class="iconfont icon-vm"></i>
                <span>设备管理</span>
              </template>
              <el-menu-item index="4-1">设备管理</el-menu-item>
              <el-menu-item index="4-2">设备状态</el-menu-item>
              <el-menu-item index="4-3">设备类型管理</el-menu-item>
            </el-submenu>
            <!-- 5标签 -->
            <el-submenu index="5">
              <template slot="title">
                <i class="iconfont icon-user"></i>
                <span>人员管理</span>
              </template>
              <el-menu-item index="5-1">人员列表</el-menu-item>
              <el-menu-item index="5-2">人效统计</el-menu-item>
              <el-menu-item index="5-3">工作量列表</el-menu-item>
            </el-submenu>
            <!-- 6标签 -->
            <el-submenu index="6">
              <template slot="title">
                <i class="iconfont icon-sku"></i>
                <span>商品类型</span>
              </template>
              <el-menu-item index="6-1">商品类型</el-menu-item>
              <el-menu-item index="6-2">商品管理</el-menu-item>
            </el-submenu>
            <!-- 7标签 -->
            <el-menu-item index="7">
              <i class="iconfont icon-policy"></i>
              <span slot="title">策略管理</span>
            </el-menu-item>
            <!-- 8标签 -->
            <el-menu-item index="8">
              <i class="iconfont icon-order"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
            <!-- 9标签 -->
            <el-menu-item index="9">
              <i class="iconfont icon-report"></i>
              <span slot="title">对账统计</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { userInfo } from '@/api/loginCode'
export default {
  data () {
    return {
      uesrName: ''
    }
  },
  async created () {
    const res = await userInfo(this.$store.getters.userId)
    this.uesrName = res.data.userName
  },
  methods: {
    logout () {
      this.$store.commit('user/logout')
    }
  }

}

</script>

<style lang="scss" scoped>

.el-header {
  .logout{
    cursor: pointer;
  }
  z-index: 1000;
  top: 0px;
  position: fixed;
  width: 100vw;
  min-width: 1200px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC");
}

.el-aside {
  overflow-x: hidden;
  z-index: 1000;
  position: fixed;
  top: 60px;
  background-color: #fff;
  color: #333;
  height: calc(100vh - 60px);
}
.el-main {
  background-color: rgb(248, 250, 253);
  // background-color: black; //背景色
  color: #333;
  position: absolute;
  top: 60px;
  text-align: center;
  width: calc(100vw - 167px);
  left: 167px;
  height: calc(100vh - 60px);
  min-width: 1200px;
  min-height: 800px;
  // overflow-x: hidden;
  // overflow-y: hidden;
}
::v-deep .el-submenu__title {
  padding-left: 15px !important;
}
.el-menu-item {
  // color: rgb(175, 175, 175);
  padding-left: 15px !important;
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
.iconfont {
  color: rgb(42, 42, 42);
  font-size: 16px;
  margin-right: 10px;
  margin-top: -10px;
}
.icon-dingdan {
  font-size: 20px;
  margin-right: 10px;
  margin-top: -10px;
}
.el-menu--inline {
  .el-menu-item {
    color: rgb(175, 175, 175);
    padding: 0px 45px 0 40px !important;
    min-width: 167px !important;
  }
}
.left {
  float: left;
  margin-left: -5px;
  margin-top: 12px;
  > img {
    width: 88px;
  }
}
.right {
  float: right;
  color: rgb(248, 249, 253);
  margin-right: 10px;
  > .welcome {
    margin-right: 10px;
    font-weight: 350;
  }
  > .username {
    margin-right: 30px;
    font-weight: 400;
  }
  > img {
    margin-right: 15px;
    vertical-align: middle;
  }
  line-height: 60px;
}
</style>
