<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <i-select />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hot />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <category />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import iSelect from '@/components/changeCity/iselect'
import Hot from '@/components/changeCity/hot'
import Category from '@/components/changeCity/category'
  export default {
    components: {
      iSelect,
      Hot,
      Category
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang='scss'>

</style>
