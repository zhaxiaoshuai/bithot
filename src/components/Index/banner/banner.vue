<template>
  <div class="banner">
    <el-row>
      <el-col class="hidden-xs-only text clearfix" :span="6"></el-col>
      <el-col class="towImg" :span="10" :xs="24">
        <img src="./images/daiyanren.png" alt />
        <img src="./images/everyoneman.png" alt />
        <div class="erweima">
          <img src="./images/erweima.png" alt />
        </div>
        <div class="appstore">
          <img src="./images/apple.png" alt />
          <span>Appstore</span>
        </div>
        <div class="appstore">
          <img src="./images/Android.png" alt />
          <span>Android</span>
        </div>
      </el-col>
      <el-col class="leftImg hidden-xs-only">
        <img src="./images/iphone.png" alt />
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scope>
.banner {
  padding-left: 0.96rem;
  position: relative;
  overflow: hidden;
  height: 13rem;
  margin-top: 0.4rem;
  .text {
    width: 2.64rem;
    height: 1px;
    float: left;
  }
  .towImg {
    margin-top: 1.85rem;
    img {
      max-width: 100%;
      float: left;
    }
    div {
      margin-top: 0.2rem;
      background: linear-gradient(
        180deg,
        rgba(251, 13, 44, 1) 0%,
        rgba(255, 59, 105, 1) 100%
      );
      border-radius: 20px;
      float: left;
    }
    .erweima {
      padding: 0.24rem;
      margin-right: 0.2rem;
    }
    .appstore {
      padding: 0.19rem;
      margin-right: 0.2rem;
      span {
        margin-left: 0.1rem;
        font-size: 0.3rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 0.8;
        float: left;
      }
    }
  }
}
.leftImg {
  img {
    position: absolute;
    right: -3.5rem;
    top: 0px;
    z-index: -1;
    max-width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    padding: 0.3rem;
    position: static;
    height: auto;
    .towImg {
      margin-top: 0;
    }
    .appstore {
      line-height: 0.6rem;
    }
  }
}
</style>