<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt="美团"
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHot">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearch">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link
            v-for="(item, index) in suggestList"
            :key="index"
            :to="{ name: 'goods', params: { name: item } }"
            >{{ item }}</router-link
          >
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api';
export default {
  data() {
    return {
      searchWord: "",
      hotPlaceList: [],
      searchList: [],
      suggestList: [],
      isFocus: false,
    };
  },
  created() {
    api.getHotWordsList().then(data => {
      this.hotPlaceList = data.data.data;
      this.suggestList = data.data.data;
    })
  },
  computed: {
    isHot() {
      return this.isFocus && !this.searchWord;
    },
    isSearch() {
      return this.isFocus && this.searchWord;
    },
  },
  methods: {
    handleFocus() {
      this.isFocus = true;
    },
    handleBlur() {
      let self = this;
      setTimeout(() => {
        self.isFocus = false;
      }, 500);
    },
    handleInput() {
      let val = this.searchWord;
      api.getSearchList().then(data => {
        this.searchList = data.data.data.list.filter(item => {
          return item.includes(val);
        })
      })
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/public/header/search.scss";
</style>