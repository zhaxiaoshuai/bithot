<template>
  <div class="team container">
    <el-row>
      <el-col class="teamHeader">
        <div class="teamHeaderWrap">
          <p>团队信念</p>
          <p class="TeamElectricity">代言电商模式</p>
          <p
            class="TeamContent"
          >红人作为对粉丝有着一定号召力和影响力的意见领袖，通过对时尚潮流元素和粉丝需求的精准把握，向粉丝推荐最适宜的产品，并高效对接上游供应厂商，从而大幅提高供应链的运作效率，解决了库存高、资金周转慢等问题。</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="communityTwo">
      <el-col :span="12">
        <div class="community">
          <img src="./images/hannah-colour.png" alt />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="community" style="float:right">
          <img src="./images/joanna-colour.png" alt />
        </div>
      </el-col>
    </el-row>
    <el-row class="teamIntroduce">
      <el-col>
        <p class="coarse">粗院长</p>
        <p class="community">社区发起人</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="teamRouter">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </el-col>
    </el-row>
    <el-row class="smallIconTwo">
      <el-col :span="12">
        <div class="iconTwo" style="float:right;margin-right:1rem;">
          <img src="./images/sylvain-colour-min.png" alt />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="iconTwo" style="margin-left:1rem;">
          <img src="./images/paul-colour.png" alt />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scope>
.team {
  .teamHeader {
    text-align: center;
    .teamHeaderWrap {
      p {
        font-size: 0.22rem;
        font-weight: 400;
        line-height: 62px;
        color: rgba(252, 20, 54, 1);
      }
      .TeamElectricity {
        font-size: 0.45rem;
        font-weight: 400;
        line-height: 62px;
        color: rgba(36, 36, 37, 1);
        opacity: 1;
      }
      .TeamContent {
        margin: 0.6rem auto auto auto;
        width: 8.39rem;
        font-size: 0.22rem;
        font-weight: 400;
        line-height: 0.3rem;
        color: rgba(36, 36, 37, 1);
        opacity: 0.8;
      }
    }
  }
  .communityTwo {
    .community {
      width: 1.08rem;
      height: 1.08rem;
      background: rgba(151, 121, 251, 1);
      box-shadow: 1px 18px 40px rgba(102, 102, 102, 0.35);
      border-radius: 50%;
      overflow: hidden;
      img {
        margin: 0 auto;
        max-width: 100%;
      }
    }
  }
  .teamIntroduce {
    text-align: center;
    .coarse {
      font-size: 0.26rem;
      font-weight: bold;
      line-height: 0.62rem;
      color: rgba(36, 36, 37, 1);
      opacity: 0.9;
    }
    .community {
      font-size: 0.18rem;
      font-weight: 400;
      line-height: 0.62rem;
      color: rgba(251, 16, 48, 1);
      opacity: 0.8;
    }
  }
  .teamRouter {
    text-align: center;
    margin-top: -0.5rem;
    p {
      display: inline-block;
      font-size: 0.22rem;
      font-family: Microsoft YaHei;
      color: rgba(196, 196, 196, 1);
      border-bottom: 1px solid rgba(196, 196, 196, 1);
      padding-bottom: 0.1rem;
    }
  }
  .smallIconTwo {
    .iconTwo {
      width: 1.08rem;
      height: 1.08rem;
      background: rgba(151, 121, 251, 1);
      box-shadow: 1px 18px 40px rgba(102, 102, 102, 0.35);
      border-radius: 50%;
      overflow: hidden;
      img {
        margin: 0 auto;
        max-width: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .team {
    .teamHeader {
      text-align: center;
      .teamHeaderWrap {
        p {
          font-size: 0.22rem;
          font-weight: 400;
          line-height: 62px;
          color: rgba(252, 20, 54, 1);
        }
        .TeamElectricity {
          font-size: 0.45rem;
          font-weight: 400;
          line-height: 62px;
          color: rgba(36, 36, 37, 1);
          opacity: 1;
        }
        .TeamContent {
          width: 100%;
          font-size: 0.22rem;
          font-weight: 400;
          line-height: 0.3rem;
          color: rgba(36, 36, 37, 1);
          opacity: 0.8;
        }
      }
    }
  }
}
</style>