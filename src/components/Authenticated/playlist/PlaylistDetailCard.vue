<template>
    <v-card class="mx-auto playlist-detail-card" width="200px" variant="text">
        <v-img :src="playlist.images[0].url" height="200px" cover></v-img>
        <div class="pt-3 pb-7 px-3">
            <v-card-title>
            {{ playlist.name }}
        </v-card-title>

        <v-card-subtitle>
            Created by {{ playlist.owner.display_name }}
        </v-card-subtitle>

        <v-card-subtitle style="color: #9aa2bd;">
            {{ getPlaylistCreatedDate() }}
        </v-card-subtitle>
        </div>
        
    </v-card>
</template>

<script>
export default {
    props: {
        playlist: Object
    },
    methods: {
        getPlaylistCreatedDate(){
            let oldestDate = new Date();

            this.playlist.tracks.items.forEach(x => {

                if(oldestDate > Date.parse(x.added_at)){

                    oldestDate = Date.parse(x.added_at);
                }
            });

            return new Date(oldestDate).toLocaleString().split(" ")[0];
        }
    }
};
</script>

<style>
.playlist-detail-card {
  transform: perspective(1500px) rotateY(15deg);
  transition: transform 1s ease 0s;
  border-radius: 1rem;
  &:hover {
    transform: perspective(3000px) rotateY(5deg);
    transition: transform 0.6s ease-in-out 0s;
  }
}
</style>