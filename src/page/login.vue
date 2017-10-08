<template>
  <div class="g-login">
    <div class="g-login-pane">
      <h1>足记</h1>
      <Input v-model="username" icon="person" placeholder="请输入..." style="width: 200px"></Input>
      <Input v-model="password" icon="locked" placeholder="请输入..." style="width: 200px"></Input>
      <Button type="primary" @click="login">登录</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        console.log(this.username)
        if (this.username === 'u' && this.password === '123') {
          this.$router.push({name: 'home'})
        }
      }
    }
  }
</script>

