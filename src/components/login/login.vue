<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin () {
      // es7 async+await
      const res = await this.$http.post('login', this.formdata)
      // console.log(res)
      const {
        data,
        meta: { msg, status }
      } = res.data
      // 提示信息
      if (status === 200) {
        // 登录成功
        // 保存token值
        localStorage.setItem('token', data.token)
        // 跳转home
        this.$router.push({ name: 'home' })
        // 提示成功
        this.$message.success(msg)
      } else {
        this.$message.warning(msg)
      }

      // this.$http.post('login', this.formdata).then(res => {
      //   // console.log(res)
      //   const {
      //     data,
      //     meta: { msg, status }
      //   } = res.data
      //   console.log(data)
      //   // 提示信息
      //   if (status === 200) {
      //     // 登录成功
      //    // 保存token值
      //     localStorage.setItem('token', data.token)
      //     // 跳转home
      //     this.$router.push({ name: 'home' })
      //     // 提示成功
      //     this.$message.success(msg)
      //   } else {
      //     this.$message.warning(msg)
      //   }
      // })
    }
  }
}

</script>

<style lang="scss">
  .login-wrap {
    height: 100%;
    background-color: #324152;
    /* 弹性盒布局 */
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 0;
    }

    .login-form {
      width: 400px;
      background-color: #fff;
      padding: 30px;
      border-radius: 5px;

      .login-btn {
        width: 100%;
      }
    }
  }

</style>
