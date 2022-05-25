import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    nitro: process.env.NODE_ENV !== 'production',
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jordan Heale',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'font-sans leading-normal text-gray-700 bg-gray-100 print:bg-white min-h-screen'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Full stack web developer in Greater London, England' },
      { hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, laravel, development, software, portfolio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url',  property: 'og:url', content: process.env.BASE_URL },
      { hid: 'og:description', property: 'og:description', content: 'Full stack web developer in Greater London, England' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://google-analytics.nuxtjs.org
    ['@nuxtjs/google-analytics', {
        id: process.env.NODE_ENV === 'production' ? process.env.GOOGLE_ANALYTICS_ID : false,
    }],
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000',
    gzip: true,
    routes: [
      '/'
    ],
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: process.env.BASE_URL + '/sitemap.xml'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: '404.html'
  },
})
