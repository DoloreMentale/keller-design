<template>
  <div class="portfolio-item" :style="styles">
    <div class="portfolio-item__projects">
      <template v-for="(project, idx) in item.projects" :key="project.id">
        <portfolio-project :project="project"/>
        <hr
          class="portfolio-item__divider"
          v-if="idx !== item.projects.length - 1"
        >
      </template>
    </div>

    <div class="portfolio-item__links" v-if="item.links">
      <project-link
        v-for="link in item.links"
        :key="link.href"
        :link="link.href"
        :name="link.name"
        :icon="link.icon"
        :title="link.title"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import PortfolioProject from './portfolio-project.vue'
import ProjectLink from './project-link.vue'

const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})

const styles = computed(() => ({
  border: props.item.border,
  background: props.item.background
}))
</script>

<style lang="scss" scoped>
.portfolio-item {
  padding: 16px;
  border-radius: 14px;
  background: var(--c-white-200);

  &__links {
    margin-top: 16px;

    & > *:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  &__divider {
    width: 100%;

    border: none;
    border-top: 1px solid var(--c-white-400);
    margin: 16px 0;
  }
}
</style>
