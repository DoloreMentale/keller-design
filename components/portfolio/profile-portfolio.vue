<template>
  <div class="profile-portfolio">
    <p class="profile-portfolio__subtitle">
      В настоящее время
    </p>

    <div class="profile-portfolio__items">
      <portfolio-item v-for="item in current" :key="item.id" :item="item" />
    </div>

    <p class="profile-portfolio__subtitle">
      Раньше
    </p>

    <div class="profile-portfolio__items">
      <portfolio-item v-for="item in past" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
import { current, past } from '~/resources/portfolio.json'
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
