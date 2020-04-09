<!--
 * @Descripttion: 
 * @version: 
 * @Author: zxz
 * @Date: 2020-04-09 11:08:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-04-09 11:08:40
 -->
<template>
  <div class="leftLogo" :class="isClearfix">
    <el-col :span="isnumber" :xs="phoneNumber">
      <img src="../../assets/log0o.png" alt="logo" />
      <p class="bold">比特1红</p>
      <p class="small">Everyone is a spokesman</p>
    </el-col>
  </div>
</template>
<script>
export default {
  props: {
    isnumber: Number,
    phoneNumber: Number,
    isClearfix:String
  }
};
</script>
<style lang="scss" >
.leftLogo {
  img {
    float: left;
    margin-right: 5px;
  }
  .bold {
    font-size: 0.3rem;
    font-weight: bold;
    line-height: 0.36rem;
  }
  .small {
    font-size: 10px;
  }
  span {
    font-size: 0.1rem;
  }
}
</style>