<template>
  <div>
    <h1>我是一级C下面的</h1>
    <ul>
      <li>
        <router-link to="/contacts/srouterc/ctrouter1">C的二级A</router-link>
      </li>
      <li>
        <router-link to="/contacts/srouterc/ctrouter2">C的二级B</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
