<script setup>
import AppLogo from './app-logo.vue';
</script>

<template>
  <header class="app-header">
    <div class="app-header__main">
      <app-logo />

      <div class="app-header__actions">
        <a href="https://vk.com/tomkeller" class="app-header__control" target="_blank">
          <nuxt-icon name="socials/vk" />
        </a>

        <a href="https://t.me/AntonKeller" class="app-header__control" target="_blank">
          <nuxt-icon name="socials/telegram" />
        </a>

        <div class="app-header__main_divider" />

        <a href="https://www.behance.net/Kellerpro" class="app-header__control" target="_blank">
          <nuxt-icon name="socials/behance" />
        </a>

        <a href="#" class="app-header__cv" target="_blank">
          <nuxt-icon name="download" />
          Скачать CV
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  z-index: 1;

  padding: 10px 16px;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;

  position: sticky;
  top: 0;

  @include desktop-only {
    padding: 48px 60px 0;
    height: 104px;
  }

  @include to-desktop {
    background: var(--c-white-100);
  }

  &__main {
    display: flex;
    align-items: center;
    width: 100%;

    &_divider {
      align-self: center;

      width: 1px;
      height: 14px;

      margin: 0 auto;

      background-color: var(--c-white-500);

      @include mobile-up {
        margin: 0 24px;
      }
    }
  }

  &__actions {
    width: 100%;

    display: flex;
    align-items: center;

    margin-left: 16px;

    @include mobile-up {
      width: auto;
      margin-left: auto;
    }
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    padding: 8px;

    cursor: pointer;

    color: var(--c-black-100);

    @include btn-transition;

    &:hover {
      color: var(--c-red-200);
    }

    &:active {
      color: var(--c-red-100);
    }

    &:not(:last-of-type) {
      margin-right: 4px;
    }
  }

  &__cv {
    padding: 12px;
    background: var(--c-black-200);
    color: var(--c-white-100);
    border-radius: 12px;

    margin-left: auto;
    margin-right: 6px;

    @include btn-transition;

    &:hover {
      background: var(--c-red-100);
    }

    &:active {
      background: var(--c-red-200);
    }

    @include txt-t-m;

    .nuxt-icon {
      margin-right: 4px;

      @include mobile-up {
        margin-right: 8px;
      }
    }

    @include desktop-only {
      margin-left: 24px;
      margin-right: 0;

      padding: 12px 24px;

      @include txt-l-sb;
    }
  }
}
</style>
