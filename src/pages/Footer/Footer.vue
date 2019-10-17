<template>
  <div class="bithotFooter">
    <div class="container">
      <el-row>
        <el-col :span="8" :xs="24">
          <Logo :isClearfix="'clearfix'"></Logo>
          <div class="leftFooter">
            <p class="company">椿椿科技（上海）科技有限公司</p>
            <p>+088 01912704287</p>
            <p>infooffice@gmail.com</p>
            <div class="circle"></div>
            <p class="smallText">Copyrights 2019 Template_mr Template</p>
          </div>
        </el-col>
        <el-col :span="12" :xs="24" class="rightFooter">
          <!-- 首页 -->
          <div class="rightFooterContent clearfix">
            <ul>
              <p>首页</p>
              <li>关于我们</li>
              <li>电商社交</li>
              <li>平台特色</li>
              <li>团队信念</li>
              <li>联系我们</li>
            </ul>
          </div>
          <!-- 加入我们 -->
          <div class="rightFooterContent clearfix">
            <ul>
              <p>加入我们</p>
              <li>新用户注册</li>
              <li>成为合伙人</li>
            </ul>
          </div>
          <!-- app下载 -->
          <div class="rightFooterContent clearfix">
            <ul>
              <p>App下载</p>
              <li>Appstore</li>
              <li>Android</li>
              <li>二维码</li>
            </ul>
          </div>
          <br />
          <br />
          <p class="rightText">Privacy Policy Customer Support Careers</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Logo from "../Logo/Logo";
export default {
  components: {
    Logo
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.bithotFooter {
  background: rgba(255, 248, 246, 1);
  padding: 1rem 0;
  .leftFooter {
    p {
      font-size: 0.18rem;
      color: rgba(36, 36, 37, 1);
      opacity: 0.8;
      line-height: 28px;
    }
    .company {
      margin: 0.5rem 0;
    }
    .circle {
      width: 0.44rem;
      height: 0.44rem;
      background: rgba(251, 16, 48, 1);
      border-radius: 50%;
      margin-top: 0.4rem;
    }
    .smallText {
      margin-top: 0.7rem;
      font-size: 16px;
      font-weight: 400;
      line-height: 36px;
      color: rgba(36, 36, 37, 1);
      opacity: 0.8;
    }
  }
  .rightFooter {
    float: right;
    .rightFooterContent {
      float: left;
      p {
        font-size: 20px;
        font-weight: bold;
        line-height: 36px;
        color: rgba(36, 36, 37, 1);
        margin-bottom: 0.2rem;
      }
      ul {
        float: left;
        margin-right: 1rem;
      }
      li {
        font-size: 18px;
        font-weight: 400;
        line-height: 38px;
        color: rgba(36, 36, 37, 1);
        opacity: 0.8;
      }
    }
    .rightText {
      display: block;
      font-size: 16px;
      font-weight: 400;
      line-height: 36px;
      color: rgba(36, 36, 37, 1);
      opacity: 0.8;
      margin-top: 1.25rem;
    }
  }
}
@media screen and (max-width: 768px) {
  .bithotFooter {
    background: rgba(255, 248, 246, 1);
    padding: 1rem 0;
    .leftFooter {
      p {
        font-size: 0.18rem;
        color: rgba(36, 36, 37, 1);
        opacity: 0.8;
        line-height: 28px;
        text-align: center;
      }
      .company {
        margin: 0;
      }
      .circle {
        display: none;
      }
      .smallText{
        display: none;
      }
    }
    .rightFooter {
      float: right;
      text-align: center;
      .rightFooterContent {
        float: left;
        text-align: center;
        width: 33%;
        margin-top: 0.2rem;
        p {
          font-weight: bold;
          line-height: 36px;
          color: rgba(36, 36, 37, 1);
        }
        ul {
          float: left;
          margin: 0;
          width: 100%;
        }
        li {
          font-size: 18px;
          font-weight: 400;
          line-height: 38px;
          color: rgba(36, 36, 37, 1);
          opacity: 0.8;
        }
      }
      .rightText{
        display: none;
      }
    }
  }
}
</style>