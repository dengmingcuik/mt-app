<template>
  <div class="choose-wrap" @click="showWrapper">
    <div :class="['choose', disabled ? 'disabled' : '']">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{ 'mt-content': true, active: showWrapperActive }">
        <h2>{{ title }}</h2>
        <div :class="['wrapper', className]">
          <div class="col" v-for="(colList, i) in renderList" :key="i">
            <span
              :class="{'mt-item': true, 'active': item == value}"
              v-for="(item, index) in colList"
              :key="index"
              @click="change(item)"
              >{{ item.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "title", "value", "showWrapperActive", "disabled", "className"],
  computed: {
    renderList() {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for(let i = 0; i < col; i++) {
        resultList.push(this.list.slice(i * 12, i * 12 + 12))
      }
      return resultList;
    }
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },
    change(item) {
      this.$emit("change", item);
    },
  },
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/select.scss";
</style>