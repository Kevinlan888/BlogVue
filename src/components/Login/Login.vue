<template>
  <div>
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item label="User Name" prop="userName">
        <el-input auto-complete="off" v-model="loginForm.userName" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" auto-complete="off" v-model="loginForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
const Request = require("@/utils/HttpUtil");
export default {
  name: "Login",
  created: function() {

  },
  data: function() {
    return {
      loginForm: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          {
            required: true, message: "Please input user name", trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(['set_User']),
    async Login(userName, password) {
      var ret = await Request.Login(userName, password);
      if (ret) {
        if (ret.result) {
          this.set_User({token: ret.msg, name: ''});
          alert("Login successful");
        } else {
            alert("Login failed");
        }
      }
      console.log(ret);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
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

<style>
</style>