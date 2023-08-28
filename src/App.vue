<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="page">
    <div class="navbar">
      <NavigationBar></NavigationBar>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const accessToken = this.getAccessTokenFromCookie();
    if(accessToken !== null)
      this.$store.dispatch('loginUser', { accessToken: accessToken });
  },
  methods: {
    getAccessTokenFromCookie() {
      const cookies = document.cookie.split('; ');
      for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'accessToken') {
          return value;
        }
      }
      return null;
    }
  }
}
</script>

<style>
.page {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: repeat(2, 1fr) 6fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.navbar {
  grid-area: 1 / 1 / 2 / 6;
  min-height: 72px;
  padding: 18px 16px;
}

.content {
  grid-area: 3 / 2 / 4 / 3;
}
</style>