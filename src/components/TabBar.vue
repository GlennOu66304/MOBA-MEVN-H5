<template>
  <div class="nav d-flex text-white jc-around  ">
    <router-link
      v-for="(item, index) in data"
      :key="index"
      :to="item.path"
      tag="div"
      active-class="nav-item active"
    >
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    data: Array,
  },
};
</script>

<style scoped></style>