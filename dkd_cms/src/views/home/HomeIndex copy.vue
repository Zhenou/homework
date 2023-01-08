<template>
  <div>
    <!-- 第一 -->
    <el-row :gutter="20">
      <el-col :span="10">
        <el-card class="box-card one-card-one" shadow="never">
          <div class="top-text-1">
            <span class="top-text-1-1">工单统计</span>
            <span class="top-text-1-2">2022.11.01~2022.11.19</span>
          </div>
          <div class="buttom-text-1">
            <div class="buttom-text-1-1">
              <span class="buttom-text-1-1-1">365</span>
              <span class="buttom-text-1-1-2">0</span>
              <span class="buttom-text-1-1-3">0</span>
              <span class="buttom-text-1-1-4">362</span>
            </div>
            <div class="buttom-text-1-2">
              <span>工单总数(个)</span>
              <span>完成工单（个）</span>
              <span>进行工单（个）</span>
              <span>取消工单（个）</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 第二 -->
      <el-col :span="8">
        <el-card class="box-card one-card-two" shadow="never">
          <div class="top-text-2">
            <span class="top-text-2-1">销售统计</span>
            <span class="top-text-2-2">2022.11.01~2022.11.19</span>
          </div>
          <div class="buttom-text-2">
            <div class="buttom-text-2-1">
              <span class="buttom-text-2-1-1">8729</span>
              <span class="buttom-text-2-1-2">5.97</span>
            </div>
            <div class="buttom-text-2-2">
              <span>订单量(个)</span>
              <span>销售额(万元)</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 第三 -->
      <el-col :span="6">
        <el-card class="box-card one-card-three" shadow="never">
          <div class="top-text-3">
            <span class="top-text-3-1">商品热榜</span>
            <span class="top-text-3-2">2022.11.01~2022.11.19</span>
          </div>
          <div class="buttom-text-3">
            <ul>
              <li>
                <span class="box-card-img">1</span>
                <span class="buttom-text-3-1">怡宝</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
              <li>
                <span class="box-card-img">2</span>
                <span class="buttom-text-3-1">康师傅冰红茶</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
              <li>
                <span class="box-card-img">3</span>
                <span class="buttom-text-3-1">茉莉花茶</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
              <li>
                <span class="box-card-img">4</span>
                <span class="buttom-text-3-1">100橙汁自然纯</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
              <li>
                <span class="box-card-img">5</span>
                <span class="buttom-text-3-1">统一阿萨姆奶茶</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
              <li>
                <span class="box-card-img">6</span>
                <span class="buttom-text-3-1">可口可乐</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
              <li>
                <span class="box-card-img">7</span>
                <span class="buttom-text-3-1">星巴克</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
              <li>
                <span class="box-card-img">8</span>
                <span class="buttom-text-3-1">青梅绿茶</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
              <li>
                <span class="box-card-img">9</span>
                <span class="buttom-text-3-1">A酷儿橙汁 1.5L</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
              <li>
                <span class="box-card-img">10</span>
                <span class="buttom-text-3-1">泡面1</span>
                <span class="buttom-text-3-2">937单</span>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card class="box-card two-card-one" shadow="never">
          <div>
            <div class="top-text-4-1-left">
              <span class="top-text-4-1-1">商品热榜</span>
              <span class="top-text-4-1-2">2022.11.01~2022.11.19</span>
            </div>
            <div class="top-text-4-1-right">
              <button>1111</button>
            </div>
          </div>
          <div class="top-text-4-2">
            <div class="top-text-4-2-1">
              <ChartOne class="charts1"></ChartOne>
            </div>
            <div class="top-text-4-2-2">2</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="25">
      <el-col :span="14">
        <el-card class="box-card three-card-one" shadow="never"> </el-card>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card three-card-two" shadow="never"> </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChartOne from '@/components/echarts/ChartOne.vue'
export default {
  components: {
    ChartOne
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 10px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.one-card-one {
  background-image: url(data:image/png;base64,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),
    url(http://likede2-admin.itheima.net/img/task.66b715b7.png);
  background-repeat: no-repeat;
  background-position: left top, right bottom;
  border: 0px;
  height: 126px;
  border-radius: 15px;
  padding: 20px;
  background-color: rgb(235, 243, 254);
  position: relative;
  .top-text-1 {
    .top-text-1-1 {
      position: absolute;
      top: 20px;
      left: 30px;
      font-weight: 500;
    }
    .top-text-1-2 {
      position: absolute;
      top: 23px;
      left: 100px;
      color: rgb(158, 159, 160);
      font-size: 12px;
      font-weight: 400;
    }
  }
  .buttom-text-1 {
    .buttom-text-1-1 {
      font-size: 40px;
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      margin-top: 10px;
      color: rgb(10, 35, 111);
      text-shadow: 1px 1px 10px rgba(10, 35, 111, 0.5);
      .buttom-text-1-1-1 {
        left: 40px;
        top: 50px;
        font-weight: 600;
      }
      .buttom-text-1-1-2 {
        left: 120px;
        top: 50px;
        font-weight: 600;
      }
      .buttom-text-1-1-3 {
        left: 40px;
        top: 50px;
        font-weight: 600;
      }
      .buttom-text-1-1-4 {
        left: 40px;
        top: 50px;
        font-weight: 600;
      }
    }
    .buttom-text-1-2 {
      font-size: 12px;
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      color: rgb(156, 174, 219);
    }
  }
}
.one-card-two {
  border: 0px;
  height: 126px;
  border-radius: 15px;
  padding: 20px;
  background: url(http://likede2-admin.itheima.net/img/sale.606b0d8c.png)
    no-repeat right bottom;
  background-color: rgb(249, 239, 233);
  position: relative;
  .top-text-2 {
    .top-text-2-1 {
      position: absolute;
      top: 20px;
      left: 30px;
      font-weight: 500;
    }
    .top-text-2-2 {
      position: absolute;
      top: 23px;
      left: 100px;
      color: rgb(158, 159, 160);
      font-size: 12px;
      font-weight: 400;
    }
  }
  .buttom-text-2 {
    .buttom-text-2-1 {
      font-size: 40px;
      display: grid;
      grid-template-columns: 50% 50%;
      margin-top: 10px;
      color: rgb(237, 99, 94);
      text-shadow: 1px 1px 10px rgba(237, 99, 94, 0.5);
      .buttom-text-2-1-1 {
        left: 40px;
        top: 50px;
        font-weight: 600;
      }
      .buttom-text-2-1-2 {
        left: 120px;
        top: 50px;
        font-weight: 600;
      }
    }
    .buttom-text-2-2 {
      font-size: 12px;
      display: grid;
      grid-template-columns: 50% 50%;
      color: rgb(216, 160, 153);
    }
  }
}
.one-card-three {
  border: 0px;
  position: absolute;
  height: 501px;
  width: 21%;
  border-radius: 15px;
  padding: 20px;
  .top-text-3 {
    .top-text-3-1 {
      position: absolute;
      top: 20px;
      left: 30px;
      font-weight: 500;
    }
    .top-text-3-2 {
      position: absolute;
      top: 23px;
      left: 100px;
      color: rgb(158, 159, 160);
      font-size: 12px;
      font-weight: 400;
    }
  }
  .buttom-text-3 {
    > ul {
      list-style: none;
      font-size: 14px;
      > li {
        > .buttom-text-3-1 {
          text-align: left;
          margin-left: 20px;
        }
        display: grid;
        margin-left: -35px;
        margin-top: 28px;
        grid-template-columns: 10% 65% 25%;
        .box-card-img {
          font-size: 10px;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAo0lEQVQ4T2P8/f7FfwYKAOOoAQyjYcAwGgYMgz8MGBl+gHP6fwYOXDkeX1Le8JeRsRikkeX//97/DAwB2AzBZsBVBkbGAlYB8T3IGn5/eOnC8P//BAYGBm1kcSQD/r9nYmKuZ+ITnc7IyPgHm23///9n+f3hZRYjA2MDA8N/QZAaxj/vXzxiYGTc8u3b3zo+Kak3xJRu/z89E/n7j7np////VgAGUHY6vIpVhgAAAABJRU5ErkJggg==);
          width: 21px;
          height: 20px;
          display: inline-block;
        }
        .buttom-text-3-1 {
          // margin-left: -120px;
          font-weight: 500;
        }
        .buttom-text-3-2 {
          color: rgb(117, 119, 137);
        }
      }
      > li:nth-child(1) {
        .box-card-img {
          font-size: 10px;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAACMElEQVQ4T82UPWgUURDHf3OXQy/4VYqVgoWKhYioKIaAhmguicaAWIitZewSEBQFQQvBtFZimdIEFSFFVBI/clFQz4OYRgQt1YgnuX1vZPdud9/tbhLt3Oa9fbv7m//M/GeFxKWfT33D2I1YBWPBKNjmGuwT51a/y+GpTS5GUtBP/RqAfGAASOyjAPFz6XjSwhGd4D3Krgi+uy+tJgA7ilvUKiw+jbUJFdFxVPqIIulCb0NpqMhN3VXvnMvRZ/H3Pi8FnS9pXEu3fonaRgEs0jWdgE6wxC+Kcgbj56DVExrVcrlmJRRL90wA1VkKfOGnr7RKjrNS4k3woHI8hrZ0PmyM28BGJtLzvAG9z0Fy3PEbdQnhAD2cFEH1XXczfbLrmmEv6X0hOkaedh6hPBR9wBoskyhf8Rhm27GPqDiWCr0a2iusbXhuQGb3IFxHKbCOUkP2GEXaGQHOsfnQVqSYa/gzafxwCJwS2Jol/3Ye5S5buCX7qKfN/7rrNnUztKrxw+lSRmXg1cWVJ2q6czt5qWC0kGmtUH1j2uqI7pSB8sKK0KAcM53DePZGrNYdVSd1dEROl28mRz2VfviCTnVcwdjLGM3F0xUNg0XtNRmcu5oE+vfLQgPFk0f24tkhTO08tg3sEti2exgdlcHyXBZwVWikehwN9+5/4v+B6ssdP4D1GYoWZX91wz8p1cf9NTyzFuOBMeD5q9dcTXNvwHq/5UKl+Ffdj6BZMDdIAP2Qgv4B21H4JL7cBkgAAAAASUVORK5CYII=);
          width: 21px;
          height: 20px;
          display: inline-block;
        }
      }
      > li:nth-child(2) {
        .box-card-img {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAACF0lEQVQ4T8WTz4vTUBDHZzYUbcEf9NBzkhaKnsRCFEqhFHqJCXv1IP4L620XBEVB0IPgXj2Jx/4DevHSW6EULw2WdpOWliKUFn+BNu+9jrxAS0zTbvZk4JE3TN7nfb+TGYTIs1gsvgkhrgkhQK7VahW898TfS6XS9TAGo9DZbEZJgOHLDMP4h4Oe53WJ6OYanslkNuoSqAwc5HK5jTZEdNB1XdJ1fXPTdDoNlIaBUXg0Xy6XN+clbws6mUwS2Q+DK5XKFtTXNC2NiEJ6GI1GsdB9aqvVagBtt9upbDb7Syr9goj3NU37LBOe5+1UuqsstVotgHqed5eI3uJwOHxMRHdUVT1ERBoMBheuab1ex0ajoRiG8VEI8QH7/f4lRVE+AcBXIcQxEQ12tVScUlmWQqFwCwBeAEBK07R7gezxeJzmnJ8AwAPGmMoYOwg3fBgWra2iKKt8Pt8HgHeqqr5GRLbV/I7jvOGcHyWcJiCiU9M0H+2dqG63W2CMOUKIVBw4opoh4g3TNM/2QmWy0+kcc85fnjdRAHBiWdar6Khv2V9/0Gq1nnLOnwghDmJ6dEVEz23bfhYFyngnVCabzeZtIjoCgIe+7wMigu/774UQp7Ztd+KA50LXh3q9Hq33xWJxr5D/A3Vd9wcAXImx+VPX9asXsj+fz3/7vn9Z1pExJuu4WeGYMfbHsqx0or8vocvlMhHUtu0t6F9KkMngoAlOWAAAAABJRU5ErkJggg==);
          width: 21px;
          height: 20px;
          display: inline-block;
        }
      }
      > li:nth-child(3) {
        .box-card-img {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAACd0lEQVQ4T82VMWgUQRSGv3fLabQWi4AI6VIKIiEWIgSDJiSoIFhZBEzAgCgpLAQPTLAWo5yRbSwURBHDRTSmECSKcgiGaMBOLIJ2FpqcuzNPZnb33MvGRDuvuZ2Ze9/8773/7QlrPvpicBKj24gtGAUTgwFik65J9mJ3ZsHqigzNj+YxUoA+Hwg9UNMg9xwpqIMCUQpUd6n1cDn9aqgFqjNcRmlvbrb1J4pcUOSVJMFuL05VG3dBAvTfu17nmcuiNULpp3mTPusLk4As/QyYKmsCXRmSksjom9/xjleAPjmcpO/ruQnQZRGDnC1Cp6gzIhWsy0FrveG6QA9w5TAQpSpdhLHIubpXqvcI2M4Np3SCMlXp5bM/eHQoxOaUuro61Tatp2ta/txBx94m0BodwCnRGfqBDvq4Jq7nD3tC3wAfmGtGsxSpC/zaePVy4d2QViixl/NYFkRvUqadMYRv/OQ+9uAVTKnViy21zWqdAL3VOhcrBByjRMB3rnqfap0yy/QhdPGjawfxVmnaxVsrrWezeS6D1FZbGkrnxy8o86zwVE5giua/c+AksfYknc913w2D9202DJlnZU4uLdzdeKJud+9ES+MYG3i1DpSfrha1zgrBRaksfN0Q6stxa/8RVI9n5i4OQ9rA2DyQ8aXHa0e9kH72A53qGqBhB7BWWofBl0RRnZbK++m1QLf+I9QrntyzmzjoQVe7aQiUYmgEL1k1czKx9Gk94KbQpuoaYfacf0/8P1Ctd15HaSsoUlZl39KZf1Kqs0er2KhMFKUmd0aP0rF0z86jbq2RDC+O/FX3dXawShyXk7+NHNDPerZ2YBPJ8IcC9BfAsOweLKuvfgAAAABJRU5ErkJggg==);
          width: 21px;
          height: 20px;
          display: inline-block;
        }
      }
    }
  }
}
.two-card-one {
  border: 0px;
  height: 312px;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  .top-text-4-1-left {
    .top-text-4-1-1 {
      position: absolute;
      top: 20px;
      left: 30px;
      font-weight: 500;
    }
    .top-text-4-1-2 {
      position: absolute;
      top: 23px;
      left: 100px;
      color: rgb(158, 159, 160);
      font-size: 12px;
      font-weight: 400;
    }
  }
  .top-text-4-1-right {
    position: absolute;
    top: 23px;
    right: 30px;
  }
  .top-text-4-2 {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 20px;
    // .top-text-4-2-1 {
    //   height: 238px;
    //   width: 350px;
    //   border: 1px solid red;
    //   padding: 15px;
    //   .charts1 { //图表1
    //     width: 100%;
    //     height: 100%;
    //   // }
    // }
    .top-text-4-2-2 {
      height: 238px;
      width: 350px;
      padding: 15px;
      border: 1px solid blue;
    }
  }
}
.three-card-one,
.three-card-two {
  border: 0px;
  height: 353px;
  border-radius: 15px;
  padding: 20px;
}
</style>
