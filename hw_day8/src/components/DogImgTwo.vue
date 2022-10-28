<template>
  <div class="ccc">
    <img class="imgg" alt="" :src="src" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: ["src", "title"],
};
</script>

 <style >
.ccc {
  display: inline-block;
  width: 300px;
  height: 200px;
  text-align: center;
  border: 1px solid black;
}
.bbb {
  line-height: 10px;
}
.imgg {
  width: 300px;
}
</style>
