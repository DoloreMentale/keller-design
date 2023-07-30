<template>
  <div class="layout" id="app-layout">
    <Navbar />

    <div class="layout__container">

      <div class="layout__content">
        <slot />
      </div>

      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;

  &__container {
    padding: 24px;
  }

  &__content {
    max-width: 700px;
  }
}
</style>