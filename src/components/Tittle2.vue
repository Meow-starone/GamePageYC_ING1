<template>
  <div class="Tittle2">
    <div class="bannercolor">
    <img src="../assets/img/logo.png">
    </div>
    <div class="bannerimg"></div>
    <div id="navtxt" class="navtxt">如何安装NAS钱包——移动端</div>
    <div class="detailtxt">
      <div><router-link to="/TextPage">首页</router-link> > 公告 > 如何安装NAS钱包——移动端</div>
      <div>2018-6-13</div>
    </div>
    <hr class="hrbiu">
    <div id="content" class="content">
      <h2>下载</h2><br>
      下载星云钱包NAS nano地址：https://nano.nebulas.io/ <br>
      <center><img src="../assets/img/mb1.png"></center>
	  
	  <h2>注册与导入</h2><br>
      按照APP的提示操作即可。<br>
      注：网页钱包插件仅导出了json格式的Keystore文件，可以使用记事本打开复制keystore字符串。<br>
      <br>
      
	  <h2>复制地址</h2><br>
      点开NAS nano钱包APP，选择“我要收币”打开收款页，点击二维码左下方的“复制地址”即可。<br>
      打开游戏链接，粘贴钱包地址注册账号，进入游戏链接体验恐龙星球吧！<br>
      <center><img src="../assets/img/mb2.png"></center>
      <center><img src="../assets/img/mb3.png"></center>

      <h2>备份与PC导入</h2><br>
      打开钱包，选择“我”—“管理钱包”—要管理的钱包—备份Keystore，复制Keystore字符串保存。<br>
      将Keystore字符串粘贴在新建txt文件内，在导入PC端钱包插件密码库文件时选择该文件即可。<br>
      <br>
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
   .Tittle2{
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