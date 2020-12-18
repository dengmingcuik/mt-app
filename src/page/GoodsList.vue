<template>
  <div class="page-product">
    <el-row>
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5" class="img-box">
        <love :num="3" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from '@/components/products/Crumbs'
import Categroy from '@/components/products/Categroy'
import List from '@/components/products/List'
import Love from '@/components/love/Love'
export default {
  components: {
    Crumbs,
    Categroy,
    List,
    Love
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/products/index.scss';
</style>