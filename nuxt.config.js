export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  buildModules: ['@nuxtjs/google-fonts'],
  modules: ['@nuxtjs/color-mode', 'nuxt-icons', '@nuxtjs/device'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/css/mixins/fonts.scss";
            @import "~/assets/css/variables/colors.scss";
            @import "~/assets/css/variables/breakpoints.scss";
          `
        }
      }
    }
  }
});
