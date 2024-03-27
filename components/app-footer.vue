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
        href="tg://resolve?domain=@ivan_grachyov_774"
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
  }
}
</style>
