<script setup>
import HeaderLogo from './header-logo.vue';
import LangSwitch from './lang-switch.vue';

const colorMode = useColorMode();

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
    <header-logo />

    <div class="navbar__main__divider" />

    <a v-for="(social, index) in socials" :key="index" class="navbar__main__social navbar__control" :href="social.link" target="_blank">
      <nuxt-icon :name="social.icon" />
    </a>
  </div>

  <div class="navbar__controls">
    <nuxt-icon class="navbar__control" name="theme" @click="switchColorMode()" />
    <lang-switch class="navbar__control" />
  </div>
</div>
</template>

<style lang="scss" scoped>
.navbar {
  z-index: 1;

  padding: 10px 16px;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;

  background: #{$white-100};

  transition: background 0.3s;

  @include mobile-up {
    padding: 40px 60px;
  }

  @include desktop-only {
    position: relative;
  }

  .dark-mode & {
    background: #{$black-100};
  }

  &__main {
    display: flex;
    align-items: center;

    &__divider {
      align-self: center;

      width: 1px;
      height: 14px;

      margin: 0 16px;

      @include mobile-up {
        margin: 0 40px;
      }

      background-color: #{$white-500};
    }
  }

  &__controls {
    display: flex;
    align-items: center;
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    padding: 8px;

    cursor: pointer;

    &:hover {
      &, .nuxt-icon {
        color: #{$red-200};
      }
    }

    &:active {
      &, .nuxt-icon {
        color: #{$red-100};
      }
    }

    &:not(:last-child) {
      margin-right: 4px;
    }
  }
}
</style>