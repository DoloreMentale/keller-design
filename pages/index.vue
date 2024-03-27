<template>
  <div class="index-page">
    <Head>
      <Title>4Keller</Title>
    </Head>

    <profile-description />
    <profile-portfolio />
  </div>
</template>

<script setup>
import ProfileDescription from '~/components/profile-description.vue';
import ProfilePortfolio from '~/components/portfolio/profile-portfolio.vue';
</script>

<style scoped lang="scss">
.index-page {

}
</style>
