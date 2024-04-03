<template>
  <div class="portfolio-project">
    <project-header :project="project" />

    <p class="portfolio-project__subtitle mobile-only" v-if="project.subtitle" v-html="project.subtitle" />

    <p class="portfolio-project__description" v-if="project.description && type !== 'highlighted'" v-html="project.description" />

    <nuxt-img class="portfolio-project__image" v-if="project.image" :src="project.image" />
  </div>
</template>

<script setup>
import { inject } from 'vue';

import ProjectHeader from './project-header.vue'

defineProps({
  project: {
    type: Object,
    default: null
  }
})

const type = inject('type')
</script>

<style lang="scss" scoped>
.portfolio-project {
  display: flex;
  flex-direction: column;

  &__subtitle {
    @include txt-s;
    margin-top: 16px;
    color: var(--c-white-500);
  }

  &__description {
    @include txt-t;
    @include secondary-font;
    margin-top: 16px;

    @include desktop-only {
      @include txt-l;
      margin-top: 40px;
    }
  }

  &__image {
    width: 100%;
    margin-top: 16px;
  }
}
</style>
