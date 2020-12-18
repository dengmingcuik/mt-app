<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      :value="province"
      title="省份"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      v-document-click="documentClick"
      @change="changeProvinceTitle"
      className="province"
    />
    <m-select
      :list="cityList"
      :value="city"
      title="城市"
      :disabled="cityDisabled"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      v-document-click="documentClick"
      @change="changeCityTitle"
      className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
        >{{ item }}</el-option
      >
    </el-select>
    <button class="searchCity" @click="handleClick()">搜索</button>
  </div>
</template>

<script>
import MSelect from "./Select";
import api from "@/api";
export default {
  data() {
    return {
      province: "省份",
      cityDisabled: true,
      provinceList: [],
      city: "城市",
      cityList: [],
      provinceActive: false,
      cityActive: false,
      searchWord: "",
      searchList: [],
      loading: false,
    };
  },
  created() {
    api.getProvince().then((data) => {
      this.provinceList = data.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  components: {
    MSelect,
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvinceTitle(item) {
      this.province = item.name;
      this.cityList = item.cityInfoList;
      this.cityDisabled = false;
    },
    changeCityTitle(item) {
      this.city = item.name;
      this.$store.commit("setPosition", item);
      this.$router.push({ name: "index" });
    },
    documentClick() {
      this.provinceActive = false;
      this.cityActive = false;
    },
    remoteMethod(val) {
      this.searchList = this.$store.state.cityAllList.filter((item) => {
        return item.includes(val);
      });
    },
    handleClick() {
      this.$store.commit("setPosition", { name: this.searchWord });
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>