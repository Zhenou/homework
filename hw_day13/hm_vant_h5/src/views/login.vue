<template>
  <div class="register-page">
    <van-nav-bar title="面筋登陆" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /\w{5,}/, message: '用户名至少5个字符' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /\w{6,}/, message: '密码至少6个字符' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登陆</van-button>
        <router-link class="link"  to="/register">注册</router-link>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  component: {
    login
  },
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await login(values)
      if (res.code === 10000) {
        this.$toast('登陆成功')
        this.$router.push('/article')
      }
      if (res.status === 400) this.$toast(res.data.message)
    }
  }
}
</script>

<style lang="less" scoped>
.link {
 color: #069;
  font-size: 12px;

  float: right;
  margin-top: 10px;

}
</style>
