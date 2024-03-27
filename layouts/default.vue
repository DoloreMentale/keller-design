<template>
  <div class="default-layout">
    <app-header />

    <button type="button" class="default-layout__arrow-up mobile-up" @click="up()">
      <nuxt-icon name="arrow-up" />
    </button>

    <div class="default-layout__container">
      <div class="default-layout__content">
        <slot />
      </div>

      <app-footer class="default-layout__footer" />
    </div>
  </div>
</template>

<script setup>
import AppHeader from '~/components/header/app-header.vue';
import AppFooter from '~/components/app-footer.vue';

const up = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  min-height: 100vh;

  position: relative;

  &__container {
    padding: 0 24px;
    max-width: 700px;
    margin: 0 auto;
  }

  &__content {
    padding-top: 24px;

    @include mobile-up {
      padding-top: 40px;
    }
  }

  &__footer {
    margin: 24px 0;
  }

  &__arrow-up {
    position: fixed;
    border-radius: 14px;
    background: var(--c-white-100);

    transition: background 0.3s;

    &:hover {
      background: var(--c-white-200);
    }

    &:active {
      background: var(--c-white-300);
      color: var(--c-red-200);
    }

    @include tablet-only {
      right: 8px;
    }

    bottom: 8px;
    right: 60px;
  }
}
</style>
