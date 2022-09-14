<template>
  <div>
    <!-- 1.banner -->
    <div class="banner bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30" alt="" />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>

      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <!-- 2.tabBar -->
    <div class="bg-primary pb-1 ">
      <!-- <div class="nav d-flex text-white jc-around">
        <TabBar :data="tabbarData" />
      </div> -->
      <TabBar :data="tabbarData" />
    </div>

    <router-view> </router-view>
  </div>
</template>

<script>
import TabBar from "../components/TabBar.vue";
export default {
  name: "index",

  components: {
    TabBar,
  },

  data() {
    return {
      tabbarData: [
        { title: "首页", path: "./home" },
        { title: "攻略中心", path: "./learn" },
        { title: "赛事中心", path: "./battle" },
      ],
    };
  },
};
</script>

<style langg="scss" scoped>
.index {
  /* width: 100%; */
  /* height: calc(100%- 45px); */
}
.banner {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>