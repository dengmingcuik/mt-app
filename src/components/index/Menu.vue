<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menuList" :key='index' @mouseenter="navEnter(item)" @mouseleave="navLeave">
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item, index) in curDetail.items">
        <h4 :key='index'>{{ item.title }}</h4>
        <span v-for="(i, n) in item.items" :key='i + n'>{{ i }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api';
export default {
  data() {
    return {
      curDetail: null,
      menuList: []
    }
  },
  created() {
    api.getMenuList().then(data => {
      this.menuList = data.data.data;
    })
  },
  methods: {
    navEnter(item) {
      clearTimeout(this.timer);
      this.curDetail = item;
    },
    navLeave() {
      let self = this;
      self.timer = setTimeout(() => {
        self.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    }
  }
}
</script>