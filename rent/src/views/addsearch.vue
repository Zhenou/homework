<template>
<van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</template>

<script>
export default {
  methods: {
    onSearch () {},
    onCancel () {
      this.$router.back()
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>

</style>
