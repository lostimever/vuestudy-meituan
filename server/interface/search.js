import Router from 'koa-router'
import Poi from '../dbs/models/poi'
import axios from 'axios'

let router = new Router({ prefix: '/search' })

router.get('/top', async ctx => {
  // try {
  //   let top = await Poi.find({
  //     name: new RegExp(ctx.query.input),
  //     city: ctx.query.city
  //   })
  //   ctx.body = {
  //     code: 0,
  //     top: top.map(item => {
  //       return {
  //         name: item.name,
  //         type: item.type
  //       }
  //     }),
  //     type: top.length ? top[0].type : ''
  //   }
  // } catch (e) {
  //   ctx.body = {
  //     code: -1,
  //     top: []
  //   }
  // }
  let param = ctx.query.input
  if (param) {
    let {
      status,
      data: { data }
    } = await axios.get(`https://www.meituan.com/ptapi/suggest`, {
      params: {
        keyword: param
      }
    })
    ctx.body = {
      code: 0,
      top: status === 200 ? data.suggestItems : []
    }
  }
})

router.get('/hotPalce', async ctx => {
  //
})

router.get('/resultByKeyWords', async ctx => {
  const { tab } = ctx.query
  console.log(tab)
  let {
    status,
    data: { data, tabs }
  } = await axios.get('https://sh.meituan.com/ptapi/getScenesList', {
    params: {
      theme: 'quality',
      tab: tab,
      ci: 10,
      limit: 12
    }
  })
  // console.log(data, tabs)
  ctx.body = {
    data: data,
    tabs: tabs
  }
})

export default router
