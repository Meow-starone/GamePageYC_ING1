<template>
  <div class="Tittle3">
    <div class="bannercolor">
    <img src="../assets/img/logo.png">
    </div>
    <div class="bannerimg"></div>
    <div id="navtxt" class="navtxt">开服公告</div>
    <div class="detailtxt">
      <div><router-link to="/TextPage">首页</router-link> > 
        <!-- <el-button @click="toaddress">555555</el-button> -->
        <router-link :to="{ path: '/TextPage', params:{ userId: 123 }}">公告</router-link> > 开服公告 </div>
      <div>2018-6-13</div>
    </div>
    <hr class="hrbiu">
    <div id="content" class="content">
      
      《异虫危机Zerg Crisis》今日X时移动端PC端同步劲爆开服！打造星云链最激爽顶视角挂机游戏！<br>
	  
	  
      向低质量粗糙半成品说不！区块链游戏一样可以高品质高完成度！刺激的战斗，精致的角色设计，流畅的画面，优秀的数值成长，等你来体验！<br>
      <br>
      
      更有两大开服活动豪礼相赠，在线即可领NAS！了解活动内容请点击此处跳转（挂上活动页面超链接）！
      <br>
      还在等什么，勇士！一期来加入对抗异虫的战场吧！
      <br>
      <br>

      
	  
     
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods:{
      toaddress(){
      console.log(111);
      eventHub.$emit('JUST_RUN',{activeName:'fourth'})
        this.$router.push({path: '/TextPage', params:{activeName:'fourth'}});
      }
    },
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

</style>
<style>
  @media only screen and (max-width: 768px){
      #content{
      width: 8rem;
      margin: 0 auto;
      margin-top: 0.4rem;
      text-align: left;
      font-size: 0.26rem;
    }
      #navtxt{
      text-align: center;
      width: 10rem;
      height: 1.28rem;
      font-size: 0.314rem;
      line-height: 1.28rem;
      font-weight: bold;
    }
  }
</style>