<script setup>
const props = defineProps({
  name: String,
  src: String,
  link: {
    type: String,
    default: '#',
  },
})
</script>

<template>
  <div class="promo-card">
    <div class="promo-card__inform">
      <slot name="title">
        <div class="promo-card__title">NEW</div>
      </slot>

      <div class="promo-card__name">{{ props.name }}</div>
      <slot name="link-btn"></slot>
    </div>
    <div class="promo-card__img-wrapper">
      <img class="promo-card__img" :src="props.src" alt="picture sneaker" loading="lazy"/>
    </div>
  </div>

</template>

<style lang="scss">
.promo-card {
  max-width: 602px;
  width: 100%;
  height: 272px;
  border-radius: 18px;
  box-shadow: 5px 5px 25px 0 rgba(0, 0, 0, 0.25);
  background: #efefef;
  display: flex;
  position: relative;
  padding-top: 65px;
  padding-left: 65px;

  @include media-breakpoint-down(xs) {
    max-width: 302px;
    height: 137px;
    padding-top: 32px;
    padding-left: 32px;
  }



  &__title {
    font-family: $font-family;
    font-style: italic;
    font-weight: 700;
    font-size: 48px;
    color: #ff3939;
    margin-bottom: 15px;

    @include media-breakpoint-down(xs) {
      font-size: 16px;
      margin-bottom: 6px;
    }
  }

  &__name {
    font-family: $font-family;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.01em;
    color: #000;
    max-width: 228px;
    line-height: 1.2;
    @include media-breakpoint-down(xs) {
      font-size: 12px;
      letter-spacing: 0.01em;
      max-width: 128px;
    }
  }

  &__img-wrapper {
    max-width: 490px;
    object-fit: contain;
    position: absolute;
    top: -29%;
    right: -16%;

    @include media-breakpoint-down(xs) {
      max-width: 237px;
      right: -10%;
    }
  }

  &__img {
    width: 100%;
  }
}
</style>