<template>
  <div :class="['ui-badge', type ? 'ui-badge--' + type : null]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  type: String,
  default: '',
})
</script>

<style lang="scss" scoped>
.ui-badge {
  padding: 4px 8px;
  background: #93BEFF;
  border-radius: 6px;

  width: fit-content;

  @include secondary-font;
  @include txt-s-sb;

  color: var(--c-white-100);

  white-space: nowrap;

  @include desktop-only {
    @include txt-t-b;
  }

  &--nda {
    background: var(--c-red-100);
  }
}
</style>
