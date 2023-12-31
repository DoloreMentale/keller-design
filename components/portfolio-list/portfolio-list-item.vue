<template>
  <div class="portfolio-list__item">
    <h1 class="portfolio-list__item__title">{{ item.title }}</h1>

    <p class="portfolio-list__item__description">{{ $t(item.description) }}</p>

    <fading-img
      class="portfolio-list__item__img"
      v-for="(img, imgIndex) in item.imgs"
      :key="imgIndex"
      :src="img"
      :src-hover="item.hover_imgs[imgIndex]"
    />

    <div :class="[
        'portfolio-list__item__links',
        { 'portfolio-list__item__links--triple': item.links.length > 2 }
    ]">
      <component
        :is="!!link.link ? 'a' : 'div'"
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
      </component>
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

    @include mobile-up {
      padding: 60px 52px;
    }

    &:not(:first-child):not(:last-child) {
      margin-bottom: 24px;

      @include mobile-up {
        margin-bottom: 64px;
      }
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

      @include mobile-up {
        margin: 60px auto;
      }
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

      @include mobile-up {
        justify-content: space-between;
        grid-template-columns: repeat(2, 190px);
        grid-template-rows: auto;

        &--triple {
          grid-template-areas: "col-3 col-1 col-2";
          grid-template-columns: repeat(3, 1fr);
        }
      }

      &__item {
        $self: &;

        display: flex;
        align-items: center;

        &__wrapper {
          display: flex;
          flex-direction: column;

          margin-left: 8px;
        }

        @include mobile-only {
          justify-content: center;
        }

        padding: 12px 10px;
        border-radius: 14px;

        background: #{$white-300};
        transition: background 0.3s;

        &:hover {
          background: #{$white-400};

          .dark-mode & {
            background: #{$black-100};
          }
        }

        &:active {
          background: #{$white-300};

          .dark-mode & {
            background: #{$black-200};
          }
        }

        @include mobile-up {
          padding: 12px;
        }

        ::v-deep(svg) {
          cursor: pointer;

          width: 22px;
          height: 22px;

          margin: 0 12px;
        }

        &__title {
          @include txt-400;
          font-size: 9px;
          line-height: normal;
          color: #{$black-100};

          margin: 0 0 5px 0;

          .dark-mode & {
            color: #{$white-100};
          }
        }

        &__description {
          @include txt-600;
          font-size: 12px;
          line-height: normal;
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