<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(val, key) in cityGrop"
      :key="key"
      :id="'city-' + key"
    >
      <dt>{{ key }}</dt>
      <dd>
        <span v-for="city in val" :key="city.id" @click="changeCity(city)">{{
          city.name
        }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      list: "ABCDEFGHJKLMNPQRSTWXYZ".split(""),
      cityGrop: {}
    };
  },
  methods: {
    changeCity(city) {
      this.$store.commit("setPosition", city);
      this.$router.push({ name: "index" });
    }
  },
  created() {
    let arr = [];
    let obj = {};
    let cityAllList = [];
    let str = "ABCDEFGHJKLMNPQRSTWXYZ";
    let EnArr = str.split("");
    EnArr.forEach((item) => {
      obj[item] = [];
    });
    api.getProvince().then((data) => {
      let province = data.data.data;
      province.forEach((item) => {
        item.cityInfoList.forEach((city) => {
          arr.push(city);
        });
      });
      arr.forEach((item) => {
        obj[item.firstChar.toUpperCase()].push(item);
        cityAllList.push(item.name);
      });
      this.$store.commit('setCityAllList', cityAllList);
      this.cityGrop = obj;
    });
  },
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/categroy.scss";
</style>