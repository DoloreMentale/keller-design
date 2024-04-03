<template>
  <div class="index-page">
    <Head>
      <Title>4Keller</Title>
    </Head>

    <profile-description />
    <profile-portfolio class="index-page__portfolio" />
  </div>
</template>

<script setup>
import ProfileDescription from '~/components/profile-description.vue';
import ProfilePortfolio from '~/components/portfolio/profile-portfolio.vue';
</script>

<style scoped lang="scss">
.index-page {
  &__portfolio {
    margin-top: 24px;

    @include desktop-only {
      margin-top: 40px;
    }
  }
}
</style>
