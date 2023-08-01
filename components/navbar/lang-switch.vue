<template>
  <button class="lang-switch" type="button" @click="toggleLocale()">
    {{ locale }}
  </button>
</template>

<script setup>
const { locale } = useI18n();

const toggleLocale = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
}
</script>

<style lang="scss" scoped>
.lang-switch {
  @include txt-700;

  font-family: Montserrat, sans-serif;
  font-size: 15px;
  text-transform: capitalize;

  color: #{$black-100};

  .dark-mode & {
    color: #{$white-100};
  }
}
</style>