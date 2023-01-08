<template>
  <div class="login_body">
    <div class="box-card">
      <div>
        <div class="left">
          <div class="left_top">
            <div class="img_logo">
              <img
                src="http://www-wms-java.itheima.net/img/title.ef005a7a.png"
              />
            </div>
          </div>
          <div class="left_bottom">
            <div class="bottom_form">
              <el-form ref="form" :model="form"    :rules="formRules" label-width="10px">
                <el-form-item prop='username'>
                  <el-input v-model="form.username">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAChUlEQVRoQ+2azWsTQRjGn3cK8SDSs0dBTwURW0960IuabmMPmYngQfED1Po3KIv+DVYLfmAPgpnJoaabqBc96MlWROhJwaPnIh4MdF7Z4MpWUjKzmtism9NCnmfy/naenQzzLiEnH8oJB7xAImOqxHyVgSkA4wO+CesErDDRnUDKRr/fcgIJw1Acmph4COBsvwEH9P3i27W182EY2q3GdwJpaX2dgZsDKtJpWAJuTCt1KzPI66WlXeudzhcAO1ODvCfgo1MFGUUM7ANwIGX/Nl4q7T4yO/u115B9ZyTSegZA85eZ6H4g5aWM9XnZImPugfliylQJlFrOCnIZwN3ETMCJaaVeeFWUUdzS+jgDz1P2K4FSC5lA2lrPWeB2YrbAsYpSrzLW5mVran1UAC8TkwCulZWaHyhI1GicAXOZmHf4VMtE30HUDqrVx7/7hg7ytF7fM0b0CYDwgUhp7Qbz3lO12ue0f+ggzxqNgxvWrmaE6NrGhJg8Wa2++6cgzCzaxhgLBASUfIAY6AggKkspiWjTH97QZ8SncB9tAdLrbv13y69PZFy1RbSKaLlmxVNXRKuIlmdkXOVFtIpouWbFU1dEq4iWZ2Rc5UW0imi5ZsVTV0RrENH62YqITyvBRAsuLYKkjm0zI8v1eiCEaDJz94yZiNhaW5mp1SKXlG0bkMiYJ2CubSqaqB5IeXq0QLR+1KM5tBgodW60QIyZYuY3yaFdfBhHRIcDKVdGCiQutm3MfmvthfhaCPGgLOUHF4hYs22eEdeCt9L9VZBI63w0enLTestNMzTOby7a092tRRiKVh5eGEhWlXjfBOY5AJPDeIUDwCqI5l32Z3377H+6hA7LnxuQH7ufU0+RgUW0AAAAAElFTkSuQmCC"
                      alt=""
                      slot="prepend"
                      class="input_logo"
                    />
                  </el-input>
                </el-form-item>
                <el-form-item prop='password'>
                  <el-input :show-password="true" v-model="form.password">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFJUlEQVRoQ+1ZW2wUZRT+zr/bhXKJAfTBxggEExshMWrEyIutEenultZ1Z8aAQhBjFBP1CfQF3eCDUV70wUuieEEQMjNboLS75ZLAG0bx8tAQSCT1CtGAlyi0XbrzmdnubpZ2u7szXWhMOk+b2fN953zn/PPPmfML/ueXXIv4D+7de2egoaGZZJOQiiLnBDgd0bRv6+2vbgJ6du+eJ6HQZoisBbmwbKAiPwv5uSLfbDOMP+ohpi4CUra9EeR2AvNrCYrAX0pkS0TTPqjFvpLNpAQkEgm1fOnStwg8X8YJAfyZvz8PwDhfSuSdtv7+FySRcPwKmZSAXtt+HeTLVzkXOUryvdnk4VbD+Nf975hpzrkk8rCQmyDy0FX25PaoYWy57gJStv0IgC6So0kQ+QfAk1FNS1YKJm1ZjzrAJwDmjsKEBPRquIk4fVXANM3QHKVOkVySJx4MBIMtbbHYl7Vkss80l4+IHBeg0bUnMHCZbDYMI1MLvtTGlwD3oSW5o0gksimqae97cZ62rGccoBTzdFTXP/TCkaugV4Brn7LtXpKRPPbMJXKpYRhZL1ymaQZmi/QDaM7j+qK6HvbC4UvAyZMnG34bGHDX+4xc+clX2w1jm1fHuURY1lYCo1iRYZk164ZIJDLshctzBXqTyYVwnB8KTqjUg+3x+DEvTgu2actqcYAiVgWDi8OxWJG7Fk7vAmz7PpBfFMhVKNQc7uw8U4uzsTZp07zdETld5CJXhA3jhBcuzwJSpvkARY4XnfrIWgE7tpoKaA3repG7FiHTAvys2+kKlKytqkvo0M6ds7ONjXGKtIJsAnATgLsKHAKcoMhQLet1rI2QMwncX3L/OwC/w/1+II8FBgeTq9avv1SJu6KAdDLZ4TiO+7a82U+AdcCcV0o9G47HuyfimlBAbzK5Do7jNl2qDoFMhsKBUhui8fhn5UjKCkjt27cEIyP9BGaWgE4L8DVFrkwmmmpYIRsI3FPSYrj9zhCCwWWRWOzsuGVYjrDHsnYIsLFknb8U1rTtbutbLYB6/O+26Gnb3kzgjQIfgY/adf2pmgSkbPsCyQV5YzOq64/VIzCvHL22vRdkzreIXIxo2o1VBfSZ5vysyMVi9kViEU3b79V5Pez7LKszCxR9B8gFY4cB456Berze6xG8y3HQslpUSbMHpRZF4/EfS/mnBVTK9tGurgWDQ0Oyeu3aC36qMqUV6LWsdojY7o4iQDyq6z1eRUytgJIdBICvnWxKBaQsq4tALL8F7o9oWu63l2tagJstP19JLm66AlP9HpiuwFRXoNe2Pwa5IbcLAZ9GdD3328s1tbuQad4BpXaRhJBPRAzjlJfgp3uhQrb8bqNes13O3tcSOtLdfWtmeLjYsk5m9jlZEWNnp6EZMxau7Oj4qWI77R4HXR49bcldSmRdWNN2TTYYP/iUZT1OoOh7Fjm3cGxV4Cv/UW/b3xdOX0Tkq8b+/hWticSInyD8YtzzgzlKnSB5b45D5GxU024by1dWQI9lbRNga4nK7iz53GrD+NVvQF5whw8caLqSybwLoLOAI/Bau66/UpOAI6Z5Q2b09OSWEkBWRM6TvKZjFYg0gHQHaYES37+EyGUrDePvmgS4Rn3J5N1ZxzkEYNwkwEs262B7IaDUqrZ4/JtyXBVHi92muTio1NsA2ovHqXWIqBaK/AyqZ8RxXuwwjIGJMFWHuy4wvWfPIoRCLXScJgINtQTg10aAK6LUOWQyx8Nr1lQ9bqpJgN9grgfuP6opx08h4HqQAAAAAElFTkSuQmCC"
                      alt=""
                      slot="prepend"
                      class="input_logo"
                    />
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="记住密码" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submit">提交</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="login_bg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456',
        type: false
      },
      formRules: {
        username: [{ required: true, message: '请输入用户名', trigge: blur }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  methods: {
    async  submit () {
      await this.$refs.form.validate()
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style lang="less" scoped>
// .el-input {
//   /deep/ .el-form-item_·_content {
//     margin: 0px;
//   }
// }
.box-card {
  width: 958px;
  height: 516px;
  border-radius: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.right {
  float: right;
  width: 560px;
  height: 516px;
  .login_bg {
    width: 100%;
    height: 100%;
    background: url("http://www-wms-java.itheima.net/img/contentBg.1321d126.png")
      no-repeat;
    background-size: cover;
    background-position-y: -1px;
  }
}
.left {
  float: left;
  width: 398px;
  height: 516px;
  .left_top {
    height: 67px;
    width: 276px;
    .img_logo {
      width: 150px;
      height: 64px;
      margin-top: 72px;
      margin-left: 124px;
      img {
        width: 150px;
        height: 64px;
      }
    }
  }
  .left_bottom {
    padding: 55px;
    .el-input {
      /deep/ .el-input__inner {
        height: 50px;
        line-height: 50px;
        background-color: #f7f5f5;
        border: none;
        border-radius: 0px 10px 10px 0px;
        &:hover {
          border: 1px solid #867e7e;
        }
        &:focus {
          border: 1px solid #f5b33f;
        }
      }
      /deep/ .el-input-group__prepend {
        padding: 0px;
        background-color: #e9e7e7;
        border: 0px;
        width: 50px;
        vertical-align: middle;
        text-align: center;
        line-height: 10px;
        border-radius: 10px 0px 0px 10px;
        .input_logo {
          height: 25px;
        }
      }
    }
  }
}
.el-form-item:nth-child(1) {
  margin-bottom: 40px;
}
.el-form-item:nth-child(2) {
  margin-bottom: 10px;
}
/deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #f5b33f;
}
/deep/ .el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #f5b33f;
}
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #f5b33f;
  border-color: #f5b33f;
}
/deep/ .el-checkbox__input .el-checkbox__inner:hover {
  border-color: #f5b33f;
}
/deep/ .el-form-item__content {
  margin-left: 0px !important;
}
/deep/ .el-form-item__content {
  .el-button.el-button--primary {
    padding: 12px 129px;
    background-color:#F5B33F;
    box-shadow: 0px 0px 10px rgba(245,179,63 ,0.9);
    border: 0px;
    color: black;
  }
}
</style>
