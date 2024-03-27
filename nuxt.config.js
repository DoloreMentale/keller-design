
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  devtools: { enabled: false },
  css: ['~/assets/styles/index.scss'],
  modules: ['nuxt-icons', '@nuxtjs/device', '@nuxt/image', '@nuxtjs/google-fonts'],
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
  }
});
