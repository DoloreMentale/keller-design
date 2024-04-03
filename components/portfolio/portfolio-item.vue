<template>
  <div :class="
    [
      'portfolio-item',
      item.type ? 'portfolio-item--' + item.type : ''
    ]"
  >
    <div class="portfolio-item__projects">
      <template v-for="(project, idx) in item.projects" :key="project.id">
        <portfolio-project :project="project"/>

        <div class="portfolio-item__links" v-if="project.links">
          <project-link
            v-for="link in project.links"
            :key="link.href"
            :link="link.href"
            :name="link.name"
            :icon="link.icon"
            :title="link.title"
            :disabled="link.disabled"
          />
        </div>

        <hr
          class="portfolio-item__divider"
          v-if="idx !== item.projects.length - 1"
        >
      </template>
    </div>


  </div>
</template>

<script setup>
import { provide } from 'vue'

import PortfolioProject from './portfolio-project.vue'
import ProjectLink from './project-link.vue'

const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})

provide('type', props.item.type)
</script>

<style lang="scss" scoped>
.portfolio-item {
  padding: 16px;
  border-radius: 14px;
  background: var(--c-white-200);

  @include desktop-only {
    padding: 40px;
  }

  &__links {
    display: flex;
    flex-direction: column;

    margin-top: 16px;

    & > * {
      width: 100%;
    }

    & > *:not(:last-child) {
      margin-bottom: 8px;
    }

    @include desktop-only {
      flex-direction: row;
      margin-top: 40px;

      & > *:not(:last-child) {
        margin-right: 24px;
        margin-bottom: 0;
      }
    }
  }

  &__divider {
    width: 100%;

    border: none;
    border-top: 1px solid var(--c-white-400);
    margin: 16px 0;

    @include desktop-only {
      margin: 24px 0;
    }
  }

  &--highlighted {
    border: 1px solid #FFC684;
    background: #FFF7E3;
  }
}
</style>
