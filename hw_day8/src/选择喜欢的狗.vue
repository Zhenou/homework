<template>
  <div>
    <div class="bigbox">
      <DogImg
        v-for="(item, index) in Dog"
        :key="index"
        :src="item.dogImgUrl"
        :title="item.dogName"
        @add="addFn"
      ></DogImg>
    </div>

    <textarea name="" id="" cols="30" rows="10" v-model="hobby" class="hobby">
20000</textarea
    >
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
          dogImgUrl: "https://w.wallhaven.cc/full/3k/wallhaven-3kowoy.png",
          dogName: "不知道叫啥5",
        },
      ],
      hobby: [],
    };
  },
  methods: {
    addFn(title) {
      this.hobby.push(title);
    },
  },
};
</script>

<style>
.bigbox {
  height: 400px;
  width: 906px;
  margin: 150px auto;
}
.hobby {
  border: 1px solid black;
  width: 900px;
  height: 80px;
  position: fixed;
  left: 15%;
  top: 30px;
}
</style>
