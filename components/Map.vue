<script setup>
const emits = defineEmits(["marker-clicked"]);

const openedMarkerID = ref(null);
const center = ref({ lat: 48.8773406, lng: 2.327774 });
const newMarker = ref({
  description: "",
  position: {
    lat: 48.8773406,
    lng: 2.327774,
  },
});

function placeMarker(e) {
  newMarker.position = {
    lat: e.latLng.lat(),
    lng: e.latLng.lng()
  }
  console.log(newMarker.position)
}

const handleDragEnd = (e) => {
  newMarker.position = {
    lat: e.latLng.lat(),
    lng: e.latLng.lng()
  }

  emits("marker-clicked", newMarker.position);
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
            :draggable="true"
            ref="newMarker"
            :position="newMarker.position"
            @dragend="handleDragEnd"
          />
        </GMapMap>
      </div>
</template>