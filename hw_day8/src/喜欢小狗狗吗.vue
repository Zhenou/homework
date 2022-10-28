<template>
  <div class="xx">
    <DogImg></DogImg>
    <DogImg></DogImg>
  </div>
</template>

<script>
import DogImg from "./components/DogImg.vue";
export default {
  components: {
    DogImg,
  },
};
</script>

<style>
div {
  display: inline-block;
}
</style>
