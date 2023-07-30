
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  buildModules: ['@nuxtjs/google-fonts'],
  modules: ['@nuxtjs/color-mode', 'nuxt-icons', '@nuxtjs/device', '@nuxtjs/i18n'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  },
  i18n: {
    vueI18n: './i18n.config.js'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/css/mixins/fonts.scss" as *;
            @use "~/assets/css/mixins/media.scss" as *;
            @use "~/assets/css/variables/colors.scss" as *;
            @use "~/assets/css/variables/breakpoints.scss" as *;
          `
        }
      }
    }
  }
});
