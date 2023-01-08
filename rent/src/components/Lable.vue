<template>
   <bm-label
        :content="item.label + `<br>`  +item.count +'套'"
        :position="{ lng: item.coord.longitude, lat: item.coord.latitude }"
        :labelStyle="{
          color: 'white',
          fontSize: '18px',
          textAlign: 'center',
          verticalAlign: 'middle',
          lineHeight:'50px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          borderColor: 'white',
          borderWidth:'2px',
          backgroundColor: 'rgb(0,176,107)',
        }"
        title="Hover me"
        @dblclick='ddd'
      >
      </bm-label>

</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    ddd (item) {
      this.$emit('change', item)
    }
  }
}
</script>

<style>

</style>
