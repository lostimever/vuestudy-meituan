<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
      >全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
      >约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
      >丽人SPA</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="(item, index) in curDatas"
        :key="index"
      >
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never"
        >
          <img :src="item.src" class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        kind: 'all',
        list: {
          all: [
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            }
          ],
          part: [
            {
              title: '嘉善宾馆善尚餐厅',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p1.meituan.net/mogu/9efc193e907e913539a06721adf111ab191908.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '云澜湾·上膳房',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/bbia/cb957a380b8159eb1ffb13e78359c3c0124272.jpg@12_63_1269_952a%7C368w_208h_1e_1c",
              href: ""
            },
            {
              title: '你好牛潮汕鲜牛肉火锅',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p1.meituan.net/mogu/0cc35f1773de4090cb16f84814e88c88113686.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            }
          ],
          spa: [
            {
              title: '嘉善宾馆善尚餐厅',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p1.meituan.net/merchantpic/e70a106d283e301f942e5ce042093a59131380.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",
              href: ""
            },
            {
              title: '云澜湾·上膳房',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p1.meituan.net/wedding/58bf01252af2e9834d5eae18330e992365915.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",
              href: ""
            },
            {
              title: '你好牛潮汕鲜牛肉火锅',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/wedding/8809ba22f7246dc5e494b06030ab8670155938.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            },
            {
              title: '乡村草黄牛音乐烤吧碳火烧肉',
              pos: '双人套餐，提供免费WiFi',
              price: '138',
              src: "http://p0.meituan.net/mogu/c2aba7317aae122e0df8c6022c70b6c5557513.jpg@368w_208h_1e_1c",
              href: ""
            }
          ]
        }
      }
    },
    computed: {
      curDatas: function() {
        return this.list[this.kind]
      }
    },
    methods: {
      over: function(e) {
        this.kind = e.target.getAttribute('kind')
      }
    }
  }
</script>

<style lang='scss'>
@import '@/assets/css/index/artistic.scss';
</style>
