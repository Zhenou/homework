<template>
  <el-card class="box-card one-card-three" shadow="never">
    <div class="top-text-3">
      <span class="top-text-3-1">商品热榜</span>
      <span class="top-text-3-2">{{timer.start+'~'+timer.end}}</span>
    </div>
    <div class="buttom-text-3">
      <ul>
        <li v-for="(item, index) in CardThree" :key="index + 1">
          <span class="box-card-img">{{ index + 1 }}</span>
          <span class="buttom-text-3-1">{{item.skuName}}</span>
          <span class="buttom-text-3-2">{{item.count}}</span>
        </li>
        <!-- <li>
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
        </li> -->
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['CardThree'],
  updated () {
    // console.log(this.CardThree)
  },
  computed: {
    timer () {
      const timer = {
        start: this.$store.getters.time.start.replace(/-/g, '.'),
        end: this.$store.getters.time.end.replace(/-/g, '.')
      }
      return timer
    }
  }
}
</script>

<style lang="scss" scoped>
.one-card-three {
  position: relative;
  height: 100%;
  // width: 305px;
  border-radius: 15px;
  // padding: 20px;
  border: 0px;
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
    }
  }
  .buttom-text-3 {
    // margin-top: 20px ;
    > ul {
      padding-top: 8px;
      list-style: none;
      font-size: 14px;
      > li {
        font-weight: 300;
        > .buttom-text-3-1 {
          text-align: left;
          margin-left: 20px;
        }
        display: grid;
        margin-left: -35px;
        margin-top: 26px;
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
          font-weight: 400;
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
</style>
