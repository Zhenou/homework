<template>
 <div>

   <div index="" v-for="(item, index) in indexList" :key="index">
    <van-index-anchor class="ododododo" :index="item"></van-index-anchor>
    <city2 :Objitem="city[item]" @change="$emit('change',$event)"></city2>
   </div>

 </div>
</template>

<script>
import city2 from '@/components/city2.vue'
export default {
  components: {
    city2
  },
  props: {
    indexList: Array,
    city: Object
  }
}
</script>

<style>
</style>
