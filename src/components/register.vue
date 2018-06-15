<template>
  <el-dialog :visible.sync="dialogData.dialogVisible" id="register_dialog">
    <div class="all">
      <div class="header">
        <!-- <span>注册账号</span> -->
      </div>

      <div class="m-form">

        <div>
          <label for="nickname"></label>
          <input id="nickname" placeholder="请输入6-12位帐户名" name="nickname" type="txt" v-model="nickname"
                 class="u-txt" required pattern="^[a-zA-Z0-9_-||\u4e00-\u9fa5]{6,12}$"><br/>
        </div>

        <div>
          <label for="address"></label>
          <input id="verification" placeholder="请输入Nas钱包地址" name="address" type="txt" class="u-txt"
                 v-model="address"><br/>

        </div>
        <div>
          <label for="password"></label>
          <input id="password" placeholder="请输入8-12位密码" name="password" type="password" class="u-txt"
                 v-model="password"><br/>

        </div>
        <div>
          <label for="invitation"></label>
          <input id="invitation" placeholder="请输入邀请码" name="invitation" type="txt" class="u-txt"
                 v-model="invitation"><br/>

        </div>

        <div>
          <button class="register" name="loginBtn" @click="register">注 册</button>
        </div>
      </div>
    </div>
  </el-dialog>

</template>

<script>
  import axios from 'axios'

  export default {
    props: ['dialogData'],
    data() {
      return {
        nickname: '',
        address: '',
        password: '',
        invitation: '',
      };
    },
    methods: {
      register() {
        let sendData = {
          nickname: this.nickname,
          password: this.password,
          address: this.address,
          inviteCode: this.invitation
        }
        let reg1 = /^[a-zA-Z0-9]{6,12}$/;
        let areg1 = reg1.test(this.nickname);

        let reg2 = /^[a-zA-Z0-9]{8,12}$/;
        let areg2 = reg2.test(this.password);
        if (areg1 == false) {

          // this.dialogData.inviteCodeDialogVisible = true;


          this.nickname = '';
          this.$message.error('用户名必须在6-12位');
        } else if (areg2 == false) {
          this.password = '';
          this.$message.error('密码长度必须在8-12位');
        } else {
          axios.post('http://43.255.52.14:9000/register', sendData)
            .then((res) => {
              if (res.data.code == 0) {
                this.dialogData.dialogVisible = false;
                console.log(res);
                this.$notify({
                  title: '注册成功',
                  message: '你的邀请码是:' + res.data.data.inviteStr + '；邀请码最多使用10次',
                  type: 'success',
                  duration: 0,
                  offset: 100
                });
              }
              else if (res.data.msg === 'nickname already exist') {

                this.$message('该昵称已注册！')

              }
              else if (res.data.msg === 'address already exist') {

                axios.get('http://43.255.52.14:9000/inviteCode/'+this.address).then((res) => {
                  if (res.data.code == 0) {
                    console.log(res);
                    this.$notify({
                      title: '钱包地址已注册',
                      message: '你的邀请码是:' + res.data.data.inviteId + ',(邀请码次数：' + res.data.data.residueCount + '/10)',
                      duration: 0,
                      offset: 100
                    });
                  } else {
                    this.$message('该钱包地址已注册！')
                  }
                }).catch((err) => {
                })
              }
              else {
                alert(res.data.msg);
              }
            })
            .catch(function (error) {
            });
        }

      }

    },
    mounted() {
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  #register_dialog {
    .el-dialog {
      width: 350px;
      background-color: rgba(0, 0, 0, 0);
    }
    .el-dialog__header {
      padding: 0;
    }
    .el-dialog__body {
      border: 1px solid #eee;
      border-radius: 10px;
      border-color: rgba(255, 255, 255, 0.4);
      background-color: rgba(0, 0, 0, 0.6);
      padding: 0;
    }
  }
</style>
<style lang="less" rel="stylesheet/less" scoped>
  .m-form input {
    padding-left: 10px;
  }

  .all {
    width: 350px;
    height: 500px;
    background-color: rgba(32, 42, 56, 0.3);
    text-align: center;
    border-radius: 6px;
    margin: 0 auto;
  }

  .header {
    background-image: url('../assets/img/zca.png');
    background-repeat: no-repeat;
    background-size: 160px 35px;
    background-position: center;
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: white;
    font-size: 24px;
  }

  .header span {
    letter-spacing: 16px;
    color: #0d131f;
  }

  .m-form {
    width: 100%;
    /*	height:8.47rem;*/
    /*background-color: pink; */
  }

  .m-form input {
    border: none;
    outline: medium;
    width: 90%;
    height: 60px

  }

  .u-txt {
    height: 60px;
    width: 300px;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .m-form button {
    width: 300px;
    height: 50px;
    color: white;
    /*border: 1px solid #ddd;*/
    /*cursor: pointer;*/
    background-color: #192332;
    margin-top: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .m-form button:active {
    background-color: gray;
  }
</style>
<style>
  @media screen and (orientation: portrait) and (max-width: 750px) {
    .el-dialog {
      width: 100% !important;
    }
  }
</style>
