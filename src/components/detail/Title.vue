<template>
  <div class="m-title">
    <div class="d-left">
      <div class="name">
        {{ title }}
        <span>
          <b></b>
          "食品安全档案"
        </span>
      </div>
      <div class="score">
        <el-rate
          v-model="score.score"
          disabled
          text-color="#ff9900"
          score-template="{value}"
        />{{ score.score }}分 人均￥{{ avgPrice }}
      </div>
      <div class="address">
        <p>地址：{{ address }}</p>
        <p>电话：{{ phone }}</p>
        <p>营业时间：{{ time }}</p>
      </div>
    </div>
    <div class="d-right">
      <img :src="image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'image', 'score', 'address', 'avgPrice', 'phone', 'time']
}
</script>