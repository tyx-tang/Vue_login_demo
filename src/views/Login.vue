<template>
  <div class="wrapper">
    <div class="part-hearder">
      <div class="hd-main">
        <span class="hd-title">妈咪店</span>
        <span class="hd-text">欢迎登录</span>
      </div>
    </div>
    <div class="part-main">
      <div class="part-content">
        <div class="info-headline">
          商家登录
          <span class="headline-text">
            还没有账号？免费
            <button type="button" class="el-button-text">
              <span>注册 >></span>
            </button>
          </span>
        </div>
        <form class="content-form">
          <div class="el-form-item">
            <label class="el-form-item_label">手机号码：</label>
            <div class="el-form-item_content">
              <div class="form-input el-input">
                <input id="tel_input" autocomplete="off" placeholder="请输入手机号" type="text" rows="2" validateevent="true" class="el-input-inner">
              </div>
            </div>
          </div>
          <div class="el-form-item">
            <label class="el-form-item_label">密码：</label>
            <div class="el-form-item_content">
              <div class="form-input el-input">
                <input id="pwd_input" autocomplete="off" placeholder="8~12位字符" type="password" rows="2" validateevent="true" class="el-input-inner">
              </div>
            </div>
          </div>
          <div class="el-form-item">
            <div class="el-form-item_content">
              <div>
                <label class="el-checkbox">
                  <span class="el-checkbox_input">
                    <span class="el-checkbox-inner">
                    </span>
                    <input type="checkbox" class="el-checkbox_original">
                  </span>
                  <span class="el-checkbox_label">记住账号密码</span>
                </label>
                <button class="el-btn-pull-right">
                  <span>忘记密码?</span>
                </button>
              </div>
            </div>
          </div>
          <button type="button" @click="login" class="form-el-btn"><span>登录</span></button>
        </form>
        <div class="service-tip-box">
          <p class="pwd-tip">* 账号登录密码默认为手机号码</p>
          <p class="service-tip">有任何问题可以直接联系微信客服：mamidian01</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
import { LOGIN } from '../store/mutation_types'

export default {
  computed: {
    number () {
      console.log(1)
      return this.$store.state.login.user_num
    },
    password () {
      return store.getters.get_password
    }
  },
  store,
  methods: {
    login () {
      var regNum = /\d+/
      var regString = /[a-zA-Z]+/
      var num = document.getElementById('tel_input').value
      var password = document.getElementById('pwd_input').value
      if (num.length !== 11) {
        alert('请正确输入手机号码')
      } else if (password.length < 8 || password.length > 20) {
        alert('密码长度需在8到20位')
      } else if (regNum.test(password) && regString.test(password)) {
        var args = {
          user_num: num,
          user_password: password
        }
        var str = JSON.stringify(args)
        console.log(str)
        this.$store.commit(LOGIN, str)
        this.$router.push({
          name: 'UserInfo'
        })
      } else {
        alert('密码需包含字母和数字')
      }
    }
  }
}
</script>

<style scoped>
p{margin: 0;}
label{display: inline-block;max-width: 100%;margin-bottom: 5px;font-weight: 700;}
.part-hearder {
  position: relative;
  margin-bottom: 30px;
  padding: 25px 0;
  height: 90px;
  line-height: 40px;
  background: #3084c7;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  z-index: -1;
}
.part-hearder .hd-main {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 780px;
}
.part-hearder .hd-main .hd-title {
  display: inline-block;
  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid #fff;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  vertical-align: middle;
}
.part-hearder .hd-main .hd-text {
  display: inline-block;
  font-size: 20px;
  color: #fff;
  vertical-align: middle;
}
.part-main {
  margin: 0 auto;
  max-width: 780px;
}
.part-main .part-content {
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
}
.part-content .info-headline {
  margin-bottom: 80px;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
  height: 50px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 700;
  background-color: #f5f5f5;
  box-sizing: border-box;
}
@media screen and (max-width: 414px) {
  .part-content .info-headline {
    margin-bottom: 40px;
  }
}
.part-content .info-headline .headline-text {
  float: right;
  font-size: 14px;
  font-weight: 400;
  color: #555;
}
.el-button-text {
  border: none;
  color: #20a0ff;
  background: 0 0;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  margin: 0;
  padding: 10px 0 10px 0;
  border-radius: 4px;
  outline: none;
}
.part-main .content-form {
  width: 100%;
  max-width: 550px;
  margin: 0 auto 30px;
}
.part-main .content-form::before {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.part-main .content-form::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.part-main .content-form .el-form-item {
  margin-bottom: 22px;
}
.part-main .content-form .el-form-item::before {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.part-main .content-form .el-form-item::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.part-main .content-form .el-form-item .el-form-item_label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #48576a;
  line-height: 1;
  padding: 11px 12px 11px 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 8em;
}
.part-main .content-form .el-form-item .el-form-item_content {
  line-height: 36px;
  position: relative;
  font-size: 14px;
  margin-left: 8em;
}
.part-main .content-form .el-form-item .el-form-item_content::before {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.part-main .content-form .el-form-item .el-form-item_content::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.content-form .form-input {
  width: 90%;
  max-width: 380px;
}
.el-input {
  position: relative;
  font-size: 14px;
}
.el-input-inner {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  box-sizing: border-box;
  color: #1f2d3d;
  font-size: inherit;
  height: 36px;
  line-height: 1;
  outline: 0;
  padding: 3px 10px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
  display: inline-block;
}
.part-main .content-form .el-checkbox {
  font-weight: 400;
  color: #1f2d3d;
  max-width: 100%;
  margin-bottom: 5px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
}
.el-checkbox .el-checkbox_input {
  cursor: pointer;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  line-height: 1;
  outline: 0;
  vertical-align: middle;
}
.el-checkbox .el-checkbox_input .el-checkbox-inner {
  display: inline-block;
  position: relative;
  border: 1px solid #bfcbd9;
  border-radius: 4px;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  background-color: #fff;
  z-index: 1;
  transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
}
.el-checkbox .el-checkbox_input .el-checkbox-inner::after {
  content: "";
  box-sizing: content-box;
  -webkit-box-sizing: content-box;
  border: 2px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 8px;
  left: 5px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 4px;
  transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
  transform-origin: center;
}
.el-checkbox .el-checkbox_input .el-checkbox_original {
  margin:  4px 0 0;
  line-height: normal;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 0;
  opacity: 0;
  outline: 0;
  position: absolute;
  margin: 0;
  width: 0;
  height: 0;
  left: -999px;
}
.el-checkbox .el-checkbox_label {
  font-size: 14px;
  padding-left: 5px;
}
.el-btn-pull-right {
  float: right!important;
  color: #999;
  font-size: 14px;
  border: none;
  background: 0 0;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  margin: 0 15px 0 0;
  padding: 10px 0 10px 0;
  border-radius: 4px;
  outline: none;
}
.part-main .content-form .form-el-btn{
  overflow: hidden;
  display: block;
  margin: 0 auto;
  width: 200px;
  background-color: #20a0ff;
  color: #fff;
  border-color: #20a0ff;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  padding: 10px 15px;
  outline: none;
}
.part-content .service-tip-box .pwd-tip {
  font-size: 13px;
  color: #999;
  text-align: center;
  margin-bottom: 5px;
}
.part-content .service-tip-box .service-tip {
  font-size: 14px;
  color: #999;
  text-align: center;
  margin-bottom: 20px;
}
</style>
