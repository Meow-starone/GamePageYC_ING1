<template>
  <div class="Tittle1">
    <div class="bannercolor">
    <img src="../assets/img/logo.png">
    </div>
    <div class="bannerimg"></div>
    <div id="navtxt" class="navtxt">如何安装NAS钱包——PC端</div>
    <div class="detailtxt">
      <div><router-link to="/TextPage">首页</router-link> >
        <router-link :to="{ path: '/TextPage', query:{ activeName: 'fourth' }}">公告</router-link>
        > 如何安装NAS钱包——PC端</div>
      <div>2018-6-15</div>
    </div>
    <hr class="hrbiu">
    <div id="content" class="content">
      <h2>安装</h2><br>
      1.下载地址：https://github.com/ChengOrangeJu/WebExtensionWallet
      进入下载地址，选择下载ZIP文件并解压，或复制到本地环境中（需安装GitHub）。<br>
      <center><img src="../assets/img/p1.jpg"></center>

      2.打开你的chrome浏览器，在右上角选择“•••”—“更多工具（L）”—“扩展程序（E）”，打开扩展程序界面。<br>
      <center><img src="../assets/img/p2.jpg"></center>


      3.在右上角开启开发者模式，点击“加载已解压的扩展程序”按钮，选择之前下载解压的文件夹。 <br>
      <center><img src="../assets/img/p3.jpg"></center>

      完成安装，插件图标会显示在浏览器右上角。<br>
      </br>

      <h2>注册</h2><br>
      1.点开钱包插件，选择“新建钱包”，输入密码（私钥）即可新建钱包。<br>

      2.注意右上角的网络应为“Mainnet”，旁边的按钮可以切换语言。<br>
      <center><img src="../assets/img/p4.jpg"></center>

      3.下载密码库文件（Keystore）。<br>

      <center><img src="../assets/img/p5.jpg"></center>
      4.选择“切换钱包”，点击黑色按钮上传密码库文件（Keystore）并输入密码，完成钱包登录，进入游戏链接体验恐龙星球吧！
      <center><img src="../assets/img/p6.jpg"></center>
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
   .Tittle1{
      width: 100%;
      height: 100%;
      overflow: auto;
      /*overflow-x: hidden;*/
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
      font-size: 0.14rem;
      line-height: 1.28rem;
      font-weight: bold;
    }
  }
</style>
