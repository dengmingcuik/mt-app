<template>
  <div class="page-detail">
    <el-row>
      <crumbs />
    </el-row>
    <el-row>
      <m-title
        :title="detail.title"
        :image="detail.imgUrl"
        :score="{ score: detail.score }"
        :avgPrice="detail.avgPrice"
        :address="detail.address"
        :phone="detail.phone"
        :time="detail.businessTime"
      />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <deal-items :items="detail.dealItems" :image="detail.imgUrl"/>
        </el-row>
        <el-row v-if="detail.recommend">
          <food :prcList="detail.recommend.slice(0, 6)" :list="detail.recommend.slice(6)" />
        </el-row>
        <el-row>
          <comment :comment="detail.comment" :commentNum="detail.commentNum" />
        </el-row>
      </el-col>
      <el-col :span="5">
        <love :num="7" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api";
import Crumbs from "@/components/detail/Crumbs";
import MTitle from "@/components/detail/Title";
import DealItems from "@/components/detail/DealItems";
import Food from "@/components/detail/Food";
import Comment from "@/components/detail/Comment";
import Love from '@/components/love/Love'
export default {
  data() {
    return {
      detail: {},
    };
  },
  created() {
    api.getDetail().then((data) => {
      this.detail = data.data.data;
    });
  },
  components: {
    Crumbs,
    MTitle,
    DealItems,
    Food,
    Comment,
    Love
  },
};
</script>

<style lang='scss'>
@import "@/assets/css/detail/index.scss";
</style>