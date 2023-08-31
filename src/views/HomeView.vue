<script setup>
import SpotifyIcon from '../assets/icons/SpotifyIcon.vue';
import UserLibrary from '@/components/Authenticated/home/UserLibrary.vue';
</script>

<template>
  <div v-if="!this.$store.getters.isAuthenticated">
    <v-btn @click="Login()" class="text-none px-md-6 py-md-3 mx-lg-auto login-button" size="x-large">Login With
      <SpotifyIcon :size="24" style="margin-left: 8px;" />
    </v-btn>
  </div>
  <div v-else>
    <UserLibrary />
  </div>
</template>

<script>
import { loginWithSpotify } from '@/services/spotifyApi';

export default {
  methods: {
    Login() {
      loginWithSpotify(); // Spotify kullanıcı girişi için login fonksiyonunu çağırma
    }
  }
}
</script>

<style>
.login-button {
  font-size: 24px !important;
}
</style>