<template>
  <div class="layout" id="app-layout">
    <Navbar />

    <div class="layout__container">

      <div class="layout__content">
        <slot />
      </div>

      <Footer class="layout__footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;

  &__container {
    padding: 0 24px;
    max-width: 700px;
    margin: 0 auto;

    @include mobile-up {
      padding: 0 24px;
    }
  }

  &__content {
    padding-top: 24px;

    @include mobile-up {
      padding-top: 40px;
    }
  }

  &__footer {
    @include mobile-up {
      margin-top: 40px;
    }
  }
}
</style>