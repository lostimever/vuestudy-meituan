<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic" />
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg">
          </h4>
          <p class="m-life-login-name">
            Hi！你好
          </p>
          <nuxt-link to="/register">
            <el-button round size="medium">登录</el-button>
          </nuxt-link>
          <nuxt-link to="/login">
            <el-button round size="medium">注册</el-button>
          </nuxt-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"/>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"/>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <p>
            <img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" />
          </p>
          <p>美团APP手机版</p>
          <h4>
            <span>1元起</span>
            <em>吃喝玩乐</em>
          </h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from './slider'
export default {
  components: {
    Slider
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index/life.scss';
</style>
