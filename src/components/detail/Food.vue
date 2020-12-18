<template>
  <div class="m-food">
    <h3>推荐菜</h3>
    <div class="grop">
      <div class="pic">
        <div class="imgbox" v-for="(item, index) in prcList" :key="index">
          <img
            src="https://p0.meituan.net/meismis/2ac0d7bb466f3136058efb244228dc4f63725.png@130w_130h_1e_1c"
          />
          <div class="dec">
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="list">
        <span v-for="(item, index) in list" :key="index">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prcList', 'list']
}
</script>