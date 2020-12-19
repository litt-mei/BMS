<template>
  <div class="login">
    <h1>后台管理系统</h1>
    <div class="log1">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item label="" prop="checkUsername">
          <el-input
            type="text"
            v-model="ruleForm.checkUsername"
            autocomplete="off"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" 
          @click="handleLogin('ruleForm')"
            >登录</el-button
          >
        </el-form-item>

        <p>温馨提示</p>
        <p>未登录过的新用户，自动注册.</p>
        <p>注册过的用户可凭账号密码登录</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import myaxios  from '@/myaxios/myaxios'
import {login} from '@/api/api'

export default {
  name: "Login",
  components: {},

  data() {

    return {
      ruleForm: {
        checkUsername: "",
        checkPass: "",
      },
      rules: {
        checkUsername: [{ required: true, message: '请输入用户名', trigger: "blur" }],
        checkPass: [{ required: true, message: '请输入密码',trigger: "blur" }],
      },
      
    };
  },
  methods: {
    handleLogin: function (ruleForm) {
      console.log("提交信息");
      console.log(this.$refs[ruleForm]);
      this.$refs[ruleForm].validate(async (valid) => {
        if (valid) {
          // 发请求 拿数据
        //   this.$message("校验成功了");
          // localhost:8080
          let result = await login({
            user_name: this.ruleForm.checkUsername,
            password: this.ruleForm.checkPass,
          });
        //   console.log(result);
        //   console.log(result.status);
          if(result.status==1){
              this.$message.success('登录成功')

              this.$router.push('/home');
          }else{
              this.$message.error('登录失败')
          }
        } else {
          this.$message({
            type: "warning",
            message: "校验没有成功",
          });
        }
      });
    },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: #324057;
  h1 {   
    color: #fff;
    margin: 0;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%,0);
  }
  .log1 {
    margin: -200px 0 0 -165px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    .el-button {
      width: 100%;
    }
    p {
      color: #f40;
    }
  }
}
</style>
