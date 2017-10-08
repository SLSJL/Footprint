<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <Menu active-name="1" width="auto">
        <div class="layout-logo-left">
          <h1>足记</h1> </div>
        <router-link :to="{ name: 'footPrint'}">
          <MenuItem name="1">
            <Icon type="stats-bars" :size="iconSize"></Icon>
            <span class="layout-text">足记展示</span>
          </MenuItem>
        </router-link>

         <router-link :to="{ name: 'stats'}">
            <MenuItem name="2">
              <Icon type="ios-keypad" :size="iconSize"></Icon>
              <span class="layout-text">统计分析</span>
            </MenuItem>
          </router-link>
        
          <router-link :to="{ name: 'user'}">
            <MenuItem name="3">
              <Icon type="person" :size="iconSize"></Icon>
              <span class="layout-text">用户管理</span>
            </MenuItem>
          </router-link>
      </Menu>
      </Col>
      <Col :span="spanRight">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
      </div>
      <div class="layout-content">
        <router-view></router-view>
      </div>
      <div class="layout-copy">
        2011-2016 &copy; TalkingData
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        spanLeft: 5,
        spanRight: 19
      }
    },
    created () {
      this.$router.push({name: 'footPrint'})
    },
    computed: {
      iconSize () {
        return this.spanLeft === 3 ? 14 : 24
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 1
          this.spanRight = 23
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      }
    }
  }
</script>

