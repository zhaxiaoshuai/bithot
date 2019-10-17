<template>
  <div class="bithot">
    <el-row class="container">
      <el-col :span="10" class="bithot-left hidden-xs-only">
        <img src="./images/9b5eff5c791d805aa91e7032ec2c689.png" alt="">
      </el-col>
      <el-col :span="14" :xs="24" class="bithot-right">
        <span>Bithot</span>
        <p>比特红</p>
        <p>人人都是代言人</p>
        <p
          class="content"
        >比特红（Bithot）是比特红科技公司于2019年10月1日正式推出的一个为每一个人提供电商社交服务的免费应用程序。比特红科技公司是“代言电商”的创立者，也是价值互联网时代的“下一代电商”的倡导者。比特红电商，可以为每一个人创立一个专属的“生活账户”，每天持续收获“生活红利”。“红利”在比特红社区里，可以存储、可以交换、可以流动，还可以购物。比特红电商让人们对美好生活的向往不再受制于社会发展不平衡不充分的现状。现在，个人已是最小的组织，个人专家化已是社会发展的大趋势，比特红电商就是“人人都是代言人”的社交工具。</p>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scope>
.bithot {
  margin-top: -2rem;
  .bithot-left {
    span {
      font-size: 0.2rem;
    }
  }
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
}

@media screen and (max-width: 768px) {
  .bithot {
    margin: 0;
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
      .content {
        width: 95%;
        font-size: 0.3rem;
        margin: .15rem auto
      }
    }
  }
}
</style>