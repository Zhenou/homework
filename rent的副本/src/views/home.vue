<template>
  <div>
     <van-search placeholder="请输入搜索关键词"  label="地址" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      active: localStorage.getItem('data')
    }
  },
  methods: {
    saveActive ($event) {
      localStorage.setItem('data', $event)
    }
  }
}
</script>

<style>
</style>
