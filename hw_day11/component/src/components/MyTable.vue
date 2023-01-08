<template>
    <table class="my-table">
      <thead>
        <slot></slot>
      </thead>
      <tbody>
        <tr v-for="item in value" :key="item.id">
          <slot name="goodss"  :row="item"></slot>
        </tr>
      </tbody>
    </table>
</template>

<script>

export default {
props:{
  value:Array
}
}
</script>

<style lang="less">
.my-table {
  width: 100%;
  border-spacing: 0;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
  th {
    background: #f5f5f5;
    border-bottom: 2px solid #069;
  }
  td {
    border-bottom: 1px dashed #ccc;
  }
  td,
  th {
    text-align: center;
    padding: 10px;
    transition: all 0.5s;
    &.red {
      color: red;
    }
  }
  .none {
    height: 100px;
    line-height: 100px;
    color: #999;
  }
}
</style>
