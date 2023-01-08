<template>
  <div class="my-tag">
    <div class="text" ref="divv" @dblclick="clickFn" v-if="isShow">
      {{ tag }}
    </div>
    <input
      class="input"
      type="text"
      placeholder="输入标签"
      v-else
      v-focus
      @blur="(isShow = true), $emit('changeFn', gname, id)"
      v-model.trim="gname"
    />
  </div>
</template>

<script>
export default {
  props: ["tag", "id"],
  data() {
    return {
      isShow: true,
      gname: "",
    };
  },
  methods: {
    clickFn() {
      this.isShow = false;
      this.gname = this.tag;
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="less">
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>
