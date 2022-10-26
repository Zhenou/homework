<template>
  <div class="score-case">
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>科目</th>
            <th>成绩</th>
            <th>考试时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-show="list.length > 0">
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.subject }}</td>
            <!-- <td :class="item.score > 60 ? '' : 'red'">{{ item.score }}</td> -->
            <td :class="{ red: item.score < 60 }">{{ item.score }}</td>
            <td>{{ formData(item.date) }}</td>
            <td><a href="#" @click.prevent="del(item.id)">删除</a></td>
          </tr>
        </tbody>
        <tbody v-show="list.length == 0">
          <tr>
            <td colspan="5">
              <span class="none">暂无数据</span>
            </td>
          </tr>
        </tbody>
        <tfoot v-show="list.length > 0">
          <tr>
            <td colspan="5">
              <span>总分：{{ sumScore }}</span>
              <span style="margin-left: 50px">平均分：{{ avgScore }}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="form" @keydown.enter="add">
      <div class="form-item">
        <div class="label">科目：</div>
        <div class="input">
          <input type="text" placeholder="请输入科目" v-model.trim="subject" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">分数：</div>
        <div class="input">
          <input type="text" placeholder="请输入分数" v-model.number="score" />
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="submit" @click="add">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入moment模块
import moment from "moment";
export default {
  name: "ScoreCase",
  data() {
    return {
      //打开页面拿本地数据
      list: JSON.parse(localStorage.getItem("score_case")) || [],
      subject: "",
      score: "",
    };
  },
  computed: {
    //总分
    sumScore() {
      return this.list.reduce((sum, item) => item.score + sum, 0);
    },
    //平均分
    avgScore() {
      return (this.sumScore / this.list.length).toFixed(2);
    },
  },
  methods: {
    formData(dt) {
      //差值表达式里调用事件格式化
      return moment(dt).format("YYYY-MM-DD HH:mm:ss");
    },
    //删除函数
    del(id) {
      // console.log(id);
      //点击删除某一项
      this.list = this.list.filter((item) => item.id !== id);
    },
    //添加函数
    add() {
      //判断输入的学科、分数不为空,且分数在0-100之间
      if (
        this.subject !== "" &&
        this.score !== "" &&
        this.score > 0 &&
        this.score <= 100
      ) {
        this.list.push({
          id: this.list.length ? this.list.at(-1).id + 1 : 1,
          subject: this.subject,
          score: this.score,
          date: new Date(),
        });
        //重置input框
        this.subject = "";
        this.score = "";
      } else {
        alert("请输入正确数据");
      }
    },
  },
  //监听数据变化
  watch: {
    list: {
      //被监听的数据
      deep: true, //深度监听true为打开,false为关闭
      handler() {
        //数据发生变化就存入本地
        localStorage.setItem("score_case", JSON.stringify(this.list));
      },
    },
  },
};
</script>

<style lang="less">
.score-case {
  width: 1000px;
  margin: 50px auto;
  display: flex;
  .table {
    flex: 4;
    table {
      width: 100%;
      border-spacing: 0;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      th {
        background: #f5f5f5;
      }
      tr:hover td {
        background: #f5f5f5;
      }
      td,
      th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        text-align: center;
        padding: 10px;
        &.red {
          color: red;
        }
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
  .form {
    flex: 1;
    padding: 20px;
    .form-item {
      display: flex;
      margin-bottom: 20px;
      align-items: center;
    }
    .form-item .label {
      width: 60px;
      text-align: right;
      font-size: 14px;
    }
    .form-item .input {
      flex: 1;
    }
    .form-item input,
    .form-item select {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 200px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
    }
    .form-item input::placeholder {
      color: #666;
    }
    .form-item .cancel,
    .form-item .submit {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 10px;
      margin-right: 10px;
      font-size: 12px;
      background: #ccc;
    }
    .form-item .submit {
      border-color: #069;
      background: #069;
      color: #fff;
    }
  }
}
</style>
