<template>
  <div class="m-deal-items">
    <h3>商家团购及优惠</h3>
    <div class="grop">
      <h4 v-if="items">{{ items.length }}款堂食套餐</h4>
      <div class="content" v-for="(item, index) in items" :key="index">
        <img :src="image" alt="" />
        <div class="info">
          <div class="pbox">
            <p class="name">
              <span>{{ item.title }}</span>
              <img
                src="https://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png"
                alt=""
              />
            </p>
            <p class="sale">已售{{ item.saleNum }}</p>
            <p class="price">
              <b>￥</b>{{ item.price }}
              <span>门市价￥{{ item.counterPrice }}</span>
            </p>
          </div>
          <a href="#">立即抢购</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "image"],
};
</script>