<script setup>
import { usePlaceStore } from './store/lugares/index.js'
import { ref } from 'vue';
import { RouterView } from 'vue-router';
const usePlace = usePlaceStore()

const isLoading= ref(usePlace.isLoading)

usePlace.getInitialLocation()

</script>

<template>
  <RouterView class="body" style="position: relative;"/>
</template>

<style scoped>
</style>
