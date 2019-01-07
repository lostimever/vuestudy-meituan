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
          <el-button>注册</el-button>
          <el-button>登陆</el-button>
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
