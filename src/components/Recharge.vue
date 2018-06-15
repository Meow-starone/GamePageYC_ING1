<template>
  <div class="Tittle3">
    <div class="bannercolor">
      <img src="../assets/img/logo.png">
    </div>
    <div class="bannerimg"></div>
    <div id="navtxt" class="navtxt">邀好友同玩 钻石送不停</div>
    <div class="detailtxt">
      <div>
        <router-link to="/TextPage">首页</router-link>
        >
        <router-link :to="{ path: '/TextPage', query:{ activeName: 'third' }}">活动</router-link>
        > 邀好友同玩 钻石送不停
      </div>
      <div>2018-6-15</div>
    </div>
    <hr class="hrbiu">
    <div id="content" class="content">

      星云链收款顶视角挂机爆肝游戏《异虫危机》今日开服，邀好友同玩送钻石！<br><br/>


      活动规则：<br>
      即日起，凡注册成功用户均可以获得邀请码一枚。邀好友同玩，被邀请人注册账号时填入邀请码，在被邀请人正式进入游戏后，邀请人和被邀请人均可获得一笔钻石奖励。
      被邀请人注册成功后也将获得邀请码。<a>邀请码使用次数无限制，但每个账号仅可以被邀请一次。</a><br>
      活动时间：长期有效<br>
      <br>


      奖励规则：<br>


      <a>邀请成功后，邀请人每次可获得钻石50颗。</a><br>
      <a>被邀请人使用邀请码后进入游戏即可获得钻石30颗。</a><br/>
      <br/>
      <i style="color:gray">注：游戏内充值钻石价格为1Nas=500颗。</i>
      <br>
      <br>
      <div class="bottomtxt">本活动最终解释权归智玩网络所有</div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped>
  .Tittle3 {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .bannercolor {
    background-image: url(../assets/img/nav_bg.png);
    background-size: 100% 0.827rem;
    background-repeat: no-repeat;
    width: 100%;
    height: 0.827rem;
    z-index: 99;
    position: relative;
  }

  .bannercolor img {
    width: 1.96rem;
    height: 0.637rem;
    margin-top: 0.13rem;
  }

  .bannerimg {
    width: 100%;
    height: 2.976rem;
    margin-top: -0.637rem;
    background-image: url(../assets/img/bg_new_01.jpg);
    background-size: 10rem 2.976rem;
    background-repeat: no-repeat;
  }

  .navtxt {
    text-align: center;
    width: 10rem;
    height: 1.28rem;
    font-size: 0.214rem;
    line-height: 1.28rem;
  }

  .detailtxt {
    width: 10rem;
    font-size: 0.1rem;
    color: gray;
  }

  .detailtxt div:nth-child(1) {
    width: 3rem;
    float: left;
    text-align: left;
    margin-left: 1rem;
  }

  .detailtxt div:nth-child(2) {
    width: 2rem;
    float: left;
  }

  .hrbiu {
    width: 10rem;
    border-top: 0.005rem solid gray;
    font-size: 0px;
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
    margin-top: 0.2rem
  }

  .content {
    width: 6rem;
    margin: 0 auto;
    margin-top: 0.4rem;
    text-align: left;
    font-size: 0.1228rem;
    /*text-indent:2em;*/
  }

  .content img {
    margin: 0.2rem 0;
  }

  .bottomtxt {
    margin-top: 0.5rem;
    text-align: right;
    font-size: 0.11rem;
  }
</style>
<style>
  @media only screen and (max-width: 768px) {
    #content {
      width: 8rem;
      margin: 0 auto;
      margin-top: 0.4rem;
      text-align: left;
      font-size: 0.26rem;
    }

    #navtxt {
      text-align: center;
      width: 10rem;
      height: 1.28rem;
      font-size: 0.314rem;
      line-height: 1.28rem;
      font-weight: bold;
    }
  }
</style>
