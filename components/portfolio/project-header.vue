<template>
  <div :class="['project-header', { 'is-highlighted': type === 'highlighted' }]">
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
        <h3 class="project-header__title" v-if="project.title && (type === 'highlighted' ? !project.beforeTitle : true)" v-html="project.title" />
      </div>

      <div class="project-header__badges">
        <ui-badge v-for="badge in badges" :key="badge.name" :type="badge.type">
          {{ badge.name }}
        </ui-badge>
      </div>

      <h3 class="project-header__title mt-16" v-if="project.title && type === 'highlighted' && project.beforeTitle" v-html="project.title" />

      <p class="project-header__subtitle desktop-only" v-if="project.subtitle" v-html="project.subtitle" />

      <p class="project-header__description" v-if="project.description && type === 'highlighted'" v-html="project.description" />
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

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

const type = inject('type')
</script>

<style lang="scss" scoped>
.project-header {
  $this: &;

  display: flex;
  align-items: center;

  @include desktop-only {
    align-items: flex-start;
  }

  &.is-highlighted {
    align-items: flex-start;

    #{$this}__title {
      grid-column: 1 / 3;
      white-space: nowrap;
    }
  }

  &__titles {
    display: flex;
    flex-direction: column;
  }

  &__before-title {
    @include txt-t;

    @include desktop-only {
      @include txt-l;
    }
  }

  &__title {
    @include txt-i-b;

    @include desktop-only {
      @include txt-l-f;
    }
  }

  &__icon {
    margin-right: 8px;

    @include desktop-only {
      margin-right: 24px;
      width: 68px;
      height: 68px;
    }
  }

  &__badges {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    height: fit-content;

    & > *:not(:last-child) {
      margin-bottom: 4px;
    }

    @include desktop-only {
      flex-direction: row-reverse;

      & > *:not(:last-child) {
        margin-bottom: 0;
        margin-left: 4px;
      }
    }
  }

  &__second-title {
    @include txt-i-sb;
    grid-area: second-title;
    margin-top: 16px;

    @include desktop-only {
      @include txt-l-f;
      margin-top: 0;
    }
  }

  &__wrapper {
    width: 100%;
    display: grid;
    justify-content: space-between;
    grid-template: "titles badges" "second-title second-title" "description description";
    grid-template-columns: 1fr auto;
  }

  &__description {
    @include txt-t;
    @include secondary-font;
    margin-top: 16px;
    grid-area: description;

    @include desktop-only {
      @include txt-l;
    }
  }

  &__subtitle {
    @include txt-l;
    margin-top: 16px;
    color: var(--c-white-500);

    @include desktop-only {
      margin-top: 10px;
    }
  }
}
</style>
