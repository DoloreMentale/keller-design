
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  devtools: { enabled: false },
  css: ['~/assets/styles/index.scss'],
  modules: ['nuxt-icons', '@nuxtjs/device', '@nuxt/image', '@nuxtjs/google-fonts', '@nuxtjs/i18n'],
  googleFonts: {
    preload: true,
    families: {
      Inter: [300, 400, 500, 600, 700],
      Onest: [400, 600, 700]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/dev/index.scss" as *;
          `
        }
      }
    }
  },
  i18n: {
    defaultLocale: 'ru',
    langDir: './resources/lang',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n',
      redirectOn: 'root'
    },
    compilation: {
      strictMessage: false
    },
    locales: [
      {
        code: 'ru',
        file: 'ru.json'
      },
      {
        code: 'eng',
        file: 'en.json'
      }
    ]
  }
});
