<script setup>
import store from '../store';
</script>

<template>
    <div v-if="store.state.isAuth" class="user-profile">
        Baran    AAA
    </div>
    <div v-else class="user-profile">
       No Profile
    </div>
</template>    