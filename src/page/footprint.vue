<template>
  <div class="layout" :style="layoutStyle" :class="{'layout-hide-text': spanLeft < 5}">
    <Row class="layout-row layout-header">
      <Col :span="spanLeft" class="layout-menu-left" type="flex">
        <div class="layout-logo-left">
          <div class="sys-icon"></div>
          <h1>足记</h1>
        </div>
      </Col>
      <Col :span="spanRight">
      <div class="layout-user-info">
        <Menu theme="dark" mode="horizontal">
          <Submenu name="1">
            <template slot="title">
              <Icon type="person"></Icon>
              管理员
            </template>

            <MenuItem name="1-1">资料</MenuItem>
            <MenuItem name="1-2">退出</MenuItem>
          </Submenu>
        </Menu>
      </div>
      </Col>
    </Row>

    <Row class="layout-row" type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <Menu active-name="1-1"  width="auto" :open-names="['1']">

        <Submenu name="1">
          <template slot="title">
            <Icon type="search"></Icon>
            查询展示
          </template>

          <router-link :to="{ name: 'foot'}">
            <MenuItem name="1-1">
              脚印</MenuItem>
          </router-link>

          <router-link :to="{ name: 'routes'}">
            <MenuItem name="1-2">路线</MenuItem>
          </router-link>
        </Submenu>

        <router-link :to="{ name: 'online'}">
          <MenuItem class="ivu-menu-submenu-title" name="2"><Icon type="stats-bars"></Icon>在线统计</MenuItem>
        </router-link>

        <!--<Submenu name="2">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>

          <router-link :to="{ name: 'online'}">
            <MenuItem name="2-1">在线统计</MenuItem>
          </router-link>

          <router-link :to="{ name: 'routes'}">
            <MenuItem name="2-2">发布统计</MenuItem>
          </router-link>

          <router-link :to="{ name: 'routes'}">
            <MenuItem name="2-3">访问统计</MenuItem>
          </router-link>

          <router-link :to="{ name: 'routes'}">
            <MenuItem name="2-4">注册统计</MenuItem>
          </router-link>

          <router-link :to="{ name: 'routes'}">
            <MenuItem name="2-5">分享统计</MenuItem>
          </router-link>
        </Submenu>-->


        <Submenu name="3">
          <template slot="title">
            <Icon type="gear-a"></Icon>
            系统管理
          </template>
          <router-link :to="{ name: 'user'}">
            <MenuItem name="3-1">用户管理</MenuItem>
          </router-link>

          <router-link :to="{ name: 'user'}">
            <MenuItem name="3-2">日志管理</MenuItem>
          </router-link>
        </Submenu>

      </Menu>
      </Col>
      <Col :span="spanRight">
      <div class="layout-content">
        <router-view></router-view>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'footprint',
    data () {
      return {
        spanLeft: 3,
        spanRight: 21,
        layoutStyle: {
          height: 0
        }
      }
    },
    created () {
      this.$router.push({name: 'foot'})
    },
    mounted () {
      this.layoutStyle.height = document.getElementById('app').offsetHeight - 60 + 'px'
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

