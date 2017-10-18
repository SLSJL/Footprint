<template>
  <div class="g-login">
    <div class="g-login-pane">
      <Tabs value="name1">
        <TabPane :label="label" name="name1">
          <Input v-model="username" @keyup.native="login($event)" size="large" icon="person" placeholder="请输入..." type="text" class="u-login-input"></Input>
          <Input v-model="password" @keyup.native="login($event)" size="large" icon="locked" placeholder="请输入..." type="password"  class="u-login-input"></Input>
          <Button type="primary" class="u-login-input" @click="login($event)" >登录</Button>
        </TabPane>
        <TabPane label="注册" name="name2">注册</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        label: (h) => {
          return h('div', [
            h('span', '登录')
          ])
        }
      }
    },
    methods: {
      login: function (evt) {
        if (evt.type === 'keyup' && evt.keyCode === 13) {
          if (this.username === 'user' && this.password === '123') {
            this.$router.push({name: 'foot'})
          } else {
            alert('账号错误')
          }
        } else if (evt.type === 'click') {
          this.$router.push({name: 'foot'})
        }
      }
    }
  }
</script>

