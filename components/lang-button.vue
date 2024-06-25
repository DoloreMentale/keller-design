<template>
  <button class="lang-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineEmits(['click'])
</script>

<style lang="scss" scoped>
.lang-button {
  border-radius: 16px;
  height: 42px;
  padding: 12px;

  border: 1px solid var(--c-white-300);

  @include txt-s-m;
}
</style>
