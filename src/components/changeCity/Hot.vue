<template>
  <div class="m-hcity">
    <dl>
      <dt>{{ title }}</dt>
      <dd v-for="(item, index) in list" :key='index' @click="handle(item)">{{ item }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['title', 'list'],
  methods: {
    handle(item) {
      this.$store.commit('setPosition', { name: item });
      this.$router.push({ name: 'index' });
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/hot.scss";
</style>