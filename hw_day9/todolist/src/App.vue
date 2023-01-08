<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader
      @allState="allState"
      :list="list"
      @addList="addList"
    ></TodoHeader>
    <TodoMain
      @swichState="swichState"
      @delete="delFn"
      :list="isFilter"
    ></TodoMain>
    <TodoFooter
      :list="list"
      @clearFn="clearFn"
      @typeChange="typeChange"
      :type="type"
    ></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import "./styles/base.css";
import "./styles/index.css";

import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem("todoList")) || [],
      type: "all",
    };
  },
  methods: {
    //切换状态函数,接受子组件的值
    swichState(id) {
      this.list.find((item) => item.id == id).isDone = !this.list.find(
        (item) => item.id == id
      ).isDone;
    },
    delFn(id) {
      return (this.list = this.list.filter((item) => item.id !== id));
    },
    allState(val) {
      this.list.forEach((item) => (item.isDone = val));
    },
    addList(str) {
      this.list.push({
        id: this.list.length ? this.list.at(-1).id + 1 : 100,
        name: str,
        isDone: false,
      });
    },
    clearFn() {
      this.list = this.list.filter((item) => !item.isDone);
    },
    typeChange(val) {
      this.type = val;
    },
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    isFilter() {
      if (this.type === "all") {
        return this.list;
      }
      if (this.type === "no") {
        return this.list.filter((item) => item.isDone == false);
      }
      if (this.type === "yes") {
        return this.list.filter((item) => item.isDone == true);
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newVal) {
        localStorage.setItem("todoList", JSON.stringify(newVal));
      },
    },
  },
};
</script>
