<script setup>
import PortfolioListItem from "./portfolio-list-item.vue";
import portfolios from "~/enums/portfolios";

const portfoliosList =  ref(portfolios);
</script>

<template>
  <template v-for="(item, index) in portfolios" :key="index">
    <p v-if="!index" class="portfolio-list__text-divider">В настоящее время</p>

    <PortfolioListItem  :item="item" />

    <p v-if="!index" class="portfolio-list__text-divider">Ранее</p>
  </template>
</template>

<style scoped lang="scss">
.portfolio-list {
  &__text-divider {
    @include txt-400;

    @media screen and (max-width: $mobile) {
      font-size: 12px;
    }

    font-size: 16px;
    color: #{$white-500};

    text-align: center;

    @media screen and (max-width: $mobile) {
      margin: 24px 0;
    }

    margin: 64px 0;
  }
}
</style>