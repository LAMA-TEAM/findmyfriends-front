<script setup>
const emits = defineEmits(["marker-clicked"]);

const openedMarkerLabel = ref(null);

const openMarker = (label) => {
  openedMarkerLabel.value = label
} 

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

const handleDragEnd = (e) => {
  newMarker.position = {
    lat: e.latLng.lat(),
    lng: e.latLng.lng()
  }

  emits("marker-clicked", newMarker);
}

</script>

<template>
      <div class="w-full h-full">
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
          style="width: 100%; height: 100%; margin: auto; border-radius: 6px;"
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
            v-for="(m, index) in markers.waypoints"
            :icon="'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'"
            :position="{ lat: m.latitude, lng: m.longitude }"
            @click="openMarker(m.title)"
          >
            <GMapInfoWindow
              :closeclick="true"
              @closeclick="openMarker(null)"
              :opened="openedMarkerLabel === m.title"
            >
              <div>Label : {{ m.title }}</div>
            </GMapInfoWindow>
          </GMapMarker>
          <GMapMarker style="color: #111" :key="index" v-for="(m, index) in markers.friendsWaypoints"
            :icon="'http://maps.google.com/mapfiles/ms/icons/green-dot.png'" :position="{ lat: m.latitude, lng: m.longitude }"
            @click="openMarker(m.title)">
            <GMapInfoWindow :closeclick="true" @closeclick="openMarker(null)" :opened="openedMarkerLabel === m.title">
              <div>Label : {{ m.title }}</div>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapMap>
      </div>
</template>

<style>
.vue-map-container {
  width: 100%;
  height: 100%;
}
</style>