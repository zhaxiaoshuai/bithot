<template>
  <div class="usBanner">
    <getcode></getcode>
  </div>
</template>
<script>
import getcode from '../getcode/getcode'
export default {
  components: {
    getcode
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.usBanner{
  background: url('./images/bg4@2x.png') 9rem -3rem  no-repeat;
}
</style>