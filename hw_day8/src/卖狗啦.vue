<template>
  <div>
    <div class="bigbox">
      <DogImg
        v-for="(item, index) in Dog"
        :key="index"
        :src="item.dogImgUrl"
        :title="item.dogName"
      ></DogImg>
    </div>
  </div>
</template>

<script>
import DogImg from "./components/DogImgThree.vue";
export default {
  components: {
    DogImg,
  },
  data() {
    return {
      Dog: [
        {
          dogImgUrl: "https://w.wallhaven.cc/full/x1/wallhaven-x12ozd.jpg",
          dogName: "兔孙",
        },
        {
          dogImgUrl: "https://w.wallhaven.cc/full/45/wallhaven-45mdm8.jpg",
          dogName: "不知道叫啥1",
        },
        {
          dogImgUrl: "https://w.wallhaven.cc/full/dg/wallhaven-dgqqz3.jpg",
          dogName: "不知道叫啥2",
        },
        {
          dogImgUrl: "https://w.wallhaven.cc/full/4v/wallhaven-4v93rm.jpg",
          dogName: "不知道叫啥3",
        },
        {
          dogImgUrl: "https://w.wallhaven.cc/full/01/wallhaven-01d821.jpg",
          dogName: "不知道叫啥4",
        },
        {
          dogImgUrl: "https://w.wallhaven.cc/full/4l/wallhaven-4l53ql.jpg",
          dogName: "不知道叫啥5",
        },
      ],
    };
  },
};
</script>

<style>
.bigbox {
  height: 400px;
  width: 906px;
  margin: 100px auto;
}
</style>
