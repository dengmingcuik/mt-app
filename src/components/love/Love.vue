<template>
  <div class="wrap">
    <h4>猜你喜欢</h4>
    <ul>
      <li v-for="item in loveList" :key="item.itemId">
        <div class="imgbox">
          <img src="https://s0.meituan.net/bs/file/?f=meis/meishi.web:assets/bee61f5f04046d07.png@53635fc" alt="">
        </div>
        <p class="name">{{ item.title }}</p>
        <div class="dsc">{{ item.areaName }}</div>
        <div class="price">
          <b>￥</b>{{item.avgPrice}}/人
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api";
export default {
  props: ['num'],
  data() {
    return {
      loveList: []
    }
  },
  created() {
    api.getLove().then(data => {
      this.loveList = data.data.data.slice(0, this.num);
    })
  }
}

</script>

<style lang="scss">
@import "@/assets/css/love/index.scss";
</style>