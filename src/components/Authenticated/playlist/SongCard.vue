<template>
    <v-list-item style="margin-bottom: 4px; cursor: default;" class="w-100"
    :title="song.track.name" :prepend-avatar="song.track.album.images[0].url" 
    :subtitle="song.track.artists.map(a => a.name).join(', ')"/>
    <!-- <v-divider class="w-25 mx-auto bg-transparent"></v-divider> -->
</template>

<!-- <template>
    <v-card variant="plain" class="bg-transparent song-card" :title="song.track.name" :subtitle="song.track.artists.map(a => a.name).join(', ')" :prepend-avatar="song.track.album.images[0].url">
    </v-card>
</template> -->

<script>
export default {
    props: {
        song: Object
    },
};
</script>

<style scoped>
.song-card {
    height: 60px;
}

.v-card-title {
    font-size: 17px !important;
    line-height: 1.5rem !important;
}
.v-card-subtitle {
    padding: 0 0 0.25rem;
    font-size: 12px;
}
</style>