<template>
  <div class="m-geo">
    <i class="el-icon-location" />
    {{ $store.state.geo.position.city }}
    <nuxt-link
      class="changeCity"
      to="/changeCity"
    >
      切换城市
    </nuxt-link>
    [大厂回族自治县 廊坊 固安县]
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
</style>
