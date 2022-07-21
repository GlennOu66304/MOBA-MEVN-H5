<template>
  <div class="Card  bg-white p-3 mt-3">
    <div class="Card-header d-flex ai-center">
      <!-- left -->

      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fx-xl flex-1 px-2">
        {{ title }}
      </div>

      <!-- right -->
      <i class="iconfont icon-menu"></i>
    </div>

    <div class="Card-body pt-3">
         <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    icon: String,
  },
};
</script>

<style scoped></style>