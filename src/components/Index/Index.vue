<template>
  <div>
    <!-- banner -->
    <banner />
    <!-- 比特红
    人人都是代言人-->
    <bithot />
    <!-- 电商社交 -->
    <retailers />
    <!-- 平台特色 -->
    <features />
    <!-- 团队信念 -->
    <team />
    <!-- 联系我们 -->
    <contact-us />
  </div>
</template>
<script>
import banner from "./banner/banner";
import bithot from "./bithot/bithot";
import retailers from "./retailers/retailers";
import features from "./features/features";
import team from "./team/team";
import contactUs from './ContactUs/ContactUs'
export default {
  components: {
    banner,
    bithot,
    retailers,
    features,
    team,
    contactUs
  }
};
</script>