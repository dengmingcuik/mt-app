<template>
  <div class="m-comment">
    <div class="title">
      <h3>{{ commentNum }}人评论</h3>
      <div class="sort">
        <span class="active">质量排序</span>
        <span> | 时间排序</span>
      </div>
    </div>
    <div class="grop">
      <template v-if="comment">
        <div class="content" v-for="(item, index) in comment" :key="index">
          <div class="header">
            <img :src="item.image" alt="" />
          </div>
          <div class="info">
            <div class="name">{{ item.username }}</div>
            <div class="souce">
              <el-rate
                v-model="item.rate"
                disabled
                text-color="#ff9900"
                score-template="{value}"
              />
            </div>
            <p class="desc">{{ item.evalaute }}</p>
            <div class="imgbox" v-if="item.pics">
              <img v-for="(item, index) in item.pics" :key="index" :src="item" alt="">
            </div>
            <div class="like-icon">
              <div class="like">
                <b></b>
                <span>赞</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comment", "commentNum"],
};
</script>