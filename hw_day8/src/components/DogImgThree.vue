<template>
  <div class="ccc">
    <img class="imgg" alt="" :src="src" />
    <span :style="{ backgroundColor: color }" @click="clickFn">{{
      title
    }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "rgb(255,103,14)",
    };
  },
  props: ["src", "title"],
  methods: {
    clickFn() {
      this.$emit("add", this.title);
      const colorOne = parseInt(Math.random() * 100) * 2;
      const colorTwo = parseInt(Math.random() * 100) * 2;
      const colorThree = parseInt(Math.random() * 100) * 2;
      this.color = `rgb(${colorOne},${colorTwo},${colorThree})`;
      console.log(this.color);
    },
  },
};
</script>

 <style >
.ccc {
  overflow: hidden;
  display: inline-block;
  width: 300px;
  height: 200px;
  text-align: center;
  border: 1px solid black;
}

.imgg {
  width: 300px;
}
.ccc span {
  line-height: 33px;
  margin-top: -5px;
  display: block;
  width: 300px;
  height: 33px;
}
</style>
