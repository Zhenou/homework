<template>
  <div class="score-case">
    <a class="xxx" href="https://zhenou.github.io/hwork/10.29/tudolist/index"
      >点击这里跳转到todolist作业</a
    >
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
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.subject }}</td>
            <td :style="{ color: item.score < 60 ? 'red' : '' }">
              {{ item.score }}
            </td>
            <td>{{ time(item.date) }}</td>
            <td><a href="#" @click.prevent="delFn(item.id)">删除</a></td>
          </tr>
        </tbody>
        <tbody v-show="list.length === 0">
          <tr>
            <td colspan="5">
              <span class="none">暂无数据</span>
            </td>
          </tr>
        </tbody>
        <tfoot v-show="list.length !== 0">
          <tr>
            <td colspan="5">
              <span>总分：{{ total }}</span>
              <span style="margin-left: 50px"
                >平均分：{{ average ? average : 0 }}</span
              >
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="form" @keydown.enter="addFn">
      <div class="form-item">
        <div class="label">科目：</div>
        <div class="input">
          <input type="text" v-model.trim="subject" placeholder="请输入科目" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">分数：</div>
        <div class="input">
          <input type="text" v-model.number="score" placeholder="请输入分数" />
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="submit" @click="addFn">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "ScoreCase",
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [],
      subject: "",
      score: "",
    };
  },
  methods: {
    time(date) {
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    addFn() {
      if (this.score >= 0 && this.score <= 100 && this.subject && this.score) {
        this.list.push({
          id: this.list.length > 0 ? this.list.length + 1 : 1,
          subject: this.subject,
          score: this.score,
          date: new Date(),
        });
        this.subject = "";
        this.score = "";
      } else {
        alert("请输入正确");
      }
    },
    delFn(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newVal) {
        localStorage.setItem("list", JSON.stringify(newVal));
      },
    },
  },
  computed: {
    total() {
      return this.list.reduce((sum, item) => item.score + sum, 0);
    },
    average() {
      return this.total / this.list.length;
    },
  },
};
</script>

<style lang="less">
.xxx {
  position: absolute;
  top: 10px;
  left: 350px;
}
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
