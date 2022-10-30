<template>
  <tr>
    <td>合计:</td>
    <td colspan="5">{{ totalPrice }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>
