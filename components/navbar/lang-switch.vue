<template>
  <div class="lang-switch" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false" ref="parent">
    <button class="lang-switch__btn" type="button" @click="onClick">
      {{ locale }}
    </button>
    <div class="lang-switch__options" v-show="showDropdown">
      <button
          v-for="loc in locales"
          :key="loc.locale"
          type="button"
          :disabled="locale === loc.locale"
          :class="['lang-switch__option', { 'lang-switch__option--disabled': locale === loc.locale }]"
          @click="setLocale(loc.locale)">
        {{ loc.title }}
      </button>
    </div>
  </div>
</template>

<script setup>
const showDropdown = ref(false)
const { locale } = useI18n()
const parent = ref(null)

const { isMobile } = useDevice();

const locales = [
  {
    title: 'English',
    locale: 'en'
  },
  {
    title: 'Русский',
    locale: 'ru'
  }
]

const onClick = () => {
  if (isMobile) {
    locale.value = locale.value === 'ru' ? 'en' : 'ru'
  }
}

const setLocale = (loc) => {
  locale.value = loc
}
</script>

<style lang="scss" scoped>
.lang-switch {
  display: flex;
  flex-direction: column;
  position: relative;

  color: #{$black-100};

  .dark-mode & {
    color: #{$white-100};
  }

  &:hover {
      color: #{$red-200};
  }

  &:active {
      color: #{$red-100};
  }

  &__btn {
    @include txt-700;

    color: inherit;

    font-family: Montserrat, sans-serif;
    font-size: 15px;
    text-transform: capitalize;
  }

  &__options {
    @include mobile-only {
      display: none;
    }

    position: absolute;

    padding-top: 2px;
    top: 38px;
    left: 8px;

    display: flex;
    flex-direction: column;
    align-items: start;

    text-align: left;
  }

  &__option {
    font-size: 12px;
    color: #{$black-100};

    &--disabled {
      color: #{$white-500};
    }

    .dark-mode & {
      color: #{$white-100};

      &--disabled {
        color: #{$white-500};
      }
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>