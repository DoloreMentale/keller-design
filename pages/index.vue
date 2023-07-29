<template>
<h1 class="portfolio__title">Anton Keller</h1>

<p class="portfolio__description">Продуктовый дизайнер. 11 лет в сфере дизайна, <br>
  4 года в разработке B2C проектов. <br> Специализируюсь на финтех решениях</p>

<PortfolioList />
</template>

<script setup>
</script>

<style scoped lang="scss">
.portfolio {
  &__title {
    @include txt-700;

    @media screen and (max-width: $mobile) {
      font-size: 24px;
    }

    font-size: 48px;
    color: #{$black-100};

    margin-bottom: 24px;
  }

  .dark-mode &__title {
    color: #{$white-100};
  }

  &__description {
    @include txt-500;

    @media screen and (max-width: $mobile) {
      font-size: 16px;
    }

    font-size: 28px;
    color: #{$black-100};
  }

  .dark-mode &__description {
    color: #{$white-100};
  }
}
</style>