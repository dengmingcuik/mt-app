<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{ 's-nav-active': item.active }"
      >
        {{ item.name }}
      </li>
    </ul>
    <el-row>
      <router-link v-for="(item, index) in productlist" :key="index" :to="{ name: 'detail' }">
        <item :meta="item" />
      </router-link>
    </el-row>
  </div>
</template>

<script>
import api from "@/api";
import Item from "./Item";
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true,
        },
        {
          key: "s-price",
          name: "价格降序",
          active: false,
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false,
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false,
        },
      ],
      productlist: [],
    };
  },
  components: {
    Item,
  },
  created() {
    api.getGoodsList().then((data) => {
      this.productlist = data.data.data;
    });
  },
};
</script>