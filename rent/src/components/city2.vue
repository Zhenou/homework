<template>
  <div>
     <div v-for="item,index in Objitem " :key="index">
      <van-cell   @click="click($event,item)">{{item.label}}</van-cell>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    Objitem: Array
  },
  methods: {
    click (e, item) {
      if (e.target.classList.contains('van-cell__value')) {
        const city = e.target.innerHTML
        this.$store.commit('change', city)
        if (city === '北京' || city === '广州' || city === '上海' || city === '深圳') {
          this.$emit('change', {
            id: item.value,
            name: city
          })
        } else {
          this.$toast('当前城市没有房源')
        }
        // 打印传递的对象
        // console.log(
        //   {
        //     id: item.value,
        //     name: city
        //   }
        // )
        // 打印传递的城市
        // console.log(city)
        // 打印当前的e
        // console.log(e)
        // 打印当前的item里面的value
        // console.log(item.value)
      }
    }
  }
}
</script>

<style>

</style>
