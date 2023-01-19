<script setup>
import { ref } from "vue";

const openedMarkerID = ref(null);
const center = ref({ lat: 48.8773406, lng: 2.327774 });
const newMarker = ref({
  description: "",
  position: {
    lat: 0,
    lng: 0,
  },
});

function placeMarker(e) {
  newMarker.position = {
    lat: e.latLng.lat(),
    lng: e.latLng.lng()
  }
  console.log(newMarker.position)
}

</script>

<template>
      <div class="mb-20">
        <GMapMap
          :center="center"
          :zoom="7"
          :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
          }"
          ref="myMapRef"
          style="width: 75vw; height: 850px; margin: auto"
          @click="placeMarker"
        >
          <GMapMarker
            ref="newMarker"
            :position="newMarker.position"
          />
        </GMapMap>
      </div>
</template>