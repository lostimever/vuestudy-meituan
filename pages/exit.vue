<template>
  <div class="exit" />
</template>

<script>
  export default {
    layout: 'blank',
    middleware: async ctx => {
      let { status, data } = await ctx.$axios.get('/users/exit')
      if (status === 200 && data && data.code === 0) {
        window.location.href = '/'
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang='scss'>

</style>
