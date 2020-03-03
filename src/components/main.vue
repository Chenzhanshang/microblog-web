<template>
    <el-row :gutter="20">
        <el-col :span="13">
            <div class="left">
                <div style="float:left;"><img style="text-align:center;height:60px" src="../images/top.jpg" /></div>
                <div style="padding-left:20px">
                    <p  
                    style="float:left;
                    width:100%;
                    text-align:left"
                    @click="cli">
                        有什么新鲜事想告诉大家:
                    </p>
                    <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="textarea">
                    </el-input>
                    
                </div>
                <div style="float:right;
                    width:100%;
                    text-align:right;
                    padding:10px 0px 20px 0px">
                    <el-button type="warning" size="small" plain>
                        发布
                    </el-button>
                </div>
                <div 
                v-for="message in messageList" 
                :key="message.id" 
                style="padding-top:25px;">
                    <el-card class="box-card" >
                        <div style="float:left;width:10%" >
                            <img style="width:50px;height:50px;" :src="url" />
                       </div>
                       <div 
                       style="float:left;
                       padding-left:0px;
                       width:90%"  >
                            <div 
                            style="color:#25AFF3;
                            float:left;
                            width:100%;
                            text-align:left;
                            margin-left:20px">
                                <span>
                                    {{message.username}}<br/>
                                </span>
                            </div>
                            <div 
                            style="margin:15px 0px 10px 20px;
                            text-align:left">
                                <span >
                                    {{message.context}}<br/>
                                </span>
                            </div>
                            <div style="float:left">
                                <span 
                                style="color:#25AFF3;
                                font-size:13px;
                                margin-left:20px">
                                    {{message.time}}
                                </span>
                            </div>
                            <div 
                            style="float:rignt ; 
                            font-size:13px;
                            color:#25AFF3">
                                已赞（{{message.like}}）|转发（{{message.transmit}}）|评论（{{message.reply}}）|收藏
                            </div>
                       </div>
                    </el-card>
                </div>
            </div>
        </el-col>
        
        <el-col :span="7">
            <div class="right" 
            style="margin:30px 0px 0px 120px;
            width:100%">
                <el-card  
                style="width:80%">
                    <div style="text-align:center">
                        <img style="width:50px;height:50px; border-radius:50% 50%;" src="../images/userimg.jpg" />
                    </div>
                    <div  style="text-align:center">
                        {{user.username}}
                    </div>
                    <div 
                    style="float:left;padding-left:20px">
                        <h3> 
                            {{user.attention}}
                        </h3>
                        <p>关注</p>
                    </div>
                    <div 
                    style="float:left;
                    padding-left:60px">
                        <h3> 
                            {{user.fans}}
                        </h3>
                        <p>粉丝</p>
                    </div>
                    <div 
                    style="float:left;
                    padding-left:60px">
                        <h3> 
                            {{user.microblog}}
                        </h3>
                        <p>微博</p>
                    </div>
                </el-card>
                <div 
                style="float:left;
                padding:20px 0px 20px 20px;
                color:#25AFF3" >
                    <a>个人账户设置</a>
                </div>
                <el-card  
                style="width:80%">
                    <div 
                    style="float:left;
                    padding:20px 0px 20px 20px;
                    color:#25AFF3" >
                    <span>
                        可能感兴趣的人
                    </span>
                    </div>
                    <div 
                    style="float:right;
                    padding:20px 20px 20px 0px;
                    color:#25AFF3" >
                        <span>
                            <i class="el-icon-refresh-right"></i>换一换
                        </span>
                    </div>
                    <div 
                    style="float:left;padding-top:20px" 
                    v-for="usr in userList" 
                    :key="usr.id">
                        <div 
                        style="float:left">
                            <img style="width:50px;height:50px; border-radius:50% 50%;" :src="url" />
                            </div>
                        <div 
                        style="float:left;
                        padding-left:30px;">
                        <div 
                        style="float:left;
                        color:#25AFF3">
                            <span>
                                {{usr.username}}
                            </span>
                        </div>
                        <br/>
                        <div style="float:left;">
                            <p>签名：{{usr.signature}}</p>
                        </div>
                        </div>
                        <el-button 
                        type="warning" 
                        size="small" 
                        plain>
                        +关注
                        </el-button>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>
<script>
  export default {
      data() {
        return {
            textarea: '',
            url: null,
            user:{username:'张三',attention:57,fans:20, microblog :2},
            userList:[{id:1,username:'测试1',signature:'签名信息'},
            {id:2,username:'测试2',signature:'签名信息'},
            {id:3,username:'测试3',signature:'签名信息'},],
            messageList:[{id:0,username:'张三',image:'../images/userimg.jpg',context:'xxxxxxxxxxxxx',time:'2020-02-02 02:02:02',like:2,reply:2,transmit:1},
            {id:1,username:'李四',image:'../images/userimg.jpg',context:'xxxxxxxxx',time:'2020-03-01 00:00:00',like:2,reply:2,transmit:1},
            {id:2,username:'王五',image:'../images/userimg.jpg',context:'xxxxxxxxx',time:'2020-03-01 00:00:00',like:3,reply:4,transmit:2},
            {id:3,username:'赵六',image:'../images/userimg.jpg',context:'xxxxxxxxx',time:'2020-03-01 00:00:00',like:1,reply:1,transmit:1},
            {id:4,username:'田七',image:'../images/userimg.jpg',context:'xxxxxxxxx',time:'2020-03-01 00:00:00',like:2,reply:2,transmit:1}]
        }
      },
      methods:{
          cli(){
              console.log("点击了")
          }
      },
      created(){
          this.url = require('../images/userimg.jpg')
          
      }
  }
</script>