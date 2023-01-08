<template>
  <div>
    <ul class="message">
      <li class="notice">通知/公告</li>
      <li class="notice_body">
        <p class="title">紧急盘点通知</p>
        <p class="time">2020.12.30 18:23:14</p>
      </li>
      <li class="notice_body">
        <p class="title">紧急盘点通知</p>
        <p class="time">2020.12.30 18:23:14</p>
      </li>
      <li class="notice_body">
        <p class="title">紧急盘点通知</p>
        <p class="time">2020.12.30 18:23:14</p>
      </li>
      <li class="notice_body">
        <p class="title">紧急盘点通知</p>
        <p class="time">2020.12.30 18:23:14</p>
      </li>
      <li class="notice_body">
        <p class="title">紧急盘点通知</p>
        <p class="time">2020.12.30 18:23:14</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.message {
  list-style: none;
  padding: 0px;
  .notice {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 13px;
  }
  .notice_body {
    height: 61px;
    border-top: 1px solid #f4f0ef;
    margin-bottom: 13px;
    .title {
      font-size: 13px;
      color: #332b2c;
    }
    .time {
      font-size: 10px;
      color: #877f7f;
    }
  }
}
</style>
