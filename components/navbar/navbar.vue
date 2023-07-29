<script setup>
const colorMode = useColorMode();
const { isMobile } = useDevice();

const socials = ref([
  {
    icon: 'socials/behance',
    link: 'https://www.behance.net/Kellerpro',
  },
  {
    icon: 'socials/vk',
    link: 'https://vk.com/tomkeller',
  },
  {
    icon: 'socials/telegram',
    link: 'https://t.me/AntonKeller',
  },
]);

const switchColorMode = () => colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark';
</script>

<template>
<div class="navbar">
  <div class="navbar__main">
    <nuxt-icon class="navbar__main__logo" :name="isMobile ? 'logo-mobile' : 'logo'" />

    <div class="navbar__main__divider" />

    <a v-for="(social, index) in socials" :key="index" class="navbar__main__social" :href="social.link" target="_blank">
      <nuxt-icon :name="social.icon" />
    </a>
  </div>

  <div class="navbar__extra">
    <nuxt-icon class="navbar__extra__theme" name="theme" @click="switchColorMode" />

    <nuxt-icon class="navbar__extra__lang" name="lang" />
  </div>
</div>
</template>

<style lang="scss" scoped>
.navbar {
  // position: fixed;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__main {
    display: inherit;
    align-items: inherit;

    &__logo {
      ::v-deep(svg) {
        @media screen and (max-width: $mobile) {
          height: 45px;
          width: min-content;
        }

        width: 122px;
        height: 45px;
      }
    }

    &__divider {
      width: 1px;
      height: 14px;

      @media screen and (max-width: $mobile) {
        margin: 0 16px;
      }

      margin: 0 40px;
      background-color: #{$white-500};
    }

    &__social {
      ::v-deep(svg) {
        cursor: pointer;

        width: 22px;
        height: 22px;

        margin: 0 12px;
      }
    }
  }

  &__extra {
    display: inherit;
    align-items: inherit;
    // margin-right: 120px;

    &__theme {
      ::v-deep(svg) {
        cursor: pointer;

        width: 20px;
        height: 20px;

        margin: 0 12px;
      }
    }

    &__lang {
      ::v-deep(svg) {
        cursor: pointer;

        width: 20px;
        height: 20px;

        margin-left: 12px;
      }
    }
  }
}
</style>