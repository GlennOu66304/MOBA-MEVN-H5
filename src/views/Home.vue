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
    <!-- sprite section -->

    <div
      class="nav-icons bg-white mt-3 d-flex flex-wrap pt-3 text-dark-1 text-center"
    >
      <div class="nav-item mb-3" v-for="n in 10" :key="n">
        <i class="sprite sprite-news"></i>
        <div class="py-2">爆料站</div>
      </div>
    </div>

    <div class="bg-light py-2 fs-sm d-flex ai-center">
      <!-- <i class="sprite sprite-arrow"></i> -->
      <span class="collaps">
        <i class="sprite sprite-arrow"></i>
        收起</span
      >
    </div>
    <!-- news section -->
    <!-- <span class="iconfont icon-Menu">新闻资讯</span>
      <span class="iconfont icon-menu">新闻资讯</span> -->
    <m-card title="新闻咨询" icon="Menu">
      <!-- nav bar -->
      <div class="nav jc-between">
        <div class="nav-item">
          <div class="nav-Link active">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-Link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-Link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-Link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-Link">赛事</div>
        </div>
      </div>

      <!-- content below -->
      <div class="content pt-3">
        <swiper >
          <swiper-slide v-for="n in 5" :key="n">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span>|</span>
              <span>王者荣耀夏日直播节福利 虎牙专属回城免费领！</span>
              <span>07/21</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>
    <!-- hero sections -->
    <!-- <span class="iconfont icon-yingxiongxiangqing">新闻资讯</span> -->
    <m-card title="英雄列表" icon="yingxiongxiangqing"></m-card>
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
    background: map-get($colors, "white");
    // background: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
      // background: #000;
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
// http://www.spritecow.com/
// find the position of the sprite
.sprite {
  background: url("../assets/images/index.png") no-repeat 0 0;
  background-size: 28.8462rem;
  display: inline-block;
  &.sprite-news {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 63.546% 15.517%;
  }
  &.sprite-arrow {
    height: 0.625rem;
    width: 0.625rem;
    background-position: 38.577% 52.076%;
  }
}
.collaps {
  margin-left: 180px;
}
</style>