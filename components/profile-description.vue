<template>
  <div class="profile-description">
    <nuxt-img src="/profile-pic.png" class="profile-description__img" width="84" height="84" preload />
    <h1 class="profile-description__title">Антон Келлер</h1>
    <h2 class="profile-description__subtitle">Senior product designer</h2>
    <p class="profile-description__summary">
      Занимаюсь дизайном 11 лет
      <br>
      из них 4 года в продуктологии.
      <br>
      Специализируюсь на финтех / <br> криптовалютных решениях
    </p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.profile-description {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__img {
    border-radius: 14px;
    margin-bottom: 16px;
    filter: grayscale(1);
  }

  &__title {
    @include h1;
    color: var(--c-black-100);
    margin-bottom: 16px;
  }

  &__subtitle {
    @include txt-r;
    color: var(--c-white-500);
    margin-bottom: 24px;
  }

  &__summary {
    @include txt-r-m;
    text-align: center;
    max-width: 327px;
  }
}
</style>
