<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-registerForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="registerForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @input="handleInput"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="registerForm.rePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <footer>©meituan.com 京ICP证070791号 京公网安备11010502025545号</footer>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须是4-16位的数字字母下划线组成！"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须是6-16位的数字字母下划线组成！"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validateRePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: "",
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUserName, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        rePassword: [{ validator: validateRePassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.register(this.registerForm).then((res) => {
            if (res.data.msg == '注册成功') {
              this.$router.push({ name: "login" });
            } else {
              alert(res.data.msg);
            }
          });
        } else {
          return false;
        }
      });
    },
    handleInput() {
      let strongth =
        this.registerForm.password.match(/[A-Za-z]+/g) &&
        this.registerForm.password.match(/[0-9]+/g) &&
        this.registerForm.password.match(/_/g);
      if (!this.registerForm.password) {
        this.strengthClass = "";
      } else if (
        this.registerForm.password.length > 13 ||
        (strongth && this.registerForm.password.length >= 6)
      ) {
        this.strengthClass = "strong";
      } else if (this.registerForm.password.length < 6) {
        this.strengthClass = "week";
      } else {
        this.strengthClass = "normal";
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>