<template>
  <div>
    <!-- 加入我们banner -->
    <us-banner />
    <!-- 合伙人价格 -->
    <partnerPrice />
  </div>
</template>
<script>
import usBanner from "./us_banner/us_banner";
import partnerPrice from "./partnerPrice/partnerPrice";
export default {
  components: {
    usBanner,
    partnerPrice
  }
};
</script>