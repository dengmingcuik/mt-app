<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <my-life />
      </el-col>
    </el-row>
    <el-row>
      <container :nav='istyle'/>
    </el-row>
    <el-row>
      <container :nav='recomment'/>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/index/Menu";
import MyLife from "@/components/index/Life";
import Container from "@/components/index/Container";
export default {
  data() {
    return {
      istyle: {
        class: "istyle",
        title: "有格调",
        list: [
          {
            tab: "all",
            taxt: "全部",
          },
          {
            tab: "food",
            taxt: "约会聚餐",
          },
          {
            tab: "spa",
            taxt: "丽人SPA",
          },
          {
            tab: "movie",
            taxt: "电影演出",
          },
          {
            tab: "travel",
            taxt: "品质出游",
          },
        ],
      },
      recomment: {
        class: "youhui",
        title: "很优惠",
        list: [
          {
            tab: "all",
            taxt: "全部",
          },
          {
            tab: "food",
            taxt: "美食",
          },
          {
            tab: "spa",
            taxt: "休闲",
          }
        ],
      },
    };
  },
  components: {
    MyMenu,
    MyLife,
    Container,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
