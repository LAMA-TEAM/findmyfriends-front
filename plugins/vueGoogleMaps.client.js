import VueGoogleMaps from "@fawmi/vue-google-maps"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyCmW4G-2VXbBcmZE_i7hUESo8-GI8eKxxQ",
    },
  })
})