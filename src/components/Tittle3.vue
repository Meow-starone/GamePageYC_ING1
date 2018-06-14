<template>
  <div class="Tittle3">
    <div class="bannercolor">
    <img src="../assets/img/logo.png">
    </div>
    <div class="bannerimg"></div>
    <div class="navtxt">庆开服，累计在线送NAS！</div>
    <div class="detailtxt">
      <div><router-link to="/TextPage">首页</router-link> > 活动 > 庆开服，累计在线送NAS！</div>
      <div>2018-6-13</div>
    </div>
    <hr class="hrbiu">
    <div class="content">
      
      开服活动第二弹：庆开服，累计在线送NAS！<br>
	  
	  
      活动时间：2018年6月X日 — 2018年6月19日<br>
      活动规则：<br>
      为庆祝开服，《异虫危机》将为所有支持本游戏的玩家送上大礼！自6月X日起至6月19日18时，凡是累计登录游戏三天，且每天累计登录4小时的玩家，将获得由官方直接派发的NAS奖励。<br>
      <br>
      
	  
      参与规则：注册星云钱包即可<br>
      

      
      更多详细内容请关注《异虫危机》官方公众号ycwj_bipa 或扫下方二维码：<br>
      <center><img src="../assets/img/qingkaifu.jpg"></center>
      <br>
      <br>
      <div class="bottomtxt">本活动最终解释权归智玩网络所有</div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods:{},
  };
</script>

<style scoped>
   .Tittle3{
      width: 100%;
      height: 100%;
      overflow: auto;
  }
  .bannercolor{
    background-image: url(../assets/img/nav_bg.png);
    background-size: 100% 0.827rem;
    background-repeat: no-repeat;
    width: 100%;
    height: 0.827rem;
    z-index: 99;
    position: relative;
  }
  .bannercolor img{
    width: 1.96rem;
    height: 0.637rem;
    margin-top: 0.13rem;
  }
  .bannerimg{
    width: 100%;
    height: 2.976rem;
    margin-top: -0.637rem;
    background-image: url(../assets/img/bg_new_01.jpg);
    background-size: 10rem 2.976rem;
    background-repeat: no-repeat;
  }
  .navtxt{
    text-align: center;
    width: 10rem;
    height: 1.28rem;
    font-size: 0.214rem;
    line-height: 1.28rem;
  }
  .detailtxt{
    width: 10rem;
    font-size: 0.1rem;
    color: gray;
  }
  .detailtxt div:nth-child(1){
    width: 3rem;
    float: left;
    text-align: left;
    margin-left: 1rem;
  }
  .detailtxt div:nth-child(2){
    width: 2rem;
    float: left;
  }
  .hrbiu{width: 10rem;border-top:0.005rem solid gray;font-size:0px;border-right:0px; border-bottom:0px; border-left:0px;margin-top: 0.2rem}
  .content{
    width: 6rem;
    margin: 0 auto;
    margin-top: 0.4rem;
    text-align: left;
    font-size: 0.1228rem;
    /*text-indent:2em;*/
  }
  .content img{
    margin:0.2rem 0;
  }
  .bottomtxt{
    margin-top: 0.5rem;
    text-align: right;
    font-size: 0.11rem;
  }
</style>