<template>
  <div class="lang-switcher">
    <div
      :class="['lang-switcher__select', { 'lang-switcher__select--active': state }]"
      @click="onClick"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <span class="lang-switcher__locale">
        {{ locale }}
      </span>
      <nuxt-icon class="lang-switcher__chevron" name="chevron-down" />

      <transition name="lang-dropdown">
        <div class="lang-switcher__dropdown desktop-only" v-show="state">
          <div
            :class="['lang-switcher__dropdown-item', { 'lang-switcher__dropdown-item--active': loc === locale }]"
            v-for="loc in locales"
            :key="loc"
            @click="setLocale(loc)"
          >
            {{ NAME_BY_LOCALE[loc] }}
          </div>
        </div>
      </transition>
    </div>

    <client-only>
        <vue-bottom-sheet
          ref="bottomSheet"
          overlay-color="#282A31B2"
          :transition-duration="0.2"
          :max-height="188"
          :max-width="1280"
          @closed="state = false"
        >
          <template #header>
            <p class="lang-switcher__title">{{ $t('select-language') }}</p>
          </template>
          <template #default>
            <div class="lang-switcher__options">
              <lang-button v-for="loc in locales" :key="loc" @click="setLocale(loc)">
                {{ NAME_BY_LOCALE[loc] }}
              </lang-button>
            </div>
          </template>
        </vue-bottom-sheet>
    </client-only>
  </div>
</template>

<script setup>
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet"
import LangButton from '../lang-button.vue'

import  "@webzlodimir/vue-bottom-sheet/dist/style.css"
import { useMediaQuery } from '@vueuse/core';

import { ref } from "vue"

const bottomSheet = ref(null)

const open = () => {
  bottomSheet.value.open()
}

const close = () => {
  bottomSheet.value.close()
}

const i18n = useI18n()
const { locale, availableLocales } = i18n

const locales = computed(() => [...availableLocales].reverse())

const state = ref(false)

const NAME_BY_LOCALE = {
  ru: 'Русский',
  eng: 'English'
}

const isMobile = useMediaQuery('(max-width: 1279px)')

const setLocale = (loc) => {
  locale.value = loc
  close()
}

watch(isMobile, (val) => {
  if (!val) {
    close()
  }
})

watch(state, (val) => {
  if (!isMobile.value) return

  if (val) {
    open()
  }
  else {
    close()
  }
})

const onClick = () => {
  if (!isMobile.value) return

  state.value = !state.value
}

const mouseEnter = () => {
  if (isMobile.value) return

  state.value = true
}

const mouseLeave = () => {
  if (isMobile.value) return

  state.value = false
}
</script>

<style lang="scss">
.lang-switcher {
  $this: &;

  &__select {
    cursor: pointer;
    padding: 8px;
    position: relative;

    @include btn-transition;

    &:hover {
      color: var(--c-red-200);
    }

    &:active, &--active {
      color: var(--c-red-100);

      #{$this}__chevron {
        transform: rotateZ(180deg);
      }
    }
  }

  &__locale {
    font-size: 15px;
    font-weight: 700;
    line-height: 21px;
    text-transform: capitalize;

    margin-right: 8px;
  }

  &__chevron {
    display: inline-block;
    transform-origin: 50% 55%;
    transition: transform 0.3s;
  }

  &__title {
    width: 100%;
    text-align: center;

    @include txt-h-b;
    color: var(--c-black-200)
  }

  &__options {
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    padding: 0 16px 20px;

    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__dropdown {
    position: absolute;
    top: 37px;
    left: 4px;

    &-item {
      padding: 4px;

      @include txt-s;

      color: var(--c-black-100);

      &--active {
        color: var(--c-white-500);
        cursor: not-allowed;
      }

      &:not(&--active) {
        &:hover {
          color: var(--c-red-100);
        }
      }
    }
  }
}

.lang-dropdown {
  &-enter-to, &-leave-from {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
