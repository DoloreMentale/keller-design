<template>
  <div class="layout" id="app-layout">
    <Navbar />

    <button type="button" class="layout__arrow-up mobile-up" @click="up()">
      <nuxt-icon name="arrow-up" />
    </button>

    <div class="layout__container">
      <div class="layout__content">
        <slot />
      </div>

      <Footer class="layout__footer" />
    </div>
  </div>
</template>

<script setup>
const up = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;

  position: relative;

  &__container {
    padding: 0 24px;
    max-width: 700px;
    margin: 0 auto;

    @include mobile-up {
      padding: 0 24px;
    }
  }

  &__content {
    padding-top: 24px;

    @include mobile-up {
      padding-top: 40px;
    }
  }

  &__footer {
    @include mobile-up {
      margin-top: 40px;
    }
  }

  &__arrow-up {
    position: fixed;
    border-radius: 14px;
    background: #{$white-100};

    transition: background 0.3s;

    .dark-mode & {
      background: #{$black-100};

      &:hover, &:active {
        background: #{$black-200};
      }
    }

    &:hover {
      background: #{$white-200};
    }

    &:active {
      background: #{$white-300};

      & .nuxt-icon {
        color: #{$red-200};
      }
    }

    @include tablet-only {
      right: 8px;
    }

    bottom: 8px;
    right: 60px;
  }
}
</style>