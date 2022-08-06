import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-ionic'],
  css: ['assets/css/ionic.css'],
  // builder: 'webpack',
  typescript: {
    shim: false,
  },
})
