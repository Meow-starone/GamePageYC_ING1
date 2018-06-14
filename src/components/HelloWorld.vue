<template>
  <div class="shouye">
    <header>头部</header>
    <div class="contain_bg">

    </div>
    <div class="introduce">
      <div class="intr_img">
        图片
      </div>
      <div class="intr_text">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">最新</el-menu-item>
          <el-menu-item index="2">新闻</el-menu-item>
          <el-menu-item index="3">活动</el-menu-item>
          <el-menu-item index="4">公告</el-menu-item>
          <el-menu-item index="5"> +</el-menu-item>
        </el-menu>
        <div class="intr_text_li">
          <div>如何安装NAS钱包--PC</div>
          <div>如何安装NAS钱包--PC</div>
          <div>如何安装NAS钱包--PC</div>
          <div>如何安装NAS钱包--PC</div>
          <div>如何安装NAS钱包--PC</div>
          <div>如何安装NAS钱包--PC</div>
        </div>
      </div>
    </div>
    <footer>
      底部
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .shouye {
    width: 100%;
    height: 100%;
    overflow: auto;
    header {
      height: 50px;
      line-height: 50px;
      background: #0C121E;
    }
    .contain_bg {
      width: 100%;
      height: calc(100% - 50px);
    }
    .introduce {
      height: 75%;
      width: 100%;
      display: flex;
      padding: 10%;
      .intr_img {
        flex: 1;
      }
      .intr_text {
        flex: 1;
        background: #151E2F;
        .el-menu {
          background-color: inherit;
          border-bottom: 1px solid #151E2F;
          color: #F9FEF4;
          display: flex;
          .el-menu-item {
            flex: 1;
          }
        }
        .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
          background-color: inherit;
        }
        .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
          background-color: inherit;
        }
        .intr_text_li {
          height: 80%;
          text-align: left;
          color: #868A91;
          padding-left: 50px;
          div {
            height: 16.667%;
            /*line-height:*/
          }
        }
      }
    }
    footer {
      height: 10%;
      background: #0B111D;
    }

    @media screen and (min-width: 750px) {
      .contain_bg {
        background-image: url('../assets/img/bg_big.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    @media screen and (max-width: 750px) {
      .contain_bg {
        background-image: url('../assets/img/bg_small.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
</style>
