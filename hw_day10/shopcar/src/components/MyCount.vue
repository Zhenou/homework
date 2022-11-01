<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="$emit('subFn', id)">
      -
    </button>
    <input type="number" class="form-control inp" :value="num" />
    <button type="button" class="btn btn-light" @click="$emit('addFn', id)">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: ["num", "id"],
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
