<script setup>
const emits = defineEmits(["marker-clicked"]);

const openedMarkerID = ref(null);
const center = ref({ lat: 48.8773406, lng: 2.327774 });

const props = defineProps({
  markers: {
    type: Array,
    default: () => [],
  },
});

const newMarker = ref({
  label: "",
  position: {
    lat: 48.8773406,
    lng: 2.327774,
  },
});

const userMarkers = ref([
  {
    label: "",
    position: {
      lat: 48.0028,
      lng: 0.1964
    }
  }
])

const handleDragEnd = (e) => {
  newMarker.position = {
    lat: e.latLng.lat(),
    lng: e.latLng.lng()
  }

  emits("marker-clicked", newMarker);
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
        >
          <GMapMarker
            :draggable="true"
            ref="newMarker"
            :position="newMarker.position"
            @dragend="handleDragEnd"
          />
          <GMapMarker
            style="color: #111"
            :key="index"
            v-for="(m, index) in markers"
            :icon="'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'"
            :position="{ lat: m.latitude, lng: m.longitude }"
          />
        </GMapMap>
      </div>
</template>