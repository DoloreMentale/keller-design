<template>
  <div class="app-footer">
    <div class="app-footer__executive">
      Designed by
      <span class="app-footer__person">Keller</span>
    </div>

    <div class="app-footer__divider" />

    <div class="app-footer__executive">
      Developed by
      <a
        href="https://t.me/ivan_grachyov_774"
        target="_blank"
        class="app-footer__person"
      >
        @ivan_grachyov_774
      </a>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.app-footer {
  display: flex;
  align-items: center;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }

  @include desktop-only {
    flex-direction: row;
    justify-content: center;

    & > *:not(:last-child) {
      margin-bottom: 0;
      margin-right: 24px;
    }
  }

  &__executive {
    @include txt-r-t;
    color: var(--c-white-500);
  }

  &__person {
    @include txt-r;
    color: var(--c-black-100);
    text-decoration: none;
  }

  &__divider {
    width: 14px;
    height: 1px;
    background: var(--c-white-500);

    @include desktop-only {
      width: 1px;
      height: 14px;
    }
  }
}
</style>
