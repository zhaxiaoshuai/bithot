<template>
  <div>
    <us-banner />
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