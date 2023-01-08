<template>
  <div class="article-detail-page">
    <nav class="nav">
      <span class="back" @click="$router.go(-1)">&lt;</span> 面经详情
    </nav>
    <header class="header">
      <h1>{{ list.stem }}</h1>
      <p>
        {{ list.createdAt }}| {{ list.views }} 浏览量 |{{ list.likeCount }}
        点赞数
      </p>
      <p>
        <img :src="list.creatorAvatar" />
        <span>{{ list.creatorName }}</span>
      </p>
    </header>
    <main class="body">
      {{ list.content }}
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {},
    };
  },
  name: "ArticleDetailPage",
  async created() {
    const id = this.$route.params.id;
    const {
      data: { result },
    } = await this.$axios.get(
      `https://mock.boxuegu.com/mock/3083/articles/${id}`
    );
    console.log(result);
    this.list = result;
  },
};
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
    padding: 0 15px;
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .body {
    padding: 0 15px;
  }
}
</style>
