<script setup>
import PortfolioListItem from "./portfolio-list-item.vue";
import portfolios from "~/enums/portfolios";
</script>

<template>
  <template v-for="(item, index) in portfolios" :key="index">
    <p v-if="!index" class="portfolio-list__text-divider">{{ $t('currently') }}</p>

    <PortfolioListItem :item="item" />

    <p v-if="!index" class="portfolio-list__text-divider">{{ $t('before') }}</p>
  </template>
</template>

<style scoped lang="scss">
.portfolio-list {
  &__text-divider {
    @include txt-400;

    font-size: 12px;
    margin: 24px 0;

    @include mobile-up {
      font-size: 16px;
      margin: 64px 0;
    }

    color: #{$white-500};

    text-align: center;
  }
}
</style>