<script setup>
import { getPlaylistContent } from '../services/spotifyApi.js';
import PlaylistDetailCard from '@/components/Authenticated/playlist/PlaylistDetailCard.vue';
import SongCard from '@/components/Authenticated/playlist/SongCard.vue';
import AnimatedButton from '@/components/Authenticated/playlist/AnimatedButton.vue';
</script>

<template>
    <v-container v-if="playlist != null" class="playlist-content-container w-50 mx-auto py-10">
        <v-row no-gutters>
            <v-col cols="4">
                <PlaylistDetailCard :playlist="playlist" />

                <!-- <v-btn class="back-library-button" block variant="plain">
                    <font-awesome-icon icon="arrow-circle-left" 
                    style="top: -1px; position: relative; margin-right: 2px;"/>Back Library
                </v-btn>

                <v-btn class="stopify-button" block variant="plain">
                    <font-awesome-icon :icon="['fab', 'spotify']" 
                    style="top: -1px; position: relative; margin-right: 2px;"/>Stopify
                </v-btn> -->

                <AnimatedButton 
                    :text="'Back Library'" 
                    :icon="['far', 'circle-left']" 
                    :primaryColor="'#ff0050'" 
                    :secondaryColor="'#ff005087'"
                    />
            </v-col>
            <v-col>
                <v-card class="playlist-content-card mx-4 pa-2" variant="text">
                    <div>
                        <v-list v-if="playlist != null" variant="plain" bg-color="#161618">
                            <SongCard v-for="(song, index) in playlist.tracks.items" :song="song" />
                        </v-list>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        playlistId: String
    },
    data() {
        return {
            playlist: null
        }
    },
    async beforeCreate() {
        const playlistContent = await getPlaylistContent(this.playlistId);

        this.playlist = playlistContent;
    }
};
</script>

<style scoped>
.playlist-content-container {
    max-height: 640px !important;
    overflow-y: hidden !important;
    background-color: #0e0e0f;
}

.playlist-content-card {
    height: 560px;
    border: 1px solid rgba(128, 128, 128, 0.471);
}

.playlist-content-card>div {
    height: 542px;
    overflow: auto;
}


/* SCROLL BAR */
::-webkit-scrollbar {
    width: 0;
    padding: 4px 0;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.234);
}

::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.587);
    border-radius: 4px;
}

/* BUTTONS */
/* .stopify-button,
.back-library-button {
  transform: perspective(1500px) rotateY(30deg);
  transition: transform 1s ease 0s;

  &:hover {
    transform: perspective(3000px) rotateY(-30deg);
    transition: transform 0.6s ease-in-out 0s;
  }
} */
</style>