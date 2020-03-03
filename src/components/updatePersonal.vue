<template>

    <div style="float:left;width:100%;padding:0px 0px 10px 60px">
         <div style="float:left;"><img style="text-align:center;height:60px" src="../images/top.jpg" /></div>
        <el-card
        style="float:left;
        width:90%;height:500px ">
        <div style="float:left;"><h3 style="color:#25AFF3">个人资料</h3></div>
        <div style="padding-top:50px">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">基本信息</el-menu-item>
            <el-menu-item index="2" >修改密码</el-menu-item>
            <el-menu-item index="3">修改头像</el-menu-item>
            <el-menu-item index="4">修改密保</el-menu-item>
            </el-menu>
        </div>
            <div style="float:left;padding:50px 0px 0px 250px" v-if="this.selectId==3">
                <img style="width:180px;height:180px;" :src="url" />
            </div>
            <div style="float:left;padding:0px 0px 0px 150px" v-if="this.selectId==3">
                <p>请选择jpg图片作为用户头像，且大小不能大于2M</p>
                <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            
        </el-card>
    </div>
</template>
<script>
  export default {
      data() {
        return {
            url:require('../images/userimg.jpg'),
            activeIndex: '1',
            imageUrl: '',
            selectId:''
        }
      },
      methods:{
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.selectId = key
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
      },
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>