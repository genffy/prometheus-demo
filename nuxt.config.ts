// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { register } from 'prom-client';

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // baseURL: '/nuxt',
    head: {
      title: 'A Better Nuxt 3 Starter',
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.svg' }]
    }
  },
  modules: [
    '@nuxt/ui',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt'
  ],
  components: [
    {
      path: '@/components',
      pathPrefix: false
    }
  ],
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: ''
          })
        ],
        dts: true
      })
    ]
  },
  nitro: {
    routeRules: {
      '/metrics': { headers: { 'Content-Type': register.contentType } }
    },
  }
})
