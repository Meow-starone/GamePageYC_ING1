<template>
  <div class="shouye">
    <div class="contain_bg">
      <header>
        <img src="../assets/img/logo.png" alt="">
      </header>
      <!--开始游戏-->
      <img src="../assets/img/anniu.png" alt="" id="start_game" @click="goToPlay">
      <img src="../assets/img/register.png" alt="" id="register" @click="showRegisterDialog">
      <img src="../assets/img/word.png" alt="" id="start_game_text">
      <div id="two_code">
        <div>
          <img src="../assets/img/two_code.png" alt="">
        </div>
        <div>扫码开始游戏</div>
      </div>
      <div id="vedio_button" @click="viewVedio">
        <img src="../assets/img/sj.png" alt="">
      </div>
    </div>
    <div class="introduce">
      <img src="../assets/img/new.png" alt="" id="news_center" @click="goToNewsCenter">
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <!--<div class="intr_img"></div>-->
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 2" :key="item">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="intr_text">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="最新" name="first">
                <el-button type="text" @click="routerRun('/recharge')">[活动]邀好友同玩 钻石送不停！</el-button>
                <el-button type="text" @click="routerRun('/tittle4')">[活动]异虫危机劲爆开服，冲排名赠豪礼！</el-button>
                <el-button type="text" @click="routerRun('/tittle3')">[活动]庆开服，累计在线送NAS！</el-button>
                <!--<el-button type="text" @click="routerRun('/tittle5')">[公告]开服公告</el-button>-->
                <el-button type="text" @click="routerRun('/tittle1')">[公告]如何安装NAS钱包--PC</el-button>
                <el-button type="text" @click="routerRun('/tittle2')">[公告]如何安装NAS钱包--移动端</el-button>
              </el-tab-pane>
              <el-tab-pane label="公告" name="second">
                <!--<el-button type="text" @click="routerRun('/tittle5')">[公告]开服公告</el-button>-->
                <el-button type="text" @click="routerRun('/tittle1')">[公告]如何安装NAS钱包--PC</el-button>
                <el-button type="text" @click="routerRun('/tittle2')">[公告]如何安装NAS钱包--移动端</el-button>
              </el-tab-pane>
              <el-tab-pane label="活动" name="third">
                <el-button type="text" @click="routerRun('/recharge')">[活动]邀好友同玩 钻石送不停！</el-button>
                <el-button type="text" @click="routerRun('/tittle4')">[活动]异虫危机劲爆开服，冲排名赠豪礼！</el-button>
                <el-button type="text" @click="routerRun('/tittle3')">[活动]庆开服，累计在线送NAS！</el-button>
              </el-tab-pane>
              <el-tab-pane label="新闻" name="fourth"></el-tab-pane>
              <el-tab-pane label="+" name="more" style="text-align:center;" @click="routerRun('/textpage')"></el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
    <footer>
      <div>
        <el-col :span="12">
          <img src="../assets/img/logo.png" alt="">
        </el-col>
        <el-col :span="12">
          <img src="../assets/img/xyl_logo.png" alt="">
        </el-col>
      </div>
      <p>本游戏适合18岁以上的玩家进入</p>
      <p>抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
      <p>©2017-2018 杭州智玩网络科技有限公司 版权所有</p>
    </footer>

    <div id="shade_box" v-if="showVideo" @click="closeVideo"></div>
    <video style="position:fixed;top:0;left:50%;transform:translate(-50%,0);z-index:999;" controls id="video01" v-if="showVideo" autoplay>
      <source src="http://p7p01p9vc.bkt.clouddn.com/yichong5.mp4" type="video/mp4">
    </video>
    <el-button type="text" @click="closeVideo" class="iconfont icon-guanbi" id="closeIcon" v-if="showVideo"
               style="position:fixed;top:0.1rem;right:0.1rem;transform:translate(-50%,0);z-index:999;color:dimgrey;"></el-button>

    <register id="register_dialog" :dialogData="dialogData"></register>

  </div>
</template>

<script>
  import register from './register'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        activeName: 'second',
        showVideo: false,
        dialogData: {
          dialogVisible: false
        }
      }
    },
    methods: {
      routerRun(path) {
        this.$router.push({ path: path });
      },
      handleClick(tab, event) {
        console.log(tab);
        if (tab.label == '+') {
          this.$router.push('/textpage');
        }
      },
      goToNewsCenter() {
        this.$router.push({ path: '/textpage' });
      },
      viewVedio() {
        this.showVideo = true;
      },
      closeVideo() {
        this.showVideo = false;
      },
      goToPlay() {
//        this.$message('游戏即将开放，请期待！');
//        location.href = 'http://zerg.oowan.com/';
        location.href = 'zerg.game.oowan.com:3002';

      },
      showRegisterDialog() {
        this.dialogData.dialogVisible = true;
      }
    },
    components: {
      register
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .shouye {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    #shade_box {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      background: black;
      opacity: 0.7;
    }
    #closeIcon {
      font-size: 0.3rem;
    }
    header {
      /*padding-top: 0.1rem;*/
      height: 0.81rem;
      background-image: url('../assets/img/nav_bg.png');
      background-size: 100% auto;
      text-align: center;
      z-index: 1;
      img {
        margin-top: 0.1rem;
        height: 0.6rem;
      }
    }
    .contain_bg {
      width: 100%;
      height: 100%;
      position: relative;
      #start_game {
        cursor: pointer;
        margin-top: 3rem;
        width: 1.6rem;
        margin-right: 0.05rem;
        /*height: 0.708333333rem;*/
      }
      /*注册*/
      #register {
        cursor: pointer;
        margin-top: 3rem;
        width: 1.6rem;
        margin-left: 0.05rem;
      }
      #start_game_text {
        display: block;
        width: 2.619047619rem;
        margin: 0 auto;
        margin-top: 0.1rem;
        padding: 0.1rem;
        color: #D7B779;
        font-size: 0.095238095rem;
      }
      /*二维码*/
      #two_code {
        display: none;
        position: absolute;
        left: 1rem;
        bottom: 2.2rem;
        width: 0.952380952rem;
        height: 1.19047619rem;
        padding-top: 0.029761905rem;
        border: 2px solid #8E512E;
        div:first-child {
          background: yellow;
          width: 0.892857143rem;
          height: 0.892857143rem;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        div:last-child {
          line-height: .267857143rem;
          color: #F7FBFB;
        }
      }
      #vedio_button {
        background: black;
        background-image: url('../assets/img/z.png');
        background-size: cover;
        position: absolute;
        right: 3rem;
        bottom: 2.2rem;
        width: 0.75rem;
        height: 0.75rem;
        display: flex;
        justify-content: center;
        border-radius: 0.75rem;
        opacity: 0.7;
        align-items: center;
        cursor: pointer;
        img {
          width: 0.202380952rem;
          height: 0.232142857rem;
        }
      }
    }
    .introduce {
      background-color: #0E151F;
      height: calc(~"100% - 1.5rem");
      width: 100%;
      /*display: flex;*/
      padding: 10%;
      position: relative;
      #news_center {
        position: absolute;
        top: -0.1rem;
        left: 50%;
        opacity: 1;
        transform: translate(-50%, 0);
        &:hover {
          cursor: pointer;
          opacity: 0.2;
        }
      }
      @intr_img_height: 2.5rem;

      //轮播框
      .el-carousel {
        margin-right: 0.1rem;
      }
      .el-carousel__container {
        height: @intr_img_height;
      }
      .intr_text {
        /*flex: 1;*/
        margin-left: 0.1rem;
        background: #151E2F;
        height: @intr_img_height;
        .el-tabs__nav-scroll {
          padding: 0 0.1rem;
        }
        .el-tabs__nav {
          background-color: inherit;
          border-bottom: 1px solid #151E2F;
          width: 100%;
          /*height: 20%;*/
          display: flex;
          .el-tabs__item {
            flex: 1;
            color: #F9FEF4;
            font-size: 0.095238095rem;
          }
        }
        .el-tab-pane {
          text-align: left;
          padding-left: 0.2rem;
          .el-button {
            display: block;
            /*line-height: 0.333333333rem;*/
            span {
              font-size: 0.095238095rem;
            }
          }
          .el-button + .el-button {
            margin-left: 0;
          }
          .el-button--text {
            color: #868A91;
          }
          .el-button--text:hover {
            color: #F9FEF4;
          }
        }
      }
    }
    footer {
      height: 1.5rem;
      background: #0B111D;
      text-align: left;
      font-size: 0.005952381rem;
      position: relative;
      /*padding-top: 1rem;*/
      > div:first-child {
        height: 1rem;
        padding-top: 0.1rem;
        img:first-child {
          /*width: 1.964285714rem;*/
          /*height: 0.636904762rem;*/
          width: 1.5rem;
        }
        img:last-child {

        }
        .el-col:first-child {
          text-align: right;
          padding-right: 0.2rem;
        }
      }

      p {
        text-align: center;
        margin-bottom: 0.005952381rem;
      }
    }

    .contain_bg {
      background-image: url('../assets/img/bg_01.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      /*background-size: cover;*/
    }

    /*@media screen and (min-width: 800px) {*/
    .introduce {
      background-image: url('../assets/img/bg_02.jpg');
      background-size: 100% 100%;
    }
    /*}*/

    /*轮播*/
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
      background-image: url('../assets/img/lb_01.jpg');
      background-size: auto 100%;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-image: url('../assets/img/lb_02.jpg');
      background-size: auto 100%;
    }
  }
</style>
<style lang="less">
  /*@import '../assets/css/responsive.less';*/
  /*竖屏并且小于768px --手机端/ipad*/
  @media screen and (orientation: portrait) and (max-width: 768px) {
    .shouye header {
      background-image: none;
    }

    #two_code {
      display: none;
    }

    /*公告标题字体大小*/
    .shouye .introduce .intr_text .el-tabs__nav .el-tabs__item {
      font-size: 0.4rem;
    }

    .shouye .introduce .intr_text .el-tab-pane .el-button span {
      font-size: 0.4rem;
    }

    /*.shouye .introduce .intr_text .el-tabs__nav {*/
    .shouye .introduce .intr_text .el-tabs__nav-scroll {
      padding: 0 0.4rem;
    }

    .shouye .introduce .intr_text .el-tabs__nav {
      border-bottom: 0;
    }

    .shouye .introduce .intr_text .el-tabs__nav .el-tabs__item {
      text-align: left;
      padding-right: 0;
    }

    .shouye #closeIcon {
      font-size: 1rem;
      color: white;
    }

    .shouye .contain_bg #vedio_button {
      background-size: cover;
      position: absolute;
      right: 50%;
      transform: translate(50%, 0);
      top: 6rem;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      border-radius: 0.75rem;
      opacity: 0.7;
      align-items: center;
      cursor: pointer;
      img {
        width: 0.404761905rem;
        height: 0.464285714rem;
      }
    }

    .shouye .contain_bg {
      background-image: url('../assets/img/bg_sm.jpg');
      background-repeat: no-repeat;
      background-size: 10rem 17.8rem;
      height: 17.8rem;
    }

    .shouye header {
      height: 0.8rem;
    }

    .shouye .contain_bg #start_game {
      width: 3rem;
      margin-top: 8rem;
    }

    .shouye .contain_bg #register {
      width: 3rem;
    }

    .shouye .contain_bg #start_game_text {
      width: 6rem;
      padding: 0.3rem;
    }

    .shouye .introduce {
      //display: static;
      background-color: #0E151F;
      background-image: none;
      height: calc(17.78666667rem - 3rem);
      .el-col {
        /*height: 5.04rem; !*450/750*9*!*/
      }
      .el-col:last-child {
        height: 6rem;
      }
    }

    .shouye .introduce .el-carousel__container {
      //width: 100%;
      height: 5rem;
      margin-bottom: 0.1rem;
      background-size: 100% auto;
      background-repeat: no-repeat;
    }

    .shouye .introduce .intr_text {
      height: 7rem;
      overflow: auto;
    }

    .shouye footer {
      height: 3rem;
      padding-top: 0.1rem;
    }

    .shouye footer > div:first-child {
      height: 0.5rem;
      overflow: hidden;
    }

    .shouye .introduce #news_center {
      position: absolute;
      top: -4.2rem;
      left: 50%;
      transform: translate(-50%, 0);
      width: 1.5rem;
      border-radius: 1.5rem;
      background-color: red;
    }
  }

  /*手机横屏*/
  @media screen and (orientation: landscape) and (max-width: 750px) {
    #two_code {
      display: none;
    }

    .shouye .introduce {
      background-color: #0E151F;
      background-image: none;
      height: 11.24437781rem;
      .el-col {
        height: 5rem;
        .el-carousel {
          height: 4rem;
        }
        .intr_text {
          height: 4rem;
        }
      }
    }

    .shouye footer {
      height: 3rem;
    }
  }
</style>
