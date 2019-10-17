<template>
  <div class="features container">
    <!-- 平台特色头部 -->
    <el-row>
      <el-col class="featuresHeader">
        <div class="greenCircle"></div>
        <p>平台特色</p>
        <p class="canWeDoWhat">我们能做什么</p>
        <p class="introduce">
          比特红是一款集红包推广、分享视频、电商平台、红人代言、好友分享等功能为一体的
          信息推广、红人养成app，致力于解决商品销售信息传播不通、红人流量转化等问题的
          社会信息传播平台。
        </p>
      </el-col>
    </el-row>
    <!-- 四个特色 -->
    <el-row>
      <el-col class="FourCharacteristics" :span="6">
        <div class="videoPublishing">
          <img src="./images/video.png" alt />
          <p>视频发布</p>
        </div>
      </el-col>
      <el-col class="FourCharacteristics" :span="6">
        <div class="videoPublishing promote">
          <img src="./images/hongbao.png" alt />
          <p>红包推广</p>
        </div>
      </el-col>
      <el-col class="FourCharacteristics" :span="6">
        <div class="videoPublishing electricity">
          <img src="./images/dianshang.png" alt />
          <p>电商平台</p>
        </div>
      </el-col>
      <el-col class="FourCharacteristics" :span="6">
        <div class="videoPublishing endorsement">
          <img src="./images/daiyan.png" alt />
          <p>红人代言</p>
        </div>
      </el-col>
    </el-row>
    <!-- 价值互联网时代 -->
    <el-row>
      <el-col class="InternetEra">
        <div class="Internet">
          <p>
            价值互联网时代
            <br />网红就是比特红
          </p>
          <span
            class="InternetEndorsement"
          >代言电商借助红人的号召力和影响力，将在社交平台中吸引的粉丝转化为产品购买者，将粉丝对红人的认可和青睐转化为对产品与品牌的认同，实现粉丝变现。</span>
          <br />
          <p class="BecomeRed">成为红人</p>
          <img src="./images/bg3@2x.png" alt />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scope>
.features {
  text-align: center;
  margin-top: 4rem;
  .featuresHeader {
    .greenCircle {
      width: 23px;
      height: 23px;
      background: rgba(120, 246, 179, 1);
      margin: 0 auto;
      border-radius: 50%;
    }
    p {
      font-size: 0.22rem;
      font-weight: 400;
      line-height: 0.62rem;
      color: rgba(252, 20, 54, 1);
    }
    .canWeDoWhat {
      font-size: 0.45rem;
      font-weight: 400;
      color: rgba(36, 36, 37, 1);
    }
    .introduce {
      width: 8.39rem;
      font-size: 0.22rem;
      font-weight: 400;
      line-height: 0.3rem;
      color: rgba(36, 36, 37, 1);
      margin: 0.6rem auto auto auto;
    }
  }
  .FourCharacteristics {
    margin-top: 0.44rem;
    .videoPublishing {
      width: 1.85rem;
      height: 1.85rem;
      margin: 0 auto;
      background: linear-gradient(
        111deg,
        rgba(255, 90, 113, 1) 0%,
        rgba(255, 188, 104, 1) 100%
      );
      opacity: 1;
      border-radius: 10px;
      padding-top: 0.42rem;
      text-align: center;
      p {
        font-size: 0.22rem;
        font-weight: 400;
        line-height: 55px;
        color: rgba(255, 255, 255, 1);
      }
      img {
        max-width: 100%;
        display: block;
        margin: 0 auto;
      }
    }
    .promote {
      background: linear-gradient(
        36deg,
        rgba(0, 237, 174, 1) 0%,
        rgba(70, 253, 79, 1) 100%
      );
    }
    .electricity {
      background: linear-gradient(
        295deg,
        rgba(149, 123, 246, 1) 0%,
        rgba(230, 128, 255, 1) 100%
      );
    }
    .endorsement {
      background: linear-gradient(
        111deg,
        rgba(251, 16, 48, 1) 0%,
        rgba(254, 92, 252, 1) 100%
      );
    }
  }
  .InternetEra {
    margin-top: 1rem;
    position: relative;
    overflow: hidden;
    height: 5rem;
    .Internet {
      text-align: left;
      font-size: 0.32rem;
      font-weight: 400;
      line-height: 0.6rem;
      color: rgba(40, 40, 40, 1);
    }
    .InternetEndorsement {
      display: inline-block;
      width: 7.26rem;
      font-size: 0.22rem;
      font-weight: 400;
      line-height: 0.3rem;
      color: rgba(101, 101, 101, 1);
      margin-top: 0.2rem;
    }
    .BecomeRed {
      display: inline-block;
      margin-top: 0.4rem;
      padding: 0.17rem 0.67rem;
      background: linear-gradient(
        337deg,
        rgba(255, 90, 113, 1) 0%,
        rgba(255, 150, 105, 1) 100%
      );
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 30px;
      color: rgba(255, 255, 255, 1);
      text-align: center;
    }
    img {
      position: absolute;
      top: -300px;
      right: -350px;
    }
  }
}
@media screen and (max-width: 768px) {
  .features {
    margin-top: 1rem;
    .FourCharacteristics {
      margin-top: 0.44rem;
      .videoPublishing {
        width: 1.85rem;
        height: 1.85rem;
        float: left;
        background: linear-gradient(
          111deg,
          rgba(255, 90, 113, 1) 0%,
          rgba(255, 188, 104, 1) 100%
        );
        opacity: 1;
        border-radius: 10px;
        padding-top: 0.42rem;
        text-align: center;
        p {
          font-size: 0.22rem;
          font-weight: 400;
          line-height: 0.4rem;
          color: rgba(255, 255, 255, 1);
        }
        img {
          max-width: 100%;
          display: block;
          width: 70px;
          height: 63px;
          margin: 0 auto;
        }
      }
      .promote {
        background: linear-gradient(
          36deg,
          rgba(0, 237, 174, 1) 0%,
          rgba(70, 253, 79, 1) 100%
        );
      }
      .electricity {
        background: linear-gradient(
          295deg,
          rgba(149, 123, 246, 1) 0%,
          rgba(230, 128, 255, 1) 100%
        );
      }
      .endorsement {
        background: linear-gradient(
          111deg,
          rgba(251, 16, 48, 1) 0%,
          rgba(254, 92, 252, 1) 100%
        );
      }
    }
    .featuresHeader {
      .introduce {
        width: 100%;
      }
    }
    .InternetEra {
      margin-top: 1rem;
      .Internet {
        text-align: center;
        font-size: 0.4rem;
        font-weight: 400;
        line-height: 0.6rem;
        color: rgba(40, 40, 40, 1);
      }
      .InternetEndorsement {
        width: 100%;
      }
      img {
        display: none;
      }
    }
  }
}
</style>