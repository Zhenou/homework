<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <!-- :class="{ completed: item.isDone }"  第一种写法-->
    <!-- :class="item.isDone ? 'completed' : ''"   第二种写法-->

    <li
      :class="item.isDone ? 'completed' : ''"
      v-for="item in list"
      :key="item.id"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          :checked="item.isDone"
          @click="clickFn(item.id, $event)"
        />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="clickFn(item.id, $event)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      //传入数组
      // type: Array,
      required: true,
    },
  },
  methods: {
    //绑定点击事件传参数到父组件,切换状态函数
    clickFn(id, $event) {
      //判断事件源是input走添加
      if ($event.target.nodeName === "INPUT") {
        this.$emit("swichState", id);
      }
      //判断事件源是button走删除
      if ($event.target.nodeName === "BUTTON") {
        this.$emit("delete", id);
      }
    },
  },
};
</script>
