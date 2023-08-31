<script setup>
import { getUserPlaylists } from '@/services/spotifyApi.js';
import PlaylistCard from './PlaylistCard.vue';
</script>

<template>
    <div class="library-card w-75 mx-auto">
        <v-list lines="two">
            <PlaylistCard v-for="(playlist, index) in playlists" :key="playlist.id" :name="playlist.name" :owner="playlist.owner.display_name" :imageSource="playlist.images[0].url"
            @click="$router.push({ name: 'PlaylistView', params: { playlistId: playlist.id } })" />
        </v-list>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            playlists: []
        }
    },
    async beforeCreate() {
        const playlists = await getUserPlaylists();
        this.playlists = playlists;
    }
}
</script>

<style scoped>
.library-card {
    max-height: 640px !important;
    overflow-y: auto !important;
    border: 1px solid #ffffff22;
}

.library-card>div {
    background-color: #101010cf !important;
    padding: 0;
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.234);
}

::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.587);
    border-radius: 4px;
}
</style>