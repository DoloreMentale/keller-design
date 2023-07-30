<template>
  <div class="portfolio-list__item">
    <h1 class="portfolio-list__item__title">{{ item.title }}</h1>

    <p class="portfolio-list__item__description">{{ $t(item.description) }}</p>

    <template v-for="(img, imgIndex) in item.imgs" :key="imgIndex">
      <img class="portfolio-list__item__img" :src="img" loading="lazy" alt="portfolio-item-img" />
    </template>

    <div class="portfolio-list__item__links">
      <a
        v-for="(link, linkIndex) in item.links"
        :key="linkIndex"
        :href="link.link"
        target="_blank"
        :class="{ 'portfolio-list__item__links__item--disabled': !link.link }"
        :style="`grid-area: ${linkIndex + 1}`"
      >
        <div class="portfolio-list__item__links__item">
          <nuxt-icon v-if="link.icon" :name="link.icon" />

          <div>
            <h1 class="portfolio-list__item__links__item__title">{{ link.title }}</h1>

            <p class="portfolio-list__item__links__item__description">{{ link.description }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped lang="scss">
.portfolio-list {
  &__item {
    border-radius: 24px;

    padding: 24px;

    background-color: #{$white-200};
    transition: background-color 0.3s;

    &__title {
      @include txt-700;
      font-size: 24px;

      @include mobile-up {
        font-size: 32px;
      }
      margin: 0 0 16px 0;

      color: #{$black-100};

      .dark-mode & {
        color: #{$white-100};
      }
    }
    &__description {
      @include txt-400;

      font-size: 15px;
      white-space: pre-wrap;

      @include mobile-up {
        font-size: 24px;
      }
    }

    .dark-mode &__description {
      color: #{$white-100};
    }

    &__img {
      display: block;
      margin: 24px auto;

      border-radius: 24px;
    }

    &__links {
      display: grid;

      grid-template-areas:
        "1 2"
        "3 3";
      grid-template-columns: repeat(2, 1fr);

      //@include mobile-only {
      //  grid-template-columns: 1fr;
      //}

      //grid-template-columns: repeat(3, 1fr);
      gap: 24px 16px;
      //grid-column-gap: 24px;
      //grid-row-gap: 24px;

      &__item {
        display: flex;
        align-items: center;

        @include mobile-only {
          justify-content: center;
        }

        padding: 12px;
        border-radius: 14px;

        background-color: #{$white-300};
        transition: background-color 0.3s;

        ::v-deep(svg) {
          cursor: pointer;

          width: 22px;
          height: 22px;

          margin: 0 12px;
        }

        &__title {
          @include txt-400;
          font-size: 9px;
          color: #{$black-100};

          margin: 0 0 5px 0;
        }

        .dark-mode &__title {
          color: #{$white-100};
        }

        &__description {
          @include txt-600;
          font-size: 12px;
          color: #{$black-100};

          margin: 0;
        }

        .dark-mode &__description {
          color: #{$white-100};
        }

        &--disabled {
          opacity: 0.4;
          pointer-events: none;
        }
      }

      .dark-mode  &__item {
        background-color: #{$black-100};
      }
    }
  }

  .dark-mode &__item {
    background-color: #{$black-200};
  }
}
</style>