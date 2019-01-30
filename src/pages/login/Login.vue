<template>
  <div id="container">
    <div class="login">
      <div class="title">
        <h1>用户登陆</h1>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  class="login-btn" @click="submitForm('ruleForm')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        ruleForm:{
          name:'',
          password:''
        },
        rules:{
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      }
    },
    methods:{
      submitForm(formName){
        this.$router.push('home')
      },
    }
  }
</script>

<style scoped>
  #container{
    position: relative;
    width:100%;
    height:100%;
    background: linear-gradient(#d6fbff, #6cf0ff)
  }
  .login{
    box-sizing: border-box;
    width:500px;
    height:350px;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow:5px 5px 5px #1b9eff;
    padding:20px 50px 0 0;
  }
  .login .title h1{
    text-align: center;
    font-size: 22px;
  }
  .login .demo-ruleForm{
    margin-top: 40px;
  }
  .login .demo-ruleForm .login-btn{
    display: inline-block;
    width:300px;
    margin-top: 40px;
    background-color: darkorange;
    color:#ffffff;
    font-size: 16px;
    letter-spacing:10px;
  }
</style>
