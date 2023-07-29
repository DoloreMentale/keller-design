<script setup>
</script>

<template>
  <div class="layout" id="app-layout">
    <div class="layout__container">
      <Navbar />

      <div class="layout__container__content">
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

  background-color: #{$white-100};
  transition: background-color 0.3s;

  &__container {
    @media screen and (max-width: $mobile) {
      padding: 24px;
    }

    padding: 40px 60px;

    &__content {
      @media screen and (max-width: $mobile) {
        margin-top: 33px;
      }

      margin: 127px auto 80px auto;
      max-width: 700px;
    }
  }
}

.dark-mode .layout {
  background-color: #{$black-100};
}
</style>