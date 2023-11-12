<template>
<div>
  <div style="box-shadow: 0 0 10px rgba(0,0,0,.1); padding: 10px 20px;
                border-radius: 5px; margin-bottom: 10px">
    早安，骚年，祝你开心每一天！
  </div>

  <div style="display: flex">
    <el-card style="width: 30% ; margin-top: 10px" >
      <div slot="header" class="clearfix">
        <span>哥哥带你做毕设2024</span>
      </div>
      <div>
        2024毕设正式开始了！哥哥带你手把手敲出来！
        <div style="margin-top: 20px">
          <div style="margin: 10px 0"><strong>主题色</strong></div>
          <el-button type="primary">按钮</el-button>
          <el-button type="success">按钮</el-button>
          <el-button type="warning">按钮</el-button>
          <el-button type="danger">按钮</el-button>
          <el-button type="info">按钮</el-button>
        </div>
      </div>
    </el-card>

    <el-card style="width: 70%">
      <div slot="header" class="clearfix">
        <span>用户数据</span>
      </div>
      <div>
        <el-table :data="users">
          <el-table-column label="Id" prop="id"></el-table-column>
          <el-table-column label="用户名" prop="username"></el-table-column>
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="地址" prop="address"></el-table-column>
          <el-table-column label="文件上传">
            <template v-slot="scope">
              <el-upload
                  action="http://localhost:9090/file/upload"
                  :headers="{token:user.token}"
                  :show-file-list="false"
                  :on-success="(row,file,fileList) => handleTableFileUpload(scope.row,file,fileList)"
              >
                <el-button size="mini" type="primary">点击上传</el-button>
              </el-upload>
            </template>
          </el-table-column>

          <el-table-column label="文件预览">
            <template v-slot="scope">
              <el-image v-if ="scope.row.avatar" :src="scope.row.avatar"
                        style="width: 50px;height: 50px">
              </el-image>
            </template>
          </el-table-column>

        </el-table>
      </div>
    </el-card>
  </div>
  <div style="display: flex; margin: 10px 0">
    <el-card style="width: 50% ; margin-left: 10px ">
      <div slot="header" class="clearfix">
        <span>文件上传测试</span>
      </div>
      <div>

      </div>
    </el-card>
  </div>
  </el-main>

  </el-container>


  </el-container>
</div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>