<template>
    <el-row :gutter="20">
        <el-col :span="13">
            <div class="left">
                <h3 style="text-align:left;padding-left:100px;color:#3F91A9">开通微博账号</h3>
                <el-divider></el-divider>
                <el-form :rules="rules1" ref="form" :model="form" label-width="30%">
                    <el-form-item label="我的邮箱：" prop="email">
                        <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="密码：" prop="pass">
                        <el-input type="password" v-model="form.pass" autocomplete="off" placeholder="请输入你的密码"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" prop="checkPass">
                        <el-input type="password" v-model="form.checkPass" autocomplete="off" placeholder="请再次输入你的密码"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称：" prop="name">
                        <el-input v-model="form.name" placeholder="请输入你的昵称"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="性别：">
                        <el-radio-group v-model="form.sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="密保问题：">
                        <el-input v-model="form.question" placeholder="请输入你的密保问题"></el-input>
                    </el-form-item>
                    <el-form-item label="答案：">
                        <el-input v-model="form.answer" placeholder="请输入你的密保答案"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即开通</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-divider direction="vertical"></el-divider>
        </el-col>
        
        <el-col :span="7">
            <div class="right" style="margin-top:30px">
                <h4 style="text-align:left;padding-left:15px;color:#3F91A9">已有微博账号？</h4>
                <el-form ref="loginForm" :rules="rules" :model="loginForm"  class="login-form">
                    <el-form-item label="邮箱地址：" prop="email">
                        <el-input v-model="loginForm.email" placeholder="请输入邮箱地址"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="登录密码：" prop="pass">
                        <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="请输入你的登录密码"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="verifycode">
                    <el-row :span="24">
                        <el-col :span="12">
                        <el-input v-model="loginForm.verifycode" auto-complete="off" placeholder="请输入验证码" size=""></el-input>
                        </el-col>
                        <el-col :span="12">
                        <div class="login-code" @click="refreshCode">
                            <!--验证码组件-->
                            <s-identify :identifyCode="identifyCode"></s-identify>
                        </div>
                        </el-col>
                    </el-row>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login('loginForm')">登录微博</el-button>
                        <el-button type="warning" @click="adminLogin('loginForm')">管理员登录</el-button>
                    </el-form-item>
                    <a href="#">找回密码</a>
                </el-form>
                
            </div>
        </el-col>
    </el-row>
</template>
<script>
import SIdentify from '@/components/SIdentify'
  export default {
    components: { SIdentify },
    data() {
      // 验证码自定义验证规则
      const validateVerifycode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        } 
        else if (value !== this.identifyCode) {
          console.log('validateVerifycode:', value)
          callback(new Error('验证码不正确!'))
        } 
        else {
          callback()
        }
      }
      return {
        identifyCode:'',
        identifyCodes:'1234567890',
        form: {
            pass: '',
            checkPass: '',
            email: '',
            name:'',
            question:'',
            delivery: false,
            type: [],
            sex: '',
            desc: ''
        },
        loginForm:{
            verifycode:'',
            pass: '',
            email: '',
            remember:''
        },
        rules: {
          email: [
            { required: true, message: '邮箱地址不能为空', trigger: 'blur' }
          ],
          pass: [
           {required: true, message: '登录密码不可为空', trigger: 'blur'}
          ],
          verifycode: [
            { required: true, trigger: 'blur', validator: validateVerifycode }
          ]
        },
        rules1: {
          email: [
            { required: true, message: '邮箱地址不能为空', trigger: 'blur' }
          ],
          pass: [
           {required: true, message: '登录密码不可为空', trigger: 'blur'}
          ],
          checkPass: [
           {required: true, message: '确认密码不可为空', trigger: 'blur'}
          ],
          name: [
           {required: true, message: '昵称不可为空', trigger: 'blur'}
          ],
          verifycode: [
            { required: true, trigger: 'blur', validator: validateVerifycode }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
    // 生成随机数
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      // 切换验证码
      refreshCode () {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
      // 生成四位随机数字验证码
      makeCode (o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
          ]
        }
      },
      login(loginForm){
        this.$refs[loginForm].validate((valid) => {
        })
      },
      adminLogin(){
          this.$refs[loginForm].validate((valid) => {
        })
      }
    },
    created(){
      this.refreshCode ()
    }
  }
</script>

<style >
.login-form {
    border: 1px solid #DCDFE6;
    width: 120%;
    height: 100%;
    margin:  15px 15px;
    padding: 40px 40px 20px 40px;
    box-shadow: 0 0 25px #7e8aa0;
  }

</style>