<template>
  <div class="m-geo">
    <div class="position">
      <i class='el-icon-location' />
      {{ $store.state.position.name }}
      <router-link class='changeCity' :to="{ name: 'changeCity' }">
        切换城市
      </router-link>
      [
        <a href="#" v-for="(item, index) in nearList" :key="index">{{ item.name }} </a>
      ]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class='login' :to="{ name: 'login' }">
        登录
      </router-link>
      <router-link class='register' :to="{ name: 'register' }">
        立即注册
      </router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data() {
    return {
      nearList: []
    }
  },
  watch: {
    "$store.state.position": function() {
      this.nearList = this.$store.state.position.nearCity;
    }
  },
  created() {
    api.getPosition().then(data => {
      this.nearList = data.data.data.nearCity;
      this.$store.commit('setPosition', data.data.data);
    })
  }
}
</script>