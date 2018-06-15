<template>
  <div class="TextPage">
    <div class="bannercolor">
      <router-link to="/HelloWorld"><img src="../assets/img/logo.png"></router-link>
    </div>
    <div class="bannerimg"></div>
    <div id="newstxt" class="newstxt">
      <img src="../assets/img/b_r.png">
      <div>新闻资讯</div>
      <img src="../assets/img/b_l.png">
    </div>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="最新" name="first">
        <div id="notice1" class="notice1">
          <div id="noticeico" class="noticeico">
            <img src="../assets/img/line_r.png">
            <div>活动</div>
            <img src="../assets/img/line_l.png">
          </div>
          <div class="noticetittle">
            <div id="noticetittleline1" class="noticetittleline1">
              <div>
                <router-link to="/Tittle1">邀好友同玩 钻石送不停</router-link>
              </div>
              <div>2018-6-15</div>
            </div>
            <div class="noticetittleline2">
              星云链首款顶视角挂机爆肝游戏《异虫危机》今日开服，邀好友同玩送钻石！<br>
              即日起，凡注册成功用户均可以获得邀请码一枚。邀好友同玩，被邀请人注册账号时填入邀请码，在被邀请人正式进入游戏后，邀请人和被邀请人均可获得一笔钻石奖励。
              被邀请人注册成功后也将获得邀请码。
            </div>
          </div>
        </div>

        <div id="notice1" class="notice1">
          <div id="noticeico" class="noticeico">
            <img src="../assets/img/line_r.png">
            <div>公告</div>
            <img src="../assets/img/line_l.png">
          </div>
          <div class="noticetittle">
            <div id="noticetittleline1" class="noticetittleline1">
              <div>
                <router-link to="/Tittle2">如何安装NAS钱包——移动端</router-link>
              </div>
              <div>2018-6-15</div>
            </div>
            <div class="noticetittleline2">
              下载星云钱包NAS nano地址：https://nano.nebulas.io/ <br>
              按照APP的提示操作即可。
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="新闻" name="second">

      </el-tab-pane>
      <el-tab-pane label="活动" name="third">

        <div id="notice1" class="notice1">
          <div id="noticeico" class="noticeico">
            <img src="../assets/img/line_r.png">
            <div>活动</div>
            <img src="../assets/img/line_l.png">
          </div>
          <div class="noticetittle">
            <div id="noticetittleline1" class="noticetittleline1">
              <div>
                <router-link to="/Tittle1">邀好友同玩 钻石送不停</router-link>
              </div>
              <div>2018-6-15</div>
            </div>
            <div class="noticetittleline2">
              星云链首款顶视角挂机爆肝游戏《异虫危机》今日开服，邀好友同玩送钻石！<br>
              即日起，凡注册成功用户均可以获得邀请码一枚。邀好友同玩，被邀请人注册账号时填入邀请码，在被邀请人正式进入游戏后，邀请人和被邀请人均可获得一笔钻石奖励。
              被邀请人注册成功后也将获得邀请码。
            </div>
          </div>
        </div>

        <div id="notice1" class="notice1">
          <div id="noticeico" class="noticeico">
            <img src="../assets/img/line_r.png">
            <div>活动</div>
            <img src="../assets/img/line_l.png">
          </div>
          <div class="noticetittle">
            <div id="noticetittleline1" class="noticetittleline1">
              <div>
                <router-link to="/Tittle4">异虫危机劲爆开服</router-link>
              </div>
              <div>2018-6-15</div>
            </div>
            <div class="noticetittleline2">
              为鼓励玩家加速冲关，将举行为期5天的冲排名活动！我们将会为排名最靠前的30位玩家准备丰厚的奖品，奖品内容包括但不限于NAS、游戏道具。
              活动期间请玩家们努力突破关卡，冲击更高层！
            </div>
          </div>
        </div>

        <div id="notice1" class="notice1">
          <div id="noticeico" class="noticeico">
            <img src="../assets/img/line_r.png">
            <div>活动</div>
            <img src="../assets/img/line_l.png">
          </div>
          <div class="noticetittle">
            <div id="noticetittleline1" class="noticetittleline1">
              <div>
                <router-link to="/Tittle3">庆开服</router-link>
              </div>
              <div>2018-6-15</div>
            </div>
            <div class="noticetittleline2">
              为庆祝开服，《异虫危机》将为所有支持本游戏的玩家送上大礼！自6月15日起至6月19日18时，凡是累计登录游戏三天，且每天累计登录3小时的玩家，将获得由官方直接派发的NAS奖励。
            </div>
          </div>
        </div>

      </el-tab-pane>
      <el-tab-pane label="公告" name="fourth">

        <div id="notice1" class="notice1">
          <div id="noticeico" class="noticeico">
            <img src="../assets/img/line_r.png">
            <div>公告</div>
            <img src="../assets/img/line_l.png">
          </div>
          <div class="noticetittle">
            <div id="noticetittleline1" class="noticetittleline1">
              <div>
                <router-link to="/Tittle5">开服公告</router-link>
              </div>
              <div>2018-6-15</div>
            </div>
            <div class="noticetittleline2">
              《异虫危机Zerg Crisis》今日X时移动端PC端同步劲爆开服！打造星云链最激爽顶视角挂机游戏！<br>
              向低质量粗糙半成品说不！区块链游戏一样可以高品质高完成度！刺激的战斗，精致的角色设计，流畅的画面，优秀的数值成长，等你来体验！
            </div>
          </div>
        </div>

        <div id="notice1" class="notice1">
          <div id="noticeico" class="noticeico">
            <img src="../assets/img/line_r.png">
            <div>公告</div>
            <img src="../assets/img/line_l.png">
          </div>
          <div class="noticetittle">
            <div id="noticetittleline1" class="noticetittleline1">
              <div>
                <!--<router-link to="/Tittle1">如何安装NAS钱包——PC端</router-link>-->
                <el-button @click="miao" type="text">如何安装NAS钱包——PC端</el-button>
              </div>
              <div>2018-6-15</div>
            </div>
            <div class="noticetittleline2">
              1.进入下载地址，选择下载ZIP文件并解压，或复制到本地环境中（需安装GitHub）<br>
              2.打开你的chrome浏览器，在右上角选择“•••”—“更多工具（L）”—“扩展程序（E）”，打开扩展程序界面。
            </div>
          </div>
        </div>


        <div id="notice1" class="notice1">
          <div id="noticeico" class="noticeico">
            <img src="../assets/img/line_r.png">
            <div>公告</div>
            <img src="../assets/img/line_l.png">
          </div>
          <div class="noticetittle">
            <div id="noticetittleline1" class="noticetittleline1">
              <div>
                <router-link to="/Tittle2">如何安装NAS钱包——移动端</router-link>
              </div>
              <div>2018-6-15</div>
            </div>
            <div class="noticetittleline2">
              下载星云钱包NAS nano地址：https://nano.nebulas.io/ <br>
              按照APP的提示操作即可。

            </div>
          </div>
        </div>


      </el-tab-pane>
    </el-tabs>
    <div>

    </div>
  </div>
</template>

<script>
  // import act from './act'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      miao() {
        this.$message("PC端即将上线，敬请期待！")
      }
    },
    created() {
      eventHub.$on('JUST_RUN', (item) => {
        console.log(item);
      });
    },
    mounted() {
      this.activeName = this.$route.query.activeName || 'first';
    },
    components: {
      // act
    }
  };
</script>

<style scoped>
  .TextPage {
    overflow: auto;
    width: 100%;
    height: 100%;
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

  .newstxt {
    width: 10rem;
    height: 1.19rem;
    padding-left: 4.1rem;
    display: table-cell;
    vertical-align: middle;
    /*text-align: center;*/
  }

  .newstxt img:nth-child(1) {
    float: left;
    width: 0.22rem;
    height: 0.238rem;
  }

  .newstxt div:nth-child(2) {
    float: left;
    font-size: 0.214rem;
    margin: 0 0.22rem;
    margin-top: -0.02rem;
  }

  .newstxt img:nth-child(3) {
    float: left;
    width: 0.22rem;
    height: 0.238rem;
  }

  /*一列标准*/
  .notice1 {
    width: 10rem;
    height: 1.78rem;
  }

  .noticeico {
    width: 2.5rem;
    height: 1.78rem;
    float: left;
    /*background-color: pink;*/
    padding-top: 0.55rem;
  }

  .noticeico img:nth-child(1) {
    float: right;
    margin-top: -0.04rem;
    width: 0.172rem;
    height: 0.172rem;
  }

  .noticeico div:nth-child(2) {
    float: right;
    font-size: 0.16rem;
    font-weight: bold;
  }

  .noticeico img:nth-child(3) {
    float: right;
    margin-top: 0.07rem;
    width: 0.172rem;
    height: 0.172rem;
  }

  .noticetittle {
    /*background-color: yellow;*/
    height: 1.78rem;
    width: 6rem;
    float: left;
  }

  .noticetittleline1 {
    width: 6rem;
    height: 0.696rem;
  }

  .noticetittleline1 div:nth-child(1) {
    height: 0.696rem;
    width: 3.6rem;
    float: left;
    font-size: 0.214rem;
    /*margin-left: 0.2rem;*/
    text-align: left;
    padding-left: 0.8rem;
    line-height: 0.696rem;
  }

  .noticetittleline1 div:nth-child(1) button {
    font-size: inherit;
    color: inherit;
  }

  /*.noticetittleline1 div:nth-child(1) span{*/
  /*font-size:inherit;*/
  /*}*/

  .noticetittleline1 div:nth-child(2) {
    /*height: 0.696rem;*/
    width: 1rem;
    float: right;
    font-size: 0.107rem;
    margin-top: 0.33rem;
    margin-right: 1.4rem;
  }

  .noticetittleline2 {
    height: 0.696rem;
    width: 3.8rem;
    float: left;
    margin-left: 0.2rem;
    text-align: left;
    margin-left: 0.8rem;
    font-size: 0.107rem;
    line-height: 0.16rem;
  }

  .noticetittleline1 a {
    color: #393a3d;
    text-decoration: none;
  }
</style>
<style lang="less">
  .TextPage {
    .el-tabs__item {
      font-size: 0.15rem;
      margin-bottom: 0.1rem;
      flex: 1;
    }

    .el-tabs__nav-scroll {
      padding-left: 2.98rem;
    }

    .el-tabs__nav {
      width: 4rem;
      display: flex;
    }

    @media only screen and (max-width: 768px) {
      .el-tabs__item {
        font-size: 0.3rem;
        margin-bottom: 0.1rem;
        /*margin-left: 0.2rem;*/
        flex: 1;
      }

      .el-tabs__nav-scroll {
        width: 10rem;
        display: flex;
        margin-left: -0.45rem;
      }
    }
  }

</style>
<style type="text/css">
  @media only screen and (max-width: 768px) {
    #notice1 {
      width: 10rem;
      height: 5rem;
      /*background-color: pink;*/
    }

    .noticetittle .noticetittleline2 {
      height: 1rem;
      width: 6.2rem;
      float: left;
      margin-left: 0.2rem;
      text-align: left;
      margin-left: 0.8rem;
      font-size: 0.3rem;
      line-height: 0.45rem;
    }

    #noticetittleline1 div:nth-child(1) {
      height: 0.696rem;
      width: 5rem;
      float: left;
      font-size: 0.314rem;
      /*margin-left: 0.2rem;*/
      text-align: left;
      padding-left: 0.8rem;
      line-height: 0.696rem;
      /*background-color: pink;*/
      font-weight: bold;
    }

    #noticetittleline1 div:nth-child(2) {
      /*height: 0.696rem;*/
      width: 1rem;
      float: right;
      font-size: 0.107rem;
      margin-top: 0.33rem;
      margin-right: 0rem;
    }

    #noticeico img:nth-child(1) {
      float: right;
      margin-top: -0.04rem;
      width: 0.272rem;
      height: 0.272rem;
    }

    #noticeico div:nth-child(2) {
      float: right;
      font-size: 0.3rem;
      font-weight: bold;
    }

    #noticeico img:nth-child(3) {
      float: right;
      margin-top: 0.07rem;
      width: 0.272rem;
      height: 0.272rem;
    }

    #newstxt img:nth-child(1) {
      float: left;
      width: 0.22rem;
      height: 0.238rem;
      margin-top: 0.1rem;
    }

    #newstxt div:nth-child(2) {
      float: left;
      font-size: 0.344rem;
      font-weight: bold;
      margin: 0 0.22rem;
      margin-top: -0.02rem;
    }

    #newstxt img:nth-child(3) {
      float: left;
      width: 0.22rem;
      height: 0.238rem;
      margin-top: 0.1rem;
    }
  }
</style>


