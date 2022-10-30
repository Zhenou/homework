<template>
  <header class="header">
    <h1
      onclick="location.href='https://zhenou.github.io/hwork/10.29/result/index'"
    >
      todos
    </h1>

    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="点击上面的todos跳转到另一个作业"
      autofocus
      @keydown.enter="addFn"
      v-model.trim="str"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      str: "",
    };
  },
  props: {
    list: {
      //传入数组
      type: Array,
      required: true,
    },
  },
  methods: {
    addFn() {
      if (this.str) {
        this.$emit("addList", this.str);
        this.str = "";
      } else {
        alert("不能输入全空格");
      }
    },
  },
  computed: {
    //监听函数isAll
    isAll: {
      //得到数据变化
      get() {
        return this.list.every((item) => item.isDone);
      },
      //改变数据变化
      set(val) {
        this.$emit("allState", val);
      },
    },
  },
};
</script>
