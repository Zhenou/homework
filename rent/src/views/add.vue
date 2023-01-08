<template>
  <div>
    <van-nav-bar
      title="房租管理"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-cell-group>
      <van-cell class="house_info" title="房源信息" />
    </van-cell-group>
    <van-form validate-trigger="onBlur">
      <van-cell
        title="小区名称"
        is-link
        value="请输入小区名称"
        @click="$router.push('/rent/search')"
      />
      <van-field
        v-model="houseMoney"
        name="密码"
        label="租ㅤ ㅤ金"
        placeholder="请输入租金/月"
      />
      <span class="houseMoney">¥/月</span>
      <van-field
        v-model="houseRoom"
        name="密码"
        label="建筑面积"
        placeholder="请输入建筑面积"
      />
      <span class="houseRoom">m²</span>
      <!-- 户型 -->
      <van-field
        readonly
        clickable
        label="户ㅤ ㅤ型"
        placeholder="请选择"
        :value="chooseRooms"
        @click="showAction[0].show = true"
        is-link
      />
      <!-- 动作面板 -->
      <van-action-sheet v-model="showAction[0].show">
        <van-picker
          show-toolbar
          :columns="colHouse"
          @confirm="onConfirm"
          @cancel="showAction[0].show = false"
          :default-index="2"
        />
      </van-action-sheet>
      <!-- 动作面板 -->
      <!-- 所在楼层 -->
      <van-field
        readonly
        clickable
        label="所在楼层"
        placeholder="请选择"
        :value="chooseFloor"
        @click="showAction[1].show = true"
        is-link
      />
      <!-- 动作面板 -->
      <van-action-sheet v-model="showAction[1].show">
        <van-picker
          show-toolbar
          @confirm="onConfirm"
          :columns="colFloor"
          @cancel="showAction[1].show = false"
          :default-index="2"
        />
      </van-action-sheet>
      <!-- 动作面板 -->
      <!-- 朝向 -->
      <!-- <van-cell
        title="朝ㅤ ㅤ向"
        is-link
        value="请选择"
        @click="showDire = true"
      /> -->
      <van-field
        readonly
        clickable
        label="朝ㅤ ㅤ向"
        placeholder="请选择"
        :value="chooseDire"
        @click="showAction[2].show = true"
        is-link
      />
      <!-- 动作面板 -->
      <van-action-sheet v-model="showAction[2].show">
        <van-picker
          show-toolbar
          @confirm="onConfirm"
          :columns="colDire"
          @cancel="showAction[2].show = false"
          :default-index="2"
        />
      </van-action-sheet>
      <!-- 动作面板 -->
      <van-cell title="房租标题" class="houseTittle" />
      <van-field
        v-model="houseTittle"
        name="密码"
        placeholder="请输入标题(例如: 整租 小区名 2室 5000元)"
        class="houseText"
      />
      <van-cell title="房租图像" class="houseImg" />
      <van-field name="uploader">
        <template #input>
          <van-uploader class="imgUpload" v-model="uploader" />
        </template>
      </van-field>
      <van-cell title="房租配置" class="houseImg" />
      <!-- 房租配置 -->
      <van-grid :border="false" :column-num="5">
        <van-grid-item
          :class="showAll[0].G0 ? 'colors' : ''"
          @click="clickFn(0)"
        >
          <i
            class="iconfont icon-yigui"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[0].G0 ? 'colors' : ''"
          ></i>
          <span class="iconText">衣柜</span>
        </van-grid-item>
        <van-grid-item
          :class="showAll[1].G1 ? 'colors' : ''"
          @click="clickFn(1)"
        >
          <i
            class="iconfont icon-xiyiji"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[1].G1 ? 'colors' : ''"
          ></i>
          <span class="iconText">洗衣机</span>
        </van-grid-item>
        <van-grid-item
          :class="showAll[2].G2? 'colors' : ''"
          @click="clickFn(2)"
        >
          <i
            class="iconfont icon-kongtiao"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[2].G2 ? 'colors' : ''"
          ></i>
          <span class="iconText">空调</span>
        </van-grid-item>
        <van-grid-item
          :class="showAll[3].G3 ? 'colors' : ''"
          @click="clickFn(3)"
        >
          <i
            class="iconfont icon-chuangdian"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[3].G3 ? 'colors' : ''"
          ></i>
          <span class="iconText">天然气</span>
        </van-grid-item>
        <van-grid-item
          :class="showAll[4].G4 ? 'colors' : ''"
          @click="clickFn(4)"
        >
          <i
            class="iconfont icon-bingxiang"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[4].G4 ? 'colors' : ''"
          ></i>
          <span class="iconText">冰箱</span>
        </van-grid-item>
        <van-grid-item
          :class="showAll[5].G5 ? 'colors' : ''"
          @click="clickFn(5)"
        >
          <i
            class="iconfont icon-chuanglian"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[5].G5 ? 'colors' : ''"
          ></i>
          <span class="iconText">暖气</span>
        </van-grid-item>
        <van-grid-item
          :class="showAll[6].G6 ? 'colors' : ''"
          @click="clickFn(6)"
        >
          <i
            class="iconfont icon-dianshiji"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[6].G6 ? 'colors' : ''"
          ></i>
          <span class="iconText">电视</span>
        </van-grid-item>
        <van-grid-item
          :class="showAll[7].G7 ? 'colors' : ''"
          @click="clickFn(7)"
        >
          <i
            class="iconfont icon-linyu"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[7].G7 ? 'colors' : ''"
          ></i>
          <span class="iconText">热水器</span>
        </van-grid-item>
        <van-grid-item
          :class="showAll[8].G8 ? 'colors' : ''"
          @click="clickFn(8)"
        >
          <i
            class="iconfont icon-fucai"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[8].G8 ? 'colors' : ''"
          ></i>
          <span class="iconText">宽带</span>
        </van-grid-item>
        <van-grid-item
          :class="showAll[9].G9 ? 'colors' : ''"
          @click="clickFn(9)"
        >
          <i
            class="iconfont icon-shafa"
            style="color: rgb(67, 67, 67); font-size: 24px"
            :class="showAll[9].G9 ? 'colors' : ''"
          ></i>
          <span class="iconText">沙发</span>
        </van-grid-item>
      </van-grid>
      <van-cell title="描述" class="houseImg" />
      <van-field
        v-model="houseText"
        placeholder="请输入标题(例如: 整租 小区名 2室 5000元)"
        class="houseInfoText"
      />
      <!-- 房租配置 -->
      <div class="bottomBar">
        <van-button type="primary" class="cancel" @click="cancel">取消</van-button>
        <van-button type="default" class="submit" @click="onSubmit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { postImg, addHouse } from '@/api/add'
export default {
  data () {
    return {
      uploader: [],
      showAction: [{ show: false }, { show: false }, { show: false }],
      colHouse: [
        {
          values: ['一室', '二室', '三室', '四室', '四室+'],
          defaultIndex: 0
        }
      ],
      colFloor: [
        {
          values: ['高楼层', '中楼层', '低楼层'],
          defaultIndex: 0
        }
      ],
      colDire: [
        {
          values: ['东', '西', '南', '北'],
          defaultIndex: 0
        }
      ],
      // 房屋颜色
      showAll: [
        { G0: false },
        { G1: false },
        { G2: false },
        { G3: false },
        { G4: false },
        { G5: false },
        { G6: false },
        { G7: false },
        { G8: false },
        { G9: false }
      ],
      houseMoney: '', // 租金
      houseRoom: '', // 建筑面积
      houseTittle: '', // 标题
      houseText: '', // 介绍
      chooseRooms: '', // 户型
      chooseFloor: '', // 楼层
      chooseDire: '' // 朝向
    }
  },
  methods: {
    cancel () {
      this.$router.back()
    },
    clickFn (num) {
      // 房屋颜色
      this.showAll[num]['G' + num] = !this.showAll[num]['G' + num]
    },
    async  onSubmit () {
      if (this.uploader.length < 1) {
        this.$toast('请上传房源图片')
        // return
      }
      const houseArr = []
      houseArr.push(
        this.houseTittle,
        this.houseText,
        this.uploader,
        this.chooseDire,
        this.houseMoney,
        this.chooseRooms,
        this.chooseFloor
      )
      houseArr.forEach((item, index) => {
        if (!item) {
          this.$toast('请填写完整信息')
        }
      })
      const requestArr = []
      for (let i = 0; i < this.uploader.length; i++) {
        const res = await this.PostImg(this.uploader[i].file)
        requestArr.push(res.data.body)
      }
      const data = {
        title: this.houseTittle,
        description: this.houseText,
        houseImg: requestArr.join('|'),
        oriented: 'ORIEN|caa6f80b-b764-c2df',
        price: this.houseMoney,
        roomType: 'ROOM|2731c38c-5b19-ff7f',
        supporting: '空调|洗衣机',
        size: this.houseRoom,
        floor: 'FLOOR|1',
        community: 'AREA|93cbbe43-741d-de54'
      }
      const res = await addHouse(data)
      console.log(res)
      if (res.data.status === 200) {
        await this.$toast('发布成功')
        this.$router.push('/rent')
      }
    },
    PostImg (img) {
      const data = new FormData()
      data.append('file', img)
      const res = postImg(data)
      return res
    },

    onConfirm (values) {
      const value = values.join()
      if (this.colHouse[0].values.includes(value)) {
        this.chooseRooms = value
        this.showAction[0].show = false
      } else if (this.colFloor[0].values.includes(value)) {
        this.chooseFloor = value
        this.showAction[1].show = false
      } else if (this.colDire[0].values.includes(value)) {
        this.chooseDire = value
        this.showAction[2].show = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.house_info {
  color: rgb(0, 176, 107);
  font-size: 16px;
}
.van-cell.van-field {
  margin: 0;
  // padding: 0;
}
.van-button.van-button--info.van-button--normal.van-button--block.van-button--round {
  background-color: black !important;
}
.van-cell.van-cell--clickable {
  margin-top: 0px;
  text-align: left;
}
.houseMoney {
  position: absolute;
  right: 16px;
  top: 147px;
  color: rgb(193, 194, 197);
  font-size: 16px;
}
/deep/ .van-cell__title.van-field__label {
  // color: red;
  line-height: 30px;
}
/deep/ .van-cell__value.van-field__value {
  // line-height: 30px;
  margin-bottom: -5px;
  margin-right: -10px;
}
.houseRoom {
  position: absolute;
  right: 16px;
  top: 200px;
  color: rgb(193, 194, 197);
  font-size: 16px;
}
.houseTittle {
  text-align: left;
  margin: 0px;
}
.houseText {
  padding-left: 28px;
}
.houseImg {
  text-align: left;
  margin: 0px;
}
.imgUpload {
  margin-left: 12px;
}
.iconText {
  margin-top: 5px;
  font-size: 14px;
}
.houseInfoText {
  padding-left: 28px;
  height: 150px;
}
.bottomBar {
  position: fixed;
  bottom: 0px;
}
/deep/ .cancel.van-button.van-button--primary.van-button--normal {
  background-color: #fff !important;
  border: 0px;
  width: 50vw;
  .van-button__text {
    color: rgb(0, 179, 111) !important;
  }
}
/deep/ .submit.van-button.van-button--default.van-button--normal {
  border: 0px;
  width: 50vw;
}
.colors {
  color: rgb(0, 176, 107) !important;
}
/deep/ .van-field__body {
  [type="houser"] {
    text-align: right;
  }
}
</style>
