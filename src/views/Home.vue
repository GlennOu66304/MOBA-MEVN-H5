<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/7a630cacbb3542f656c2d73266ee2bdf.jpeg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/86c1d8f38d2202bfcd6e741a1892cb8f.jpeg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/94ebe7bdf92c3c0e37ce09be3fa3b28d.jpeg"
          alt=""
        />
      </swiper-slide>

      <div
        class="swiper-pagination pagination-home text-right"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home",
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    // background: map-get($colors, "white");
    background: #fff;
    &.swiper-pagination-bullet-active {
      // background: map-get($colors, "info");
      background: #000;
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>