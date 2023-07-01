export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  buildModules: ['@nuxtjs/google-fonts'],
  modules: ['@nuxtjs/color-mode', 'nuxt-icons'],
  googleFonts: {
    families: {
      Inter: {
        wght: [400, 500, 700]
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/css/mixins/fonts.scss";
            @import "~/assets/css/variables/colors.scss";
          `
        }
      }
    }
  }
});
