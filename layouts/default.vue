<script setup>
</script>

<template>
  <div class="layout" id="app-layout">
    <div class="layout__container">
      <Navbar />

      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;

  background-color: #{$white-100};
  transition: background-color 0.3s;

  &__container {
    padding: 40px 60px;
  }
}

.dark-mode .layout {
  background-color: #{$black-100};
}
</style>