<template>
  <div
    class="hidden flex-col items-start pl-5 pr-0 py-6 lg:flex md:flex gap-5"
    style="width: 337px"
  >
    <h1 class="text-2xl font-bold">Nice to see you again USER !</h1>

    <div class="stats shadow card-bordered">
      <div
        class="stat flex flex-column"
        style="width: 290px; flex-direction: column; align-items: center"
      >
        <img src="~/assets/img/bermuda-751.png" style="width: 170px" />
        <div class="stat-title">Add a pin</div>
        <div class="stat-desc">Drag the marker where you want on the map</div>
        <div class="my-2">Lat : {{ newMarker.position.lat.toFixed(4) }} | Lng : {{ newMarker.position.lng.toFixed(4) }}</div>
        <div>
          <input v-model="newMarker.label" class="my-2 input input-bordered input-accent w-full max-w-xs" placeholder="Marker label" type="text"/>
          <button class="btn btn-primary btn-wide" @click="addNewMarker">Add new marker</button>
        </div>
      </div>
    </div>
    <div class="stats shadow card-bordered">
      <div
        class="stat flex flex-column"
        style="width: 290px; flex-direction: column; align-items: flex-start"
      >
        <div class="title font-bold">Friends</div>
        <div class="flex flex-row pt-3" style="align-items: center" v-for="friend of friends" :key="friend._id">
          <div class="avatar placeholder pr-3">
            <div
              class="bg-neutral-focus text-neutral-content rounded-full w-10"
            >
              <span class="uppercase">{{ twoLetters(friend.username) }}</span>
            </div>
          </div>
          <div class="stat-desc">{{ friend.username }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-col items-start lg:flex md:flex py-6 px-5 gap-5 w-full">
    <div class="flex flex-row gap-3" style="align-items: center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        />
      </svg>
      <h1 class="text-2xl font-bold">Map</h1>
    </div>
    <Map @marker-clicked="handleMarkerClicked" />
  </div>
</template>

<script setup>
import { getFriends as getFriendsApi } from "~/lib/api";

definePageMeta({
  layout: "dashboard",
});

const friends = ref([]);

onMounted(() => {
  getFriends();
});

const getFriends = async () => {
  const res = await getFriendsApi();
  if (!res) return;

  friends.value = res.data;

  console.log(friends.value);
};

const twoLetters = (str) => {
  return str.substring(0, 2);
};
const newMarker = ref({
  label: "",
  position: {
    lat: 48.8773406,
    lng: 2.327774
  }
  
})

const addNewMarker = (e) => {
  console.log(newMarker.value)
}

const handleMarkerClicked = (marker) => {
  console.log("from index.vue", marker);
  newMarker.value = marker
};
</script>
