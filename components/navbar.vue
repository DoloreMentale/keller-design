<script setup>
const colorMode = useColorMode();
const changeColorMode = () => colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark';
</script>

<template>
<div class="navbar">
  <div class="navbar__main">
    <nuxt-icon class="navbar__main__logo" name="logo" />
  </div>

  <div class="navbar__extra">
    <nuxt-icon class="navbar__extra__theme" name="theme" @click="changeColorMode" />
  </div>
</div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__main {
    &__logo {
      ::v-deep(svg) {
        width: 122px;
        height: 45px;
      }
    }
  }

  &__extra {
    &__theme {
      ::v-deep(svg) {
        cursor: pointer;

        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>