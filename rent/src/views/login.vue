<template>
  <div>
    <van-nav-bar title="账号登陆" left-arrow @click-left="$router.go(-1)"/>
    <van-form @submit="onSubmit" >
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button block size="large" type="primary" native-type="submit">
          登 &nbsp;陆
        </van-button>
      </div>
      <a href="" class="register">还没有账号,去注册~</a>
    </van-form>
  </div>
</template>

<script >
import { login } from '@/api/login'
import { setStorage } from '@/utils/storage'
// import request from '@/utils/request'
export default {
  methods: {
    async onSubmit (values) {
      // console.log(values)
      const res = await login(values)
      // 设置路由跳转
      this.$router.push('/home/my')
      console.log(res)
      // 获取token并存入本地
      setStorage(res.data.body.token)
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style lang="less">
.van-nav-bar {
  background-color: #1cb676;
  .van-icon-arrow-left {
    color: white !important;
  }
}
.van-button {
  background-color: #1cb676 !important;
  .van-button__text {
    color: white !important;
  }
}
.van-form {
  text-align: center;
  .van-cell {
    font-size: 16px;
    margin-top: 30px;
  }
  .van-field__control{
    margin-left: -12px;
    margin-bottom: 8px;
  }
  a {
    margin-top: 30px;
    display: block;
    font-size: 14px;
    color: rgb(91, 91, 91);
  }
}
.van-cell::after{
  width: 100%;
  margin-left: -10px;
}
.van-nav-bar__title {
    color: white !important;
  }
</style>
