<template>
    <div style="float:left;width:100%;padding:0px 0px 10px 60px">
        <div style="float:left;"><img style="text-align:center;height:60px" src="../images/top.jpg" /></div>
        <el-card
        style="float:left;
        width:90%;height:500px ">
        <div style="float:left"><p>微博用户管理</p></div>
        <el-table
        height="400"
      :data="userTable"
      style="width: 100%">
        <el-table-column
        label="序号"
        type="index"
        width="70"
        align="center">
        </el-table-column>
        <el-table-column
        property="email"
        label="邮箱"
        align="center">
        </el-table-column>
        <el-table-column
        property="name"
        label="昵称"
        align="center">
        </el-table-column>
        <el-table-column
        property="time"
        label="注册日期"
        align="center">
        </el-table-column>
        <el-table-column
        property="agoLogin"
        label="上次登陆日期"
        align="center">
        </el-table-column>
        <el-table-column
        property="state"
        label="账号状态"
        width="120"
        align="center">
        </el-table-column>
        <el-table-column
        align="center">
          <template slot="header" slot-scope="scope">
            <el-input
              prefix-icon="el-icon-search"
              v-model="search"
              size="mini"
              placeholder="输入用户昵称搜索" 
              width="50"/>   
          </template>
          <template slot-scope="scope" >
              <el-button
              size="mini"
              type="primary"
              plain
            >封禁</el-button> 
          </template>
        </el-table-column>
      </el-table>
        
            
        </el-card>
    </div>
</template>
<script>
  export default {
      //计算函数，处理查询到的通知数据
    computed:{
        userTable: function() {
            return this.userList.filter(item => {
                if (
                    item.name.includes(this.search) ) {
                    return item;
                }
            });
        },
    },
      data() {
        return {
            userList: [{
          email: '88888888@qq.com',
          name: '王小虎',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        }, {
          email: '88888888@qq.com',
          name: '张三',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '李四',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '王五',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '王小虎',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '王小虎',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '王小虎',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '王小虎',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '王小虎',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '王小虎',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '王小虎',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },{
          email: '88888888@qq.com',
          name: '王小虎',
          time: '2020-02-02 18:00:00',
          agoLogin:'2020-03-02 18:00:00',
          state:'正常'
        },],
        search: ''
        }
      },
      methods:{},
      created(){
        console.log("xxxx")
      }
  }
</script>