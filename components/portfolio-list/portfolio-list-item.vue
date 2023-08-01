<template>
  <div class="portfolio-list__item">
    <h1 class="portfolio-list__item__title">{{ item.title }}</h1>

    <p class="portfolio-list__item__description">{{ $t(item.description) }}</p>

    <template v-for="(img, imgIndex) in item.imgs" :key="imgIndex">
      <img class="portfolio-list__item__img" :src="img" loading="lazy" alt="portfolio-item-img" />
    </template>

    <div :class="[
        'portfolio-list__item__links',
        { 'portfolio-list__item__links--triple': item.links.length > 2 }
    ]">
      <a
        v-for="(link, linkIndex) in item.links"
        :key="linkIndex"
        :href="link.link"
        target="_blank"
        :style="{ 'grid-area': item.links.length > 2 ? `col-${linkIndex + 1}` : undefined }"
      >
        <div :class="['portfolio-list__item__links__item', { 'portfolio-list__item__links__item--disabled': !link.link }]">
          <nuxt-icon v-if="link.icon" :name="link.icon" />

          <div class="portfolio-list__item__links__item__wrapper">
            <span class="portfolio-list__item__links__item__title">{{ $t(link.title) }}</span>

            <p class="portfolio-list__item__links__item__description">{{ $t(link.description) }}</p>
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

    background: #{$white-200};
    transition: background 0.3s;

    &:not(:first-child) {
      margin-bottom: 24px;
    }

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

      .dark-mode & {
        color: #{$white-100};
      }
    }

    &__img {
      display: block;
      margin: 24px auto;

      border-radius: 24px;
    }

    &__links {
      display: grid;

      &--triple {
        grid-template-areas:
        "col-1 col-2"
        "col-3 col-3";

        grid-template-columns: repeat(2, 1fr);
      }

      grid-template-areas: unset;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;

      gap: 24px 16px;

      &__item {
        $self: &;

        display: flex;
        align-items: center;

        &__wrapper {
          margin-left: 8px;
        }

        @include mobile-only {
          justify-content: center;
        }

        padding: 12px 10px;
        border-radius: 14px;

        background: #{$white-300};
        transition: background 0.3s;

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

          .dark-mode & {
            color: #{$white-100};
          }
        }

        &__description {
          @include txt-600;
          font-size: 12px;
          color: #{$black-100};

          margin: 0;

          .dark-mode & {
            color: #{$white-100};
          }
        }

        &--disabled {
          pointer-events: none;
          background: rgba($white-300, 0.4) !important;

          & .nuxt-icon, #{$self}__title, #{$self}__description {
            color: rgba($black-100, 0.4) !important;
          }

          .dark-mode & {
            background: rgba($black-100, 0.4) !important;

            & .nuxt-icon, #{$self}__title, #{$self}__description {
              color: rgba($white-300, 0.4) !important;
            }
          }
        }

        .dark-mode & {
          background: #{$black-100};
        }
      }
    }

    .dark-mode & {
      background: #{$black-200};
    }
  }
}
</style>