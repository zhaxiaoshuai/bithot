<template>
  <div class="container">
    <!-- 电商社交 -->
    <el-row>
      <el-col :span="14" :xs="24" class="bithot-right">
        <span>电商社交</span>
        <p>电商平台销售额</p>
        <p>仍将保持较快的增长速度</p>
      </el-col>
    </el-row>
    <el-row class="down">
      <!-- 一 -->
      <el-col :span="8" :xs="24" class="lifeOrientedOne">
        <div class="lifeWrap">
          <div class="lifeOriented lifeOrientedRed">
            <img src="./images/shopping.png" alt />
          </div>
          <p>电商生活化</p>

          <p class="smallText">
            电商越来越成为生活的一部分。
            <br />食品等与居民生活密切相关的品类
            <br />快速增长，而生鲜等难以电商化的品类，
            <br />也由于电商生态的完善，将保持
            <br />较大的增长空间。
          </p>
        </div>
      </el-col>
      <!-- 二 -->
      <el-col :span="8" :xs="24">
        <div class="lifeWrap lifeOrientedTwo">
          <div class="lifeOriented lifeOrientedYellow">
            <img src="./images/shopping.png" alt />
          </div>
          <p>电商生态化</p>
          <p class="smallText">
            物流配送等基础设施日益完善，
            <br />电商平台在消费者需求分析、供应链理、
            <br />平台治理等方面积累了丰富的经验。国家
            <br />对电商仍持支持态度。
          </p>
        </div>
        <!-- 三 -->
        <div class="lifeWrap lifeOrientedThree">
          <div class="lifeOriented lifeOrientedGreen">
            <img src="./images/shopping.png" alt />
          </div>
          <p>电商创新化</p>
          <p class="smallText">
            商业模式持续创新。
            <br />如各种无人零售、无人货架、
            <br />线上线下深度融合等模式，
            <br />为电商发展拓展的新空间。
            <br />
          </p>
        </div>
      </el-col>
      <!-- 四 -->
      <el-col :span="8" :xs="24">
        <div class="lifeWrap lifeOrientedFour">
          <div class="lifeOriented lifeOrientedViolet">
            <img src="./images/shopping.png" alt />
          </div>
          <p>电商泛在化</p>

          <p class="smallText">
            电商在用户规模、渗透深度等方面仍有较
            <br />大的空间。如低线城市、农村地区等，都
            <br />将在电商领域有大量的创新。
            <br />
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scope>
.bithot-right {
  span {
    font-size: 0.22rem;
    font-weight: bold;
    line-height: 62px;
    color: rgba(255, 90, 113, 1);
  }
  p {
    font-size: 0.45rem;
    color: rgba(40, 40, 40, 1);
  }
  .content {
    width: 7.62rem;
    font-size: 0.2rem;
    font-weight: 400;
    line-height: 40px;
    color: rgba(0, 0, 0, 1);
    margin-top: 0.72rem;
  }
}
.down {
  margin-top: 1.14rem;
  .lifeWrap {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 30px rgba(186, 184, 191, 0.35);
    border-radius: 10px;
    padding: 0.4rem 0.56rem 0.2rem 0.56rem;
    height: 4.5rem;
    box-sizing: border-box;
    margin-right: 0.3rem;
    .lifeOriented {
      width: 1.14rem;
      height: 1.14rem;
      margin: 0 auto;
      box-shadow: 1px 16px 18px rgba(186, 186, 186, 0.35);
      border-radius: 50%;
      padding-top: 0.3rem;
      box-sizing: border-box;
      img {
        display: block;
        margin: 0 auto;
        max-width: 60%;
      }
    }
    .lifeOrientedRed {
      background: linear-gradient(
        313deg,
        rgba(251, 16, 48, 1) 0%,
        rgba(253, 58, 191, 1) 100%
      );
    }
    .lifeOrientedYellow {
      background: linear-gradient(
        316deg,
        rgba(255, 90, 113, 1) 0%,
        rgba(255, 150, 105, 1) 100%
      );
    }
    .lifeOrientedGreen {
      background: linear-gradient(
        316deg,
        rgba(61, 214, 224, 1) 0%,
        rgba(76, 240, 157, 1) 100%
      );
    }
    .lifeOrientedViolet {
      background: linear-gradient(
        316deg,
        rgba(67, 67, 238, 1) 0%,
        rgba(196, 83, 254, 1) 100%
      );
    }
    p {
      font-size: 0.26rem;
      font-weight: 400;
      color: rgba(40, 40, 40, 1);
      opacity: 1;
      text-align: center;
      margin: 0.2rem 0;
    }
    .smallText {
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(40, 40, 40, 1);
      opacity: 0.8;
      text-align: center;
      line-height: 0.35rem;
    }
  }
  .lifeOrientedOne {
    margin-top: 1.46rem;
  }
  .lifeOrientedTwo {
    margin-bottom: 0.4rem;
  }
  .lifeOrientedFour {
    margin-top: 1.46rem;
  }
}

@media screen and (max-width: 768px) {
  .bithot-right {
    text-align: center;
    span {
      font-size: 0.7rem;
      font-weight: bold;
      line-height: 62px;
      color: rgba(255, 90, 113, 1);
    }
    p {
      font-size: 0.45rem;
      color: rgba(40, 40, 40, 1);
    }
  }
  .down {
    .lifeOrientedOne {
      margin: 0 0 0.4rem 0;
    }
    .lifeOrientedTwo {
      margin-bottom: 0.4rem;
    }
    .lifeOrientedFour {
      margin-top: 0.4rem;
    }
    .lifeWrap {
      margin-right: 0;
      .lifeOriented {
        padding-top: 0.2rem;
      }
      .smallText {
        font-size: 0.2rem;
      }
    }
  }
}
</style>