<template>
  <div class="wrapper">
    <div class="bg"></div>
    <div class="login_main">
      <div class="logo">
        <span>Kevin-blog</span>
      </div>
      <div class="content">
        <el-form class="loginform" :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="userName">
            <el-input
              class="login_user_info"
              auto-complete="off"
              prefix-icon="el-icon-user"
              placeholder="User name"
              v-model="loginForm.userName"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              class="login_user_info"
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="Password"
              auto-complete="off"
              v-model="loginForm.password"
            />
          </el-form-item>
          <el-form-item>
            <el-button class="login_user_info" type="primary" @click="submitForm('loginForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <div class="links">
          <router-link to="/home">Back to home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
const Request = require("@/utils/HttpUtil");
export default {
  name: "Login",
  created: function() {},
  data: function() {
    return {
      loginForm: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          {
            required: true,
            message: "Please input user name",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(["set_User"]),
    async Login(userName, password) {
      var ret = await Request.Login(userName, password);
      if (ret) {
        if (ret.result) {
          this.set_User({ token: ret.msg, name: "" });
          alert("Login successful");
          this.$router.push({ name: "Home" });
        } else {
          alert("Login failed");
        }
      }
      console.log(ret);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.Login(this.loginForm.userName, this.loginForm.password);
        } else {
          console.log("error");
          return false;
        }
      });
    },
    resetForm: formName => {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
}
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background: url("/static/login_bg.svg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50%;
}
.login_main {
  display: flex;
  height: 100%;
  min-height: 730px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.logo {
  display: flex;
  justify-content: center;
  width: 300px;
}
.content {
  display: flex;
  flex-direction: column;
}
.loginform {
  margin-top: 30px;
}
.login_user_info {
  width: 100%;
}
.footer {
  display: flex;
  justify-content: center;
}
.links a {
  font-size: 13px;
  text-decoration: unset;
  color: #fff;
}
</style>