import { defineStore } from 'pinia'

export const usePlaceStore = defineStore('usePlace', {
  state: () => ({
    isLoading: false,
    userLocation: null
  }),
  getters: {
    isUserLocationReady: (state) => !!state.userLocation,
  },
  actions: {
    getInitialLocation() {
        // Activar el indicador de carga
        this.isLoading = true;
        // simular retrazo de 2 segundos
        setTimeout(()=>{
             // Utilizar getCurrentPosition para obtener la ubicación del usuario
        navigator.geolocation.getCurrentPosition(
            (position) => {
              // Desactivar el indicador de carga
              this.isLoading = false;
    
              // Almacenar las coordenadas de la ubicación del usuario en el estado
              this.userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
            },
            (error) => {
              // En caso de error, desactivar el indicador de carga y manejar el error
              this.isLoading = false;
              console.error('Error al obtener la ubicación:', error);
            }
          );
        }, 2000)
  
       
      },
  },
})