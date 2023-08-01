<template>
  <div class="footer">
    <span>
      <span class="footer__text">Designed by </span>
      <span class="footer__text--emphasized">Keller</span>
    </span>

    <div class="footer__divider" />

    <span>
      <span class="footer__text">Developed by </span>
      <span class="footer__text--emphasized">DoloreMentale</span>
    </span>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  font-size: 14px;

  padding: 40px 0;

  &__text {
    @include txt-300;
    color: #{$white-500};

    &--emphasized {
      @include txt-400;
      color: #{$black-100};
    }

    .dark-mode &--emphasized {
      color: #{$white-100}
    }
  }

  .dark-mode &__text {
    color: #{$white-400};
  }

  &__divider {
    width: 1px;
    height: 14px;
    margin: 0 24px;
    background-color: #{$white-500};
  }
}
</style>