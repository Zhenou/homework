<template>
  <div>
    <router-link to="/ulr_router">ULR_Router</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/about">About</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  display: inline-block;
  margin-left: 10px;
}
</style>
