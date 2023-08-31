<template>
    <v-card class="bg-transparent playlist-card" :title="name" :subtitle="owner" :prepend-avatar="imageSource">
    </v-card>
</template>

<script>
export default {
    props: {
        name: String,
        owner: String,
        imageSource: String,
    },
};
</script>

<style scoped>
.playlist-card {
    padding: 2px 42px;
}

.playlist-card:hover {
    transform: scale(0.95);
    transition: transform 0.2s ease-in-out;
    opacity: 0.8;
    background-color: #d1d2d40d !important;
}
</style>