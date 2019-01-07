<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left"
      >
        <img src="http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col
        :span="15"
        class="center"
      >
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <button class="el-button el-button--primary">
            <i class="el-icon-search" />
          </button>
          <dl
            v-if="isHotPlace"
            class="hotPlace"
          >
            <dt>热门搜索</dt>
            <dd
              v-for="(item, index) in hotPlace"
              :key="index"
            >
              {{ item }}
            </dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList"
          >
            <dd
              v-for="(item, index) in searchList"
              :key="index"
            >
              {{ item }}
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href>故宫博物院</a>
          <a href>谷静之湖滑雪场</a>
          <a href>尚隐·泉都市生活馆</a>
          <a href>故宫珍宝馆</a>
          <a href>军都山滑雪场</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to class="apartment">民俗公寓</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right"
      >
        <ul class="security">
          <li>
            <i class="refund" />
            <p class="text">随时退</p>
          </li>
          <li>
            <i class="single" />
            <p class="text">不满意免单</p>
          </li>
          <li>
            <i class="overdue" />
            <p class="text">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      hotPlace: [
        '北京故宫博物院',
        '北京欢乐',
        '谷静之湖滑雪场',
        '尚隐·泉都市生活馆',
        '故宫珍宝馆'
      ],
      searchList: [
        '热门搜索',
        '北京故宫博物院',
        '北京欢乐',
        '谷静之湖滑雪场',
        '尚隐·泉都市生活馆',
        '故宫珍宝馆',
        '军都山滑雪场'
      ]
    }
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.search
    },
    isSearchList: function() {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus: function() {
      this.isFocus = true
      console.log('focus')
    },
    blur: function() {
      console.log('blur')
      let self = this
      setTimeout(function() {
        self.isFocus = false
      }, 200)
    },
    input: function() {
      console.log(this.search)
    }
  }
}
</script>

<style lang='scss' scoped>
// @import '@/assets/css/public/header/search.scss';
</style>
