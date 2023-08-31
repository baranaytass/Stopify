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
grid-template-columns: 1fr;
grid-template-rows: 1fr 6fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
height: 100vh;
overflow: hidden;
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgb(19 20 40 / 82%) 100%);
}

::-webkit-scrollbar {
  width: 0.5em; 
}

::-webkit-scrollbar-track {
  background: transparent; 
}

::-webkit-scrollbar-thumb {
  background-color: transparent; 
  border-radius: 5px;  
}

/* Firefox için */
body {
  scrollbar-width: none;  /* Firefox'ta scroll bar genişliğini sıfırlar */
  background-color: #000;
}

.navbar { 
  grid-area: 1 / 1 / 2 / 2; 
}
.content { 
  grid-area: 2 / 1 / 3 / 2;
  margin: 0 8% !important;
}
</style>