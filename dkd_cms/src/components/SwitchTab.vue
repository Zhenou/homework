<template>
  <div class="top-text-4-1-right" ref="click">
    <div
      class="button1"
      id="button1"
      :style="{ color: color.color1 }"
      @click="clickFn"
    >
      周
    </div>
    <div
      class="button2"
      id="button2"
      :style="{ color: color.color2 }"
      @click="clickFn"
    >
      月
    </div>
    <div
      class="button3"
      id="button3"
      :style="{ color: color.color3 }"
      @click="clickFn"
    >
      年
    </div>
    <div ref="switch" class="is-actives" :style="{ transform: move }"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      move: 'translateX(0px)',
      color: {
        color1: 'black',
        color2: '#9da3b2',
        color3: '#9da3b2'
      }
    }
  },
  methods: {
    clickFn ($event) {
      // console.log($event.currentTarget.classList.add('is-active'))
      // console.log($event.currentTarget)
      // console.log($event)
      // console.log(this.$refs.click.children)
      // const object = this.$refs.click.children
      // arr.forEach(item => console.log(item))
      // for (const k in object) {
      //   console.log(object[k])
      // }
      if ($event.currentTarget.id === 'button1') {
        this.move = 'translateX(0px)'
        this.color.color1 = 'black'
        this.color.color2 = '#9da3b2'
        this.color.color3 = '#9da3b2'
        // console.log('1')
        this.$emit('upData', 'week')
      }
      if ($event.currentTarget.id === 'button2') {
        this.move = 'translateX(40px)'
        this.color.color1 = '#9da3b2'
        this.color.color2 = 'black'
        this.color.color3 = '#9da3b2'
        // console.log('月')
        this.$emit('upData', 'mouth')
      }
      if ($event.currentTarget.id === 'button3') {
        this.move = 'translateX(80px)'
        this.color.color1 = '#9da3b2'
        this.color.color2 = '#9da3b2'
        this.color.color3 = 'black'
        // console.log('3')
        this.$emit('upData', 'year')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.top-text-4-1-right {
  position: absolute;
  top: 23px;
  right: 30px;
  background-color: #f8faff;
  width: 129px;
  height: 34px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 22px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
  .button1 {
    width: 37px;
    // background-color: red;
    height: 30px;
    position: absolute;
    margin-left: -60px;
    margin-top: 4px;
    display: inline-block;
    color: #9da3b2;
    z-index: 500;
  }
  .button2 {
    width: 37px;
    height: 30px;
    position: absolute;
    margin-left: -19px;
    margin-top: 4px;
    display: inline-block;
    color: #9da3b2;
    z-index: 500;
  }
  .button3 {
    width: 37px;
    height: 30px;
    position: absolute;
    margin-left: 22px;
    margin-top: 4px;
    display: inline-block;
    color: #9da3b2;
    z-index: 500;
  }
  .is-active {
    border-radius: 5px;
    color: #000;
  }
  .is-actives {
    width: 37px;
    height: 25px;
    display: inline-block;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
    color: #000;
    position: absolute;
    margin-left: -60px;
    margin-top: 4px;
    z-index: 0;
    transition: transform 0.2s;
    // transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: transform;
  }
}
</style>
