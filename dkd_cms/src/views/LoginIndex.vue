<template>
  <div class="bgc">
    <el-card
      class="box-card"
      shadow="always"
      @keydown.enter.native="keydown"
    >
      <!-- 表单 -->
      <div>
        <img
          src="http://likede2-admin.itheima.net/img/logo.595745bd.png"
          alt=""
          class="img_avatar"
        />
      </div>
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        class="demo-ruleForm"
      >
        <el-form-item
          :rules="[
            { required: true, message: '年龄不能为空' },
            { type: 'number', message: '年龄必须为数字值' },
          ]"
        >
          <el-input
            v-model="numberValidateForm.loginName"
            autocomplete="off"
            prefix-icon="el-icon-mobile-phone"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item
          :rules="[
            { required: true, message: '年龄不能为空' },
            {  message: '年龄必须为数字值' },
          ]"
        >
          <el-input
            :type="eye ? 'text' : 'password'"
            v-model="numberValidateForm.password"
            autocomplete="off"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          >
            <template #suffix>
              <i
                @click="click"
                :class="
                  eye
                    ? 'icon_eye iconfont icon-eye1'
                    : 'icon_eye iconfont icon-eye'
                "
              ></i></template
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="17">
              <el-input
                v-model="numberValidateForm.code"
                autocomplete="off"
                prefix-icon="el-icon-cpu"
                placeholder="请输入验证码"

              ></el-input>
            </el-col>
            <el-col :span="7">
              <img :src="src" class="code_img" alt="" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login_button"
            @click="submitForm('numberValidateForm')"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
      <!-- 表单 -->
    </el-card>
    <div></div>
  </div>
</template>

<script>
import { getLoginCode } from '@/api/loginCode'
export default {
  data () {
    return {
      numberValidateForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        mobile: '',
        loginType: '0',
        account: ''
      },
      eye: false,
      src: ''
    }
  },
  methods: {
    async submitForm (formName) {
      try {
        await this.$refs.numberValidateForm.validate()
        await this.$store.dispatch('user/getLogin', this.numberValidateForm)
      } catch (err) {
        console.log(err)
      }
      // console.log(this.numberValidateForm)
      // const res = await login(this.numberValidateForm)
      // console.log(res)
      // if (res.data.msg === '登录成功') {
      //   this.$message.success('登录成功')
      //   this.$router.push('/home')
      // } else {
      //   this.$message.warning(res.data.msg)
      // }
    },
    click () {
      this.eye = !this.eye // 眼睛取反
    },
    async getLoginCode () {
      // 验证吗函数
      const res = await getLoginCode(this.randomString()) // 发送图片请求
      // console.log(res)
      const src = URL.createObjectURL(res.data) // 创建图片链接
      // console.log(src)
      this.src = src
    },
    randomString () {
      // 随机生成32字符串
      const len = 32
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefhijkmnprstwxyz1234567890'
      const maxPos = chars.length
      let code = ''
      for (let i = 0; i < len; i++) {
        code += chars.charAt(parseInt(Math.random() * maxPos))
      }
      this.numberValidateForm.clientToken = code
      // console.log(code)
      // console.log(this.numberValidateForm.clientToken)
      return code
    },
    keydown () {
      this.submitForm()
      // 还没调用登陆
    }
  },
  created () {
    // console.log(code)
    // this.randomString()
    this.getLoginCode()
  }
}
</script>

<style lang="scss" scoped>
.bgc {
  background: url("http://likede2-admin.itheima.net/img/background.be4fae7d.png");
  height: 100vh;
  background-size: cover;
  min-width: 1200px;
  min-height: 800px;
  position: relative;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card.el-card.is-always-shadow {
  width: 518px;
  height: 388px;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 15px;
  overflow: inherit;
  .img_avatar {
    width: 96px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
  .el-form.demo-ruleForm {
    margin-top: 60px;
    width: 460px;
    ::v-deep .el-form-item.is-required {
      margin-bottom: 25px;
    }
    :nth-child(2) {
      .icon_eye {
        // color: red;
        margin-right: 5px;
        line-height: 50px;
        cursor: pointer;
      }
    }
    :nth-child(3) {
      //第三个input验证码
      // width: 470px;
      ::v-deep .el-form-item__content {
        line-height: 0px !important;
      }
      .code_img {
        //第三个input验证码后面的图片
        width: 135px;
        height: 50px;
      }
    }
    .login_button {
      width: 460px;
      height: 50px;
      margin-top: -10px;
    }
    ::v-deep input.el-input__inner {
      height: 50px;
    }
  }
}
</style>
