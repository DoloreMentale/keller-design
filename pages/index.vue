<template>
  <h1 class="portfolio__title">Anton Keller</h1>

  <p class="portfolio__description">
    {{ $t('experience_description') }}
  </p>

  <PortfolioList />
</template>

<style scoped lang="scss">
.portfolio {
  &__title {
    color: #{$black-100};

    margin-bottom: 24px;

    .dark-mode & {
      color: #{$white-100};
    }
  }

  &__description {
    white-space: pre-wrap;

    color: #{$black-100};

    .dark-mode & {
      color: #{$white-100};
    }
  }
}
</style>