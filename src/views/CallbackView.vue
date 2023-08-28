<script setup>
import { getUserProfile } from '../services/spotifyApi.js';
</script>

<template>
  <div class="callback-container">
    <h2>Redirecting...</h2>
  </div>
</template>
  
<script>


export default {
  async mounted() {
    const accessToken = this.getAccessTokenFromUrl();

    if (accessToken) {
      this.$store.dispatch('loginUser', { accessToken: accessToken });

      // todo: must move to userProfile
      const user = await getUserProfile();

      this.$store.dispatch('setUser', { user });

      this.saveAccessTokenToCookie(accessToken);

      this.$router.push('/');
    } else {
      // Eğer access token yoksa, hata işlemleri yapabilirsiniz.
    }
  },
  methods: {
    getAccessTokenFromUrl() {
      const params = new URLSearchParams(window.location.hash.substring(1));
      return params.get('access_token');
    },
    saveAccessTokenToCookie(accessToken) {
      const expiryTime = new Date().getTime() + (3600 * 1000); // Token 1 saat (3600 saniye) sonra geçersiz olacak
      document.cookie = `accessToken=${accessToken}; expires=${new Date(expiryTime).toUTCString()}; path=/`;
    }
  }
}
</script>
  
<style>
.callback-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
  