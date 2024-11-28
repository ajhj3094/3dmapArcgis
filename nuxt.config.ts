// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/Aura'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ['~/assets/scss/main.scss'],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        // 排除終端機 dart sass 警告
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
