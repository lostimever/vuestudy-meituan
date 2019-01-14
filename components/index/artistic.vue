<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        v-for="(item, index) in tabs"
        :key="index"
        :class="{active:kind===item.tab}"
        :kind="item.tab"
      >
        {{ item.text }}
      </dd>
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
          <img
            :src="item.src"
            class="image"
          >
          <ul class="cbody">
            <li class="title">
              {{ item.title }}
            </li>
            <li class="pos">
              <span>{{ item.pos }}</span>
            </li>
            <li class="price"><em>{{ item.price }}</em></li>
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
      tabs: [],
      list: {}
    }
  },
  computed: {
    curDatas: function() {
      return this.list[this.kind]
    }
  },
  async mounted() {
    let self = this
    let {
      status,
      data: { data, tabs }
    } = await self.$axios.get('/search/resultByKeyWords', {
      params: {
        tab: 'all'
      }
    })
    let result = data.map(item => {
      return {
        title: item.title,
        pos: item.subTitle,
        bottomInfo: item.bottomInfo,
        src: item.imgUrl.split('/w.h')[0]+item.imgUrl.split('/w.h')[1],
        href: item.iUrl,
        price: item.oldPrice
      }
    })
    self.tabs = tabs
    let list = {}
    tabs.map(item => {
      list[item.tab] = []
    })
    self.list = list
    self.list[self.kind] = result
  },
  methods: {
    over: async function(e) {
      let self = this
      let dom_kind = e.target.getAttribute('kind')
      if (dom_kind) {
        this.kind = dom_kind
        console.log(self.list[self.kind].length)
        if (self.list[self.kind].length <= 0) {
          let {
            status,
            data: { data }
          } = await self.$axios.get('/search/resultByKeyWords', {
            params: {
              tab: this.kind
            }
          })
          let result = data.map(item => {
            return {
              title: item.title,
              pos: item.subTitle,
              bottomInfo: item.bottomInfo,
              src: item.imgUrl.indexOf('/w.h')>-1 ? item.imgUrl.split('/w.h')[0]+item.imgUrl.split('/w.h')[1] : item.imgUrl,
              href: item.iUrl,
              price: item.oldPrice
            }
          })
          self.list[self.kind] = result
        }
      }
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/index/artistic.scss';
</style>
