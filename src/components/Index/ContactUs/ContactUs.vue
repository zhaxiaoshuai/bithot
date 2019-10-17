<template>
  <div class="contactus container">
    <el-row>
      <el-col class="contactusText">
        <p>联系我们</p>
        <p class="contactusP">
          留下您的
          联系方式
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="inputCss" :span="12" :xs="24">
        <div class="clearfix nameCss">
          <label for="name" style>您的姓名</label>
          <input type="text" id="name" ref="name" style v-model="name" />
        </div>
        <div class="clearfix nameCss">
          <label for="number">您的电话</label>
          <input type="text" id="number" ref="number" v-model="number" />
        </div>
        <textarea name id cols="30" ref="content" rows="10" v-model="content" placeholder="您的诉求"></textarea>
        <button class="BecomeRed" @click="submitContent">提交</button>
      </el-col>
      <el-col class="inputImg hidden-xs-only" :span="12" >
          <img src="./images/bg5@2x.png" alt="">
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      number: "",
      content: ""
    };
  },
  methods: {
    submitContent() {
      const { name, number, content } = this;
      const rightNumber = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
        number
      );
      if (!name) {
        alert("请输入姓名");
        this.refFocus("name");
      } else if (!rightNumber) {
        alert("请输入11位电话");
        this.refFocus("number");
      } else if (!content) {
        alert("请输入诉求");
        this.refFocus("content");
      } else {
        alert("提交成功");
        this.name = this.number = this.content = "";
      }

      //   如需上传只需把 name rightNumber content 带到接口数据中提交即可
    },
    refFocus(index) {
      this.$refs[index].focus();
    }
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.contactus {
  .contactusText {
    font-size: 0.22rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    line-height: 0.62rem;
    color: rgba(255, 90, 113, 1);
    opacity: 1;
    .contactusP {
      display: inline-block;
      width: 1.8rem;
      font-size: 0.45rem;
      font-weight: 400;
      line-height: 0.55rem;
      color: rgba(36, 36, 37, 1);
      opacity: 1;
    }
  }
  .inputCss {
    margin-top: 0.5rem;
    .nameCss {
      width: 4.7rem;
      padding: 0.2rem 0.2rem;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 12px 30px rgba(193, 193, 193, 0.35);
      margin-bottom: 0.2rem;

      label {
        float: left;
        font-size: 0.16rem;
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(36, 36, 37, 1);
        opacity: 0.7;
      }
      input {
        float: left;
        outline: none;
        border: none;
        margin-left: 0.2rem;
        margin-top: 0.03rem;
      }
    }
    textarea {
      width: 4.7rem;
      height: 1.52rem;
      font-size: 0.16rem;
      background: rgba(255, 90, 113, 0);
      border: 1px solid rgba(236, 236, 245, 1);
      opacity: 1;
      resize: none;
      outline: none;
      padding: 0.2rem 0.2rem;
      box-sizing: border-box;
    }
    .BecomeRed {
      display: block;
      padding: 0.17rem 0.67rem;
      background: linear-gradient(
        337deg,
        rgba(255, 90, 113, 1) 0%,
        rgba(255, 150, 105, 1) 100%
      );
      font-size: 0.2rem;
      border-radius: 30px;
      line-height: 30px;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      border: none;
      outline: none;
    }
  }
  .inputImg{
      overflow: hidden;
      margin-top: -1.2rem;
  }
}

@media screen and (max-width: 768px) {
  .contactus {
    text-align: center;
    .contactusText {
      font-size: 0.7rem;
      font-family: Microsoft YaHei;
      font-weight: bold;
      line-height: 0.62rem;
      margin: 0.6rem 0 0 0;
      color: rgba(255, 90, 113, 1);
      .contactusP {
        display: inline-block;
        width: 1.8rem;
        font-size: 0.45rem;
        font-weight: 400;
        line-height: 0.55rem;
        color: rgba(36, 36, 37, 1);
        margin-top: 0.3rem;
      }
    }
    .inputCss {
      .nameCss {
        width: 4.7rem;
        padding: 0.2rem 0.2rem;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 12px 30px rgba(193, 193, 193, 0.35);
        margin-bottom: 0.2rem;
        margin: 0.3rem auto;
        label {
          font-size: 0.16rem;
          font-weight: 400;
          color: rgba(36, 36, 37, 1);
          opacity: 0.7;
          line-height: 0.4rem;
        }
        input {
          outline: none;
          border: none;
          margin-left: 0.2rem;
          margin-top: 0.03rem;
        }
      }
      textarea {
        width: 4.7rem;
        height: 1.52rem;
        font-size: 0.16rem;
        background: rgba(255, 90, 113, 0);
        border: 1px solid rgba(236, 236, 245, 1);
        opacity: 1;
        resize: none;
        outline: none;
        padding: 0.2rem 0.2rem;
        box-sizing: border-box;
      }
      .BecomeRed {
        display: block;
        padding: 0.17rem 0.67rem;
        background: linear-gradient(
          337deg,
          rgba(255, 90, 113, 1) 0%,
          rgba(255, 150, 105, 1) 100%
        );
        font-size: 0.2rem;
        border-radius: 30px;
        line-height: 30px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        border: none;
        outline: none;
        margin: 0 auto;
      }
    }
  }
}
</style>