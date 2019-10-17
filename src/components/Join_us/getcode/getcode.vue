<template>
  <div>
    <el-row>
      <el-col class="getcode" :span="14" :xs="24">
        <p>新用户注册</p>
        <input type="text" class="phoneNumber" v-model="phoneNumber" placeholder="电话号码" />
        <input type="text" class="phoneCode" v-model="phoneCode" placeholder="手机验证码" />
        <button
          class="getCodeButton"
          :disabled="!rightPhone"
          @click.prevent="getCode"
        >{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
        <input type="password" class="phonePassword" v-model="phonePassword" placeholder="密码" />
        <input type="password" class="confirmPassword" v-model="confirmPassword" placeholder="密码确认" />
        <button class="registered" @click="registered">注册</button>
        <p class="clickRegistered">点击注册即同意共享床位相关条款</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 电话号码
      phoneNumber: "",
      //   手机验证码
      phoneCode: "",
      //   密码
      phonePassword: "",
      // 密码确认
      confirmPassword: "",
      // 计时的时间
      computeTime: 0
    };
  },
  computed: {
    rightPhone() {
      return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
        this.phoneNumber
      );
    }
  },
  methods: {
    getCode() {
      // 如果当前没有计时
      if (!this.computeTime) {
        // 启动倒计时
        this.computeTime = 30;
        this.intervalId = setInterval(() => {
          this.computeTime--;
          if (this.computeTime <= 0) {
            // 停止计时
            clearInterval(this.intervalId);
          }
        }, 1000);
      }
    },
    registered() {
      const { phoneNumber, phoneCode, phonePassword, computeTime } = this;
    }
  }
};
</script>
<style lang="scss" scope>
.getcode {
  width: 5.4rem;
  height: 5.88rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 1px 16px 18px rgba(186, 186, 186, 0.35);
  opacity: 1;
  border-radius: 20px;
  padding: 0.46rem 0.98rem;
  margin-left: 3.6rem;
  box-sizing: border-box;
  p {
    font-size: 0.45rem;
    font-weight: 400;
    color: rgba(40, 40, 40, 1);
    opacity: 1;
    margin-bottom: 0.32rem;
  }
  input {
    outline: none;
    padding: 0.15rem;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(187, 187, 187, 1);
    float: left;
    margin-top: 0.25rem;
  }

  .phoneNumber {
    width: 3.45rem;
    height: 0.44rem;
    border-radius: 1000px;
    margin-top: 0;
  }
  .phoneCode {
    width: 2.21rem;
    height: 0.44rem;
    border-radius: 100px;
  }
  button {
    outline: none;
    border: none;
    color: #fff;
    float: left;
  }
  .getCodeButton {
    width: 1.1rem;
    height: 0.44rem;
    background: linear-gradient(
      180deg,
      rgba(251, 13, 44, 1) 0%,
      rgba(255, 59, 105, 1) 100%
    );
    margin-left: 0.13rem;
    border-radius: 100px;
    margin-top: 0.24rem;
    font-size: 0.14rem;
  }
  .phonePassword {
    width: 3.45rem;
    height: 0.44rem;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(187, 187, 187, 1);
    opacity: 1;
    border-radius: 50px;
  }
  .confirmPassword {
    width: 3.45rem;
    height: 0.44rem;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(187, 187, 187, 1);
    opacity: 1;
    border-radius: 50px;
  }
  .registered {
    width: 3.45rem;
    height: 0.54rem;
    background: linear-gradient(
      180deg,
      rgba(251, 13, 44, 1) 0%,
      rgba(255, 59, 105, 1) 100%
    );
    opacity: 1;
    border-radius: 50px;
    margin: 0.5rem 0 0.2rem 0;
  }
  .clickRegistered {
    font-size: 0.15rem;
    font-family: Microsoft YaHei;
    color: rgba(178, 178, 178, 1);
    opacity: 1;
    text-align: center;
  }
}
@media screen and (max-width: 768px) {
  .getcode {
    width: 100%;
    text-align: center;
    margin: 0;
    height: auto;
    .phoneNumber {
      width: 100%;
      height: auto;
    }
    .phoneCode {
      width: 70%;
      height: auto;
    }
    .getCodeButton {
      width: 27%;
      height: 0.68rem;
    }
    .phonePassword {
      width: 100%;
      height: auto;
    }
    .confirmPassword {
      width: 100%;
      height: auto;
    }
    .registered {
      width: 100%;
    }

    input {
      float: left;
    }
  }
}
</style>