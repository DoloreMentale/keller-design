<template>
  <a :href="link" class="project-link" target="_blank">
    <nuxt-icon class="project-link__icon" :name="icon" />
    <div class="project-link__wrapper">
      <span class="project-link__title">
        {{ title }}
      </span>
      <span class="project-link__name">
        {{ name }}
      </span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.project-link {
  display: flex;
  align-items: center;

  padding: 12px;
  border-radius: 14px;

  background: var(--c-white-100);

  color: var(--c-black-100);

  &:hover {
    background: var(--c-white-200);
  }

  &:active {
    background: var(--c-white-300);
  }

  &__icon {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    text-align: center;
    line-height: 32px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__title {
    @include txt-n;
  }

  &__name {
    font-size: 12px;
    line-height: 20px;
    font-weight: 600;
  }
}
</style>
