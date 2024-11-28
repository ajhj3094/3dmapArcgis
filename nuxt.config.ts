// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ['~/assets/scss/main.scss'],
  // eslint: {
  //   config: {
  //     standalone: false // <---
  //   }
  // }
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
