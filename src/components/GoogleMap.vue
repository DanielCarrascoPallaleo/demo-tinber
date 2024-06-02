<template>
  <div>
    <div ref="map" style="height: 400px;"></div>
    
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'GoogleMapComponent',
  setup() {
    const map = ref(null);
    const startLocation = ref('');
    const endLocation = ref('');

    const calculateRoute = () => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();

      const request = {
        origin: startLocation.value,
        destination: endLocation.value,
        travelMode: 'DRIVING'
      };

      directionsService.route(request, (response, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    };

    onMounted(() => {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDP6D15S_cbaSo4zRlWfZexneA3g1SEp78&callback=initMap`;
      googleMapsScript.defer = true;
      googleMapsScript.async = true;
      googleMapsScript.onload = () => {
        const mapOptions = {
          zoom: 12,
          center: { lat: -32.992909, lng: -71.505477 } // Centro del mapa en el punto de inicio
        };

        const googleMap = new google.maps.Map(map.value, mapOptions);
        
        // Asignar el mapa a la instancia de Vue
        map.value = googleMap;
        
        // Definir los puntos de inicio y fin
        const startPoint = { lat: -32.992909, lng: -71.505477 };
        const endPoint = { lat: -33.03647485226519, lng: -71.48670084802883 };

        // Trazar la ruta desde el punto de inicio al punto de fin
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const request = {
          origin: startPoint,
          destination: endPoint,
          travelMode: 'DRIVING'
        };

        directionsService.route(request, (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
        
        // Mostrar la ruta en el mapa
        directionsRenderer.setMap(googleMap);
      };

      document.head.appendChild(googleMapsScript);
    });

    return { map, startLocation, endLocation, calculateRoute };
  }
}
</script>

<style>
/* Estilos opcionales */
</style>


