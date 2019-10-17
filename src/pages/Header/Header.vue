<template>
  <div class="header clearfix">
    <el-container>
      <el-header class="container clearfix">
        <el-row class=" clearfix">
          <!--左侧logo-->
          <Logo :isnumber="6" :phoneNumber="14"></Logo>
          <!-- 右侧文字 -->
          <el-col :span="18" :xs="10">
            <ul class="navRighText">
              <router-link
                v-for="(navRighText, index) in navRighTexts"
                :key="index"
                :to="navRighText.url"
                tag="li"
                class="hidden-xs-only hidden-md-only"
              >{{navRighText.name}}</router-link>
              <span class="rightThree-1 rightThree-false"></span>
              <span class="rightThree-1 rightThree-show" @click="isPhoneShow"></span>
            </ul>
          </el-col>
        </el-row>
        <el-row v-show="isShow">
          <el-col>
            <ul class="iphoneNav">
              <router-link
                v-for="(navRighText, index) in navRighTexts"
                :key="index"
                :to="navRighText.url"
                tag="span"
              >{{navRighText.name}}</router-link>
            </ul>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
  </div>
</template>
<script>
import Logo from '../Logo/Logo'
export default {
  name: "Header",
  data() {
    return {
      navRighTexts: [
        {
          name: "首页",
          url: {
            name: "index"
          }
        },
        {
          name: "关于我们",
          url: {
            name: "index"
          }
        },
        {
          name: "平台特色",
          url: {
            name: "index"
          }
        },
        {
          name: "电商社交",
          url: {
            name: "index"
          }
        },
        {
          name: "团队信念",
          url: {
            name: "index"
          }
        },
        {
          name: "联系我们",
          url: {
            name: "index"
          }
        },
        {
          name: "加入我们",
          url: {
            name: "Join_us"
          }
        }
      ],
      isShow: false
    };
  },
  methods: {
    isPhoneShow() {
      this.isShow = !this.isShow;
    }
  },
  components:{
    Logo
  }
};
</script>
<style lang="scss" scope>
.header {
  margin-top: 0.8rem;
  color: #000;
}

.navRighText {
  float: right;
  li {
    float: left;
    font-size: 0.2rem;
    margin-left: 0.45rem;
    line-height: 0.6rem;
    cursor: pointer;
  }

  span {
    margin-left: 0.2rem;
    background: rgba(251, 16, 48, 1);
    border: 1px solid rgba(251, 16, 48, 1);
    opacity: 1;
    float: right;
  }
  .rightThree-1 {
    margin-top: 0.2rem;
    width: 0.25rem;
  }
}
.iphoneNav {
  position: relative;
  z-index: 111;
  li {
    background: red;
    text-align: center;
    font-size: 0.2rem;
    margin-left: 0.45rem;
    line-height: 0.6rem;
    cursor: pointer;
  }
}
.rightThree-show {
  display: none;
  position: relative;
  z-index: 1111;
}
@media screen and (max-width: 768px) {
  .banner {
    padding: 0.3rem;
  }
  .rightThree-show {
    display: block;
  }
  .rightThree-false {
    display: none;
  }
  .iphoneNav {
    margin-top: .2rem;
    li {
      margin: 0;
    }
  }
}
</style>
