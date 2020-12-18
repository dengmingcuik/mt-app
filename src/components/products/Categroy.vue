<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classicList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "./Select";
import api from "@/api";
export default {
  components: {
    MSelect,
  },
  data() {
    return {
      classicList: [],
      areaList: [],
    };
  },
  created() {
    api.getClassicList().then((data) => {
      this.classicList = data.data.data;
    });
    api.getAreaList().then((data) => {
      let str = data.data;
      let arr = str.split('');
      arr.splice(-1, 0, '}]');
      str = arr.join('');
      this.areaList = JSON.parse(str).data;
    });
  }
};
</script>