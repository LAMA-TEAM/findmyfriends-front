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
        <!-- Weather stats -->
        <!-- <p class="text-2xl font-bold">{{ weather.main.temp }}°C</p> -->
        <p class="text-lg font-bold">{{ weather.weather }} ({{ weather.temperature }}°C)</p>
        <div class="my-2">Lat : {{ newMarkerPos.lat.toFixed(4) }} | Lng : {{ newMarkerPos.lng.toFixed(4) }}</div>
        <div>
          <input class="my-2 input input-bordered input-accent w-full max-w-xs" placeholder="Marker label" type="text" v-model="label"/>
          <button class="btn btn-primary btn-wide" @click="handleCreateNewMarker">Add new marker</button>
        </div>
      </div>
    </div>
    <div class="stats shadow card-bordered">
      <div
        class="stat flex flex-column"
        style="width: 290px; flex-direction: column; align-items: flex-start"
      >
        <div class="title font-bold">Friends</div>
        <template v-if="friends.length !== 0">
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
        </template>
        <template v-else>
          <div class="stat-desc">You don't have any friends yet</div>
        </template>
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
    <Map @marker-clicked="handleMarkerClicked" :markers="waypoints" />
  </div>
</template>

<script setup>
import { getFriends as getFriendsApi, createWaypoint, getWaypoints as getWaypointsApi } from "~/lib/api";

definePageMeta({
  layout: "dashboard",
});

const friends = ref([]);
const waypoints = ref([]);
const label = ref("");
const weather = ref({});
const newMarkerPos = ref({
  lat: 48.8773406,
  lng: 2.327774
});

onMounted(() => {
  getFriends();
  getWaypoints();
});

// Computed getWeather
const getWeather = async () => {
  if (!newMarkerPos.value.lat || !newMarkerPos.value.lng) return;

  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${newMarkerPos.value.lat}&longitude=${newMarkerPos.value.lng}&hourly=temperature_2m&hourly=weathercode`);
  if (!res) return;

  const data = await res.json();

  const hourly = data.hourly.time;
  const index = hourly.findIndex((hour) => {
    const date = new Date(hour);
    const now = new Date();
    return date.getHours() === now.getHours();
  });

  const temperature = data.hourly.temperature_2m[index];
  const weathercode = data.hourly.weathercode[index];
  let weatherLabel = "";

  // WMO (WWO) weather codes
  switch (weathercode) {
    case 0:
      weatherLabel = `Clear sky`;
      break;
    case 1:
    case 2:
    case 3:
      weatherLabel = `Partly cloudy`;
      break;
    case 45:
    case 48:
      weatherLabel = `Fog`;
      break;
    case 51:
    case 53:
    case 55:
      weatherLabel = `Drizzle`;
      break;
    case 56:
    case 57:
      weatherLabel = `Freezing Drizzle`;
      break;
    case 61:
    case 63:
    case 65:
      weatherLabel = `Rain`;
      break;
    case 66:
    case 67:
      weatherLabel = `Freezing Rain`;
      break;
    case 71:
    case 73:
    case 75:
      weatherLabel = `Snow Fall`;
      break;
    case 77: 
      weatherLabel = `Snow grains`;
      break;
    case 80:
    case 81:
    case 82:
      weatherLabel = `Rain Showers`;
      break;
    case 85:
    case 86:
      weatherLabel = `Snow Showers`;
      break;
    case 95:
      weatherLabel = `Thunderstorm`;
      break;
    case 96:
    case 99:
      weatherLabel = `Thunderstorm with Hail`;
      break;
    default:
      weatherLabel = `Unknown`;
  }

  weather.value = {
    temperature,
    weather: weatherLabel
  };
};

const getFriends = async () => {
  const res = await getFriendsApi();
  if (!res) return;

  friends.value = res.data;
};

const getWaypoints = async () => {
  const res = await getWaypointsApi();
  if (!res) return;

  waypoints.value = res.data;
};

const twoLetters = (str) => {
  return str.substring(0, 2);
};

const handleMarkerClicked = (marker) => {
  newMarkerPos.value = marker.position;
  getWeather();
};

const handleCreateNewMarker = async () => {
  const res = await createWaypoint({
    title: label.value,
    latitude: newMarkerPos.value.lat,
    longitude: newMarkerPos.value.lng
  });
  if (!res) return;

  label.value = "";
  getWaypoints();
}
</script>
