<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../../assets/logo.png" alt="logo">
          </div>
        </el-col>
        <el-col :span="18" class="maddle">
          <h3>电商后台管理系统</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a class="loginout">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

}

</script>

<style lang="scss">
  .container {
    height: 100%;

    .header {
      background-color: #B3C0D1;

      .maddle{
        text-align: center;
      }

      .loginout{
        line-height: 60px;
        text-decoration: none;
      }
    }

    .aside {
      background-color: #D3DCE6;
    }

    .main {
      background-color: #E9EEF3;
    }
  }

</style>
