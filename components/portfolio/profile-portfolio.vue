<template>
  <div class="profile-portfolio">
    <p class="profile-portfolio__subtitle">
      {{ $t('at_the_moment') }}
    </p>

    <div class="profile-portfolio__items">
      <portfolio-item v-for="item in portfolio.current" :key="item.id" :item="item" />
    </div>

    <p class="profile-portfolio__subtitle">
      {{ $t('before') }}
    </p>

    <div class="profile-portfolio__items">
      <portfolio-item v-for="item in portfolio.past" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
import portfolioRU from '~/resources/portfolio_ru.json'
import portfolioEN from '~/resources/portfolio_en.json'

const i18n = useI18n()

const { locale } = i18n

const portfolio = computed(() => locale.value === 'eng' ? portfolioEN : portfolioRU)
</script>

<style lang="scss" scoped>
.profile-portfolio {
  &__subtitle {
    @include txt-s-t;
    margin: 24px auto;
    text-align: center;
    color: var(--c-white-500);

    &:first-child {
      margin-top: 0;
    }

    @include desktop-only {
      margin: 40px auto;

      @include txt-l;
    }
  }

  &__items {
    & > *:not(:last-child) {
      margin-bottom: 24px;

      @include desktop-only {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
