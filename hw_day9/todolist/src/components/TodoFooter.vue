<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ list.length }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="type === 'all' ? 'selected' : ''"
          href="javascript:;"
          @click="$emit('typeChange', 'all')"
          >全部</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: type === 'no' }"
          @click="$emit('typeChange', 'no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: type === 'yes' }"
          @click="$emit('typeChange', 'yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clearFn" v-show="isShow">
      清除已完成
    </button>
  </footer>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    type: String,
  },
  methods: {
    clearFn() {
      this.$emit("clearFn");
    },
  },
  computed: {
    isShow() {
      return this.list.some((item) => item.isDone);
    },
  },
};
</script>
