<template>
    <el-row :gutter="20">
        <el-col :span="13">
            <div class="left">
                <div style="float:left;"><img style="text-align:center;height:60px" src="../images/top.jpg" /></div>
                <div style="float:left;width:100%;padding:0px 0px 10px 60px">

                    <el-card
                    style="float:left;
                    width:90%; ">
                        <div style="float:left" >
                            <img style="width:80px;height:80px;" :src="user.url" />
                       </div>
                       <div 
                       style="float:left;
                       padding-left:0px;
                       width:70%"  >
                            <div 
                            style="color:#25AFF3;
                            float:left;
                            width:100%;
                            text-align:left;
                            margin-left:20px;
                            font-size:14px;">
                                <span>
                                    邮箱：{{user.email}}<br/>
                                </span>
                            </div>
                            <div 
                            style="
                            float:left;
                            width:100%;
                            text-align:left;
                            margin-left:20px;
                            font-size:14px">
                                <span>
                                    {{user.address}}<br/>
                                </span>
                            </div>
                            <div 
                            style="
                            float:left;
                            width:100%;
                            text-align:left;
                            margin-left:20px;
                            font-size:14px">
                                <span>
                                    签名：{{user.signature}}<br/>
                                </span>
                            </div>
                            <div 
                            style="color:#25AFF3;
                            float:left;
                            width:100%;
                            text-align:left;
                            margin-left:20px;
                            font-size:14px">
                                <span>
                                    修改头像|修改签名
                                </span>
                            </div>
                       </div>
                    </el-card>
                </div>
                
                <div 
                v-for="(message,index) in this.messageList" 
                :key="message.id" 
                style="float:left;padding:6px 0px 6px 60px;width:90%">
                    <el-card class="box-card" style="float:left;
                width:100%;" >
                        <div v-if="index == 0"
                        style="float:left ; 
                        font-size:13px;
                        color:#25AFF3;
                        padding-left:30px">
                            全部
                        </div>
                        <div v-if="index == 0"
                        style="float:left ; 
                        font-size:13px;
                        color:#25AFF3;
                        padding-left: 30px">
                            原创
                        </div>
                        <div v-if="index == 0"
                        style="float:left ; 
                        font-size:13px;
                        color:#25AFF3;
                        padding-left: 30px">
                            转发
                        </div>
                       <div 
                       style="float:left;
                       padding-left:0px; width:100%;"   >
                            <div 
                            style="margin:10px 0px 10px 20px;
                            text-align:left;width:100%;">
                                <span >
                                    {{message.context}}<br/>
                                </span>
                            </div>
                            <div style="float:left">
                                <span 
                                style="color:#25AFF3;
                                font-size:13px;
                                margin-left:20px;">
                                    {{message.time}}
                                </span>
                            </div>
                            <div 
                            style="float:rignt ; 
                            font-size:13px;
                            color:#25AFF3;">
                                删除|赞（{{message.like}}）|转发（{{message.transmit}}）|评论（{{message.reply}}）
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
                style="width:80%;font-size:14px">
                    <div 
                    style="float:left;padding-left:20px">
                        <h3> 
                            {{user.attention}}
                        </h3>
                        <p  style="color:#25AFF3">关注</p>
                    </div>
                    <div 
                    style="float:left;
                    padding-left:60px">
                        <h3> 
                            {{user.fans}}
                        </h3>
                        <p style="color:#25AFF3">粉丝</p>
                    </div>
                    <div 
                    style="float:left;
                    padding-left:60px">
                        <h3> 
                            {{user.microblog}}
                        </h3>
                        <p style="color:#25AFF3">微博</p>
                    </div>
                </el-card>
                <div 
                style="float:left;
                padding:20px 0px 20px 20px;
                color:#25AFF3;font-size:14px" >
                    <a>个人账户设置</a>
                </div>
                <el-card  
                style="width:80%;font-size:14px">
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
            url:require('../images/userimg.jpg'),
            user:{username:'张三', url:require('../images/userimg.jpg'),address:'地球',email:'88888888@qq.com', signature :'签名信息',attention:20,microblog:20,fans:20},
            userList:[{id:1,username:'测试1',signature:'签名信息'},
            {id:2,username:'测试2',signature:'签名信息'},
            {id:3,username:'测试3',signature:'签名信息'},],
            messageList:[{id:0,username:'张三',image:'../images/userimg.jpg',context:'xxxxxxxxxxxxx',time:'2020-02-02 02:02:02',like:2,reply:2,transmit:1},
            {id:1,image:'../images/userimg.jpg',context:'xxxxxxxxx',time:'2020-03-01 00:00:00',like:2,reply:2,transmit:1},
            {id:2,image:'../images/userimg.jpg',context:'xxxxxxxxx',time:'2020-03-01 00:00:00',like:3,reply:4,transmit:2},
            {id:3,image:'../images/userimg.jpg',context:'xxxxxxxxx',time:'2020-03-01 00:00:00',like:1,reply:1,transmit:1},
            {id:4,image:'../images/userimg.jpg',context:'xxxxxxxxx',time:'2020-03-01 00:00:00',like:2,reply:2,transmit:1}]
        }
      },
      methods:{
      },
  }
</script>