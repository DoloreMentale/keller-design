<template>
  <div :class="['project-header', { 'has-secondary-title': !!project.secondTitle }]">
    <nuxt-img
      class="project-header__icon"
      v-if="project.icon"
      :src="project.icon"
      :width="project.iconSize?.width ?? 48"
      :height="project.iconSize?.height ?? 48"
    />

    <div class="project-header__wrapper">
      <div class="project-header__titles">
        <span class="project-header__before-title" v-if="project.beforeTitle" v-html="project.beforeTitle" />
        <h3 class="project-header__title" v-if="project.title" v-html="project.title" />
      </div>

      <div class="project-header__badges">
        <ui-badge v-for="badge in badges" :key="badge.name" :type="badge.type">
          {{ badge.name }}
        </ui-badge>
      </div>

      <div class="project-header__second-title" v-if="project.secondTitle" v-html="project.secondTitle" />

      <p class="project-header__description" v-if="project.description && project.secondTitle" v-html="project.description" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import UiBadge from './ui-badge.vue';

const props = defineProps({
  project: {
    type: Object,
    default: null
  }
})

const badges = computed(() => [
  {
    name: props.project?.company
  },
  ...(props.project?.nda ? [
    {
      name: 'NDA',
      type: 'nda',
    }
  ] : [])
])
</script>

<style lang="scss" scoped>
.project-header {
  display: flex;
  align-items: center;

  &.has-secondary-title {
    align-items: flex-start;
  }

  &__titles {
    display: flex;
    flex-direction: column;
  }

  &__before-title {
    @include txt-t;
  }

  &__title {
    @include txt-i-b;
  }

  &__icon {
    margin-right: 8px;
  }

  &__badges {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    height: fit-content;

    & > *:not(:last-child) {
      margin-bottom: 4px;
    }
  }

  &__second-title {
    @include txt-i-sb;
    grid-area: second-title;
    margin-top: 16px;
  }

  &__wrapper {
    width: 100%;
    display: grid;
    grid-template: "titles badges" "second-title second-title" "description description";
  }

  &__description {
    @include txt-t;
    @include secondary-font;
    margin-top: 16px;
    grid-area: description;
  }
}
</style>
