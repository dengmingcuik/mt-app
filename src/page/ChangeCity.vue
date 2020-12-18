<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title='热门城市：' :list='hotList' />
    </el-row>
    <el-row>
      <hot title='最近访问：' :list='recentList' />
    </el-row>
    <el-row>
      <categroy />
    </el-row>
  </div>
</template>

<script>
import Province from '@/components/changeCity/Province'
import Hot from '@/components/changeCity/Hot'
import Categroy from '@/components/changeCity/Categroy'
import api from '@/api'
export default {
  data() {
    return {
      hotList: [],
      recentList: []
    }
  },
  created() {
    api.getHotCity().then(data => {
      this.hotList = data.data.data.map(item => item.name);
    })
    api.getRecents().then(data => {
      this.recentList = data.data.data.map(item => item.name);
    })
  },
  components: {
    Province,
    Hot,
    Categroy
  }
}
</script>