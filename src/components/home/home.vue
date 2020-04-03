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
            <a class="loginout" @click="handleSignout()">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <!-- 侧边栏导航 -->
        <el-menu :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </el-menu-item>
          </el-submenu>

          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span>角色列表</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                <span>权限列表</span>
              </el-menu-item>
          </el-submenu>

          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span>商品列表</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                <span>分类参数</span>
              </el-menu-item>
              <el-menu-item index="1-3">
                <i class="el-icon-menu"></i>
                <span>商品分类</span>
              </el-menu-item>
          </el-submenu>

          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span>订单列表</span>
              </el-menu-item>
          </el-submenu>

          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span>数据报表</span>
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // newVue之前自动触发
  deforeCreate () {
    // 获取token
    const token = localStorage.getItem('token')
    // 判断是否有token
    if (!token) {
      // 没有token，返回登录
      this.$route.push({ name: 'login' })
    }
    // 如果有token，继续渲染组件
  },
  methods: {
    handleSignout () {
      // 清除token
      localStorage.clear()
      // 提示
      this.$message.success('退出成功')
      // 来到login页面
      this.$router.push({ name: 'login' })
    }
  }
}

</script>

<style lang="scss">
  .container {
    height: 100%;

    .header {
      background-color: #B3C0D1;

      .maddle {
        text-align: center;
      }

      .loginout {
        line-height: 60px;
        text-decoration: none;
        cursor: pointer;
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
