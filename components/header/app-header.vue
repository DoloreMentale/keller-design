<template>
  <header class="app-header">
    <div class="app-header__main">
      <div class="app-header__links">
        <a href="https://www.behance.net/Kellerpro" class="app-header__control" target="_blank">
          <nuxt-icon name="socials/behance" />
        </a>
        <a href="https://vk.com/tomkeller" class="app-header__control" target="_blank">
          <nuxt-icon name="socials/vk" />
        </a>
        <a href="https://t.me/AntonKeller" class="app-header__control" target="_blank">
          <nuxt-icon name="socials/telegram" />
        </a>
      </div>

      <div class="app-header__actions">
        <lang-switcher />

        <a :href="cvLink" :download="cvName" class="app-header__cv" target="_blank">
          <nuxt-icon name="download" />
          {{ $t('header.cv') }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import LangSwitcher from './lang-switcher.vue'

const i18n = useI18n()

const { locale } = i18n

const cvLink = computed(() => locale.value === 'eng' ? '/keller_en.pdf' : '/keller_ru.pdf')
const cvName = computed(() => locale.value === 'eng' ? 'keller_en.pdf' : 'keller_ru.pdf')
</script>

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

  &__links {
    display: flex;
    align-items: center;
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
    justify-content: flex-end;

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

    margin-left: 8px;
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
