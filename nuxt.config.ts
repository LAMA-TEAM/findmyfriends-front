// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: [],
  buildModules: [
    "@nuxt/postcss8",
    // ...
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  css: [
    '@/assets/css/main.scss',
  ],
};
