<template>
  <div>
    <img
      src="http://liufusong.top:8080/img/profile/bg.png"
      alt=""
      class="img"
    />
    <div class="info">
      <van-image
        round
        width="60"
        height="60"
        :src="'http://liufusong.top:8080'+uimg"
      />
      <span class="uname">{{uname}}</span>
      <div class="buttom" @click="escFn">{{flag? '退出':'去登陆'}}</div>
      <br />
      <span class="edit_info">{{flag? '编辑个人资料':''}}</span>
    </div>
    <van-grid :column-num="3" clickable>
      <van-grid-item icon="star-o" text="我的收藏"  to="/favorate"/>
      <van-grid-item icon="wap-home-o" text="我的出租" to="/rent" />
      <van-grid-item icon="clock-o" text="看房记录"   />
      <van-grid-item icon="idcard" text="成为房主" />
      <van-grid-item icon="user-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <img
      src="http://liufusong.top:8080/img/profile/join.png"
      alt=""
      class="bottom_img"
    />
  </div>
</template>

<script>
import { getInfo } from '@/api/login'
import { getStorage, delStorage } from '@/utils/storage'
export default {
  data () {
    return {
      uname: '',
      uimg: '',
      flag: ''
    }
  },
  methods: {
    escFn () {
      // 如果按钮为真
      if (this.flag) {
        // 创建弹窗
        this.$dialog
          .confirm({
            title: '提示',
            message: '是否确定退出?'
          // cancelButtonColor: '#fff'
          })
          .then(() => {
            delStorage()
            this.$router.go(0)
            delStorage()
          })
      } else {
        // 否则跳转登陆
        this.$router.push('/login')
      }
    }
  },
  async  created () {
    const token = getStorage()
    // 如果有token发送请求
    if (token) {
      const res = await getInfo(token)
      // console.log(res)
      this.uname = res.data.body.nickname
      this.uimg = res.data.body.avatar
      if (this.uname) {
        this.flag = true
      }
    } else {
      // 否则设为默认
      // console.log('1')
      this.uname = '游客'
      this.uimg = '/img/profile/avatar.png'
    }
  }
}
</script>

<style lang="less">
.img {
  width: 100%;
}
.info {
  width: 320px;
  height: 210px;
  background-color: white;
  position: absolute;
  top: 19%;
  left: 8%;
  box-shadow: 0px 0px 8px 2px rgba(165, 165, 165, 0.5);
  text-align: center;
  .van-image {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -13%;
    border: 5px solid white;
  }
  .uname {
    font-size: 14px;
    display: block;
    margin-top: 50px;
    color: rgb(63, 63, 63);
  }
  .buttom {
    width: 50px;
    height: 20px;
    background-color: #1cb676;
    border-radius: 15px;
    display: inline-block;
    margin-top: 5px;
    font-size: 12px;
    color: white;
    line-height: 22px;
  }
  .edit_info {
    display: inline-block;
    font-size: 12px;
    color: rgb(142, 142, 142);
    margin-top: 25px;
  }
}
.van-grid {
  // opacity: 0.5;
  top: 190px;
}
.bottom_img {
  margin: auto;
  width: 90%;
  display: block;
  margin-top: 200px;
}
.van-button {
  .van-button__text {
    color: black;
    .confirmButtonColor {
      color: red;
    }
  }

}
</style>
