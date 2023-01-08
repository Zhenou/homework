<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="19">
        <el-row>
          <el-card class="box-card card-one">
            <CardOne></CardOne>
          </el-card>
        </el-row>

        <el-row>
          <el-card class="box-card card-two">
           <TwoCard :infoList="infoList"></TwoCard>
          </el-card>
        </el-row>
      </el-col>

      <el-col :span="5">
        <el-card class="box-card card-three">
          <ThreeCard></ThreeCard>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="30">
      <el-col :span="24">
        <el-card class="box-card card-four">
          <FourCard></FourCard>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="30">
      <el-col :span="24">
        <el-card class="box-card card-five">
          <FiveCard></FiveCard>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="30">
      <el-col :span="8">
        <el-card class="box-card card-six">
          <div class="grid-content bg-purple">6</div>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-card class="box-card card-seven">
          <div class="grid-content bg-purple">7</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CardOne from '@/views/Dashboard/components/OneCard.vue'
import ThreeCard from '@/views/Dashboard/components/ThreeCard.vue'
import TwoCard from '@/views/Dashboard/components/TwoCard.vue'
import FourCard from '@/views/Dashboard/components/FourCard.vue'
import FiveCard from '@/views/Dashboard/components/FiveCard.vue'
import { todo } from '@/api/dashboard'
export default {
  components: {
    CardOne,
    TwoCard,
    ThreeCard,
    FourCard,
    FiveCard
  },
  data () {
    return {
      infoList: []
    }
  },
  created () {
    this.getTodo()
  },
  methods: {
    async getTodo () {
      const res = await todo()
      this.infoList = res.data.data
    }
  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  height: 100%;
  background: #d3dce6;
}

.grid-content {
  height: 100%;
  border-radius: 4px;
  min-height: 36px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  border-radius: 15px;
}
.card-one {
  padding: 0px;
  height: 146px;
  width: 100%;
  background: linear-gradient(to right, #f1ac54, #f7c87e);
  /deep/ .el-card__body {
    padding: 0px;
  }
}
.card-two {
  height: 282px;
  width: 100%;
}
.card-three {
  height: 450px;
  width: 100%;
}
.card-four {
  width: 100%;
  height: 178px;
}
.card-five {
  width: 100%;
  height: 500px;
}
</style>
