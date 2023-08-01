<template>
  <div class="fading-img">
    <img class="fading-img__img" :src="src" loading="lazy" alt="portfolio-item-img" />
    <img class="fading-img__hover-img" :src="srcHover" loading="lazy" alt="portfolio-item-img" />
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  srcHover: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.fading-img {
  $self: &;
  width: fit-content;
  position: relative;

  overflow: hidden;

  &__img, &__hover-img {
    border-radius: 16px;
    object-fit: cover;
    transition: opacity 0.3s;
  }

  &__hover-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }

  &:hover {
    #{$self}__img {
      opacity: 0;
    }

    #{$self}__hover-img {
      opacity: 1;
    }
  }
}
</style>