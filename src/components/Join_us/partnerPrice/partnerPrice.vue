<template>
  <div class="partnerPrice container">
    <el-row>
      <el-col
        :span="8"
        :xs="24"
        v-for="(threeDateText, index) in threeDateTexts"
        :key="index"
        :class="activeClass == index ? 'active':''"
        @click="getItem(index)"
      >
        <div class="threeDate">
          <p class="date">{{threeDateText.date}}</p>
          <p class="Price">{{threeDateText.Price}}</p>
          <h1>{{threeDateText.jiage}}</h1>
          <ul>
            <li>{{threeDateText.li1}}</li>
            <li>{{threeDateText.li2}}</li>
            <li>{{threeDateText.li3}}</li>
            <li>{{threeDateText.li4}}</li>
            <li>{{threeDateText.li5}}</li>
            <li>{{threeDateText.li6}}</li>
          </ul>

          <span>{{threeDateText.spanText}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      threeDateTexts: [
        {
          date: "一年期",
          Price: "城市合伙人",
          jiage: "¥19800",
          li1: "赠送II级红豆荚2个",
          li2: "享受该城市会员实名认证和兑换红豆荚",
          li3: "1%的活跃度加成，享受该城市会员打赏",
          li4: "现金广告发布净利润10%分红",
          li5: "根据合伙人计划赠送相对应的红豆荚",
          li6: "享受全球红豆交易手续费10%分红",
          spanText: "选择本计划"
        },
        {
          date: "三年期",
          Price: "城市合伙人",
          jiage: "¥46800",
          li1: "赠送II级红豆荚6个",
          li2: "享受该城市会员实名认证和兑换红豆荚",
          li3: "1%的活跃度加成，享受该城市会员打赏",
          li4: "现金广告发布净利润10%分红",
          li5: "根据合伙人计划赠送相对应的红豆荚",
          li6: "享受全球红豆交易手续费10%分红",
          spanText: "选择本计划"
        },
        {
          date: "永久",
          Price: "城市合伙人",
          jiage: "¥98000",
          li1: "赠送III红级豆荚2个",
          li2: "享受该城市会员实名认证和兑换红豆荚",
          li3: "1%的活跃度加成，享受该城市会员打赏",
          li4: "现金广告发布净利润10%分红",
          li5: "根据合伙人计划赠送相对应的红豆荚",
          li6: "享受全球红豆交易手续费10%分红",
          spanText: "选择本计划"
        }
      ],
      activeClass: 0
    };
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.partnerPrice {
  text-align: center;
  padding: .5rem 0;
  box-sizing: border-box;
  .threeDate {
    background: rgba(253, 253, 253, 1);
    box-shadow: 1px 16px 30px rgba(181, 179, 185, 0.35);
    padding: 0.6rem;
    box-sizing: border-box;
    margin: 0 auto;
    width: 90%;
    .date {
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
      color: rgba(36, 36, 37, 1);
      opacity: 0.8;
    }
    .Price {
      font-size: 30px;
      font-weight: 400;
      line-height: 55px;
      color: rgba(36, 36, 37, 1);
      opacity: 1;
    }
    h1 {
      font-size: 60px;
      font-family: Rotonda;
      font-weight: bold;
      line-height: 55px;
      color: rgba(254, 50, 93, 1);
      opacity: 1;
    }
    ul {
      width: 280px;
      margin: 0.2rem auto;
      font-size: 16px;
      font-weight: 400;
      line-height: 35px;
      color: rgba(36, 36, 37, 1);
      opacity: 0.7;
    }
    span {
      display: block;
      padding: 0.18rem 0.5rem;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
      background: rgba(84, 202, 251, 0);
      border: 2px solid rgba(246, 245, 245, 1);
      border-radius: 30px;
      cursor: pointer;
      &:hover {
        color: rgba(255, 255, 255, 1);
        background: linear-gradient(
          359deg,
          rgba(251, 16, 48, 1) 0%,
          rgba(255, 56, 102, 1) 100%
        );
      }
    }
  }

}
</style>
