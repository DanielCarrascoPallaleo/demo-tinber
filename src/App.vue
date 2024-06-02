<script setup>
import Mapa from './components/GoogleMap.vue'
import { usePlaceStore } from './store/lugares/index.js'
import { ref } from 'vue';

const usePlace = usePlaceStore()

const isLoading= ref(usePlace.isLoading)

usePlace.getInitialLocation()

</script>

<template>
  <div>
   <h1>Tinber</h1>
   <div style="width: 800px;">
    <Mapa />
   </div>
  </div>
  
</template>

<style scoped>
</style>
