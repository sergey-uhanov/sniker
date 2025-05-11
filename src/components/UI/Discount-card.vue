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
  <div class="discount-card">
    <div class="discount-card__inform">
      <slot name="title">
        <div class="discount-card__title">NEW</div>
      </slot>

      <div class="discount-card__name">{{ props.name }}</div>
      <slot name="link-btn"></slot>
    </div>
    <div class="discount-card__img-wrapper">
      <img class="discount-card__img" :src="props.src" alt="picture sneaker"/>
    </div>
  </div>

</template>

<style lang="scss">
.discount-card {
  max-width: 606px;
  width: 100%;
  height: 272px;
  border-radius: 18px;
  box-shadow: 5px 5px 25px 0 rgba(0, 0, 0, 0.25);
  background: #efefef;
  display: flex;
  position: relative;
  padding-top: 65px;
  padding-left: 48px;

  @include media-breakpoint-down(xs) {
    max-width: 302px;
    height: 137.6px;
    padding-top: 55px;
    padding-left: 33px;
  }

  &_img-size{
    .discount-card__img-wrapper{
      @include media-breakpoint-down(xs) {
        max-width: 310px;
        right: -53px;
        top: -47px;
      }
    }
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
      letter-spacing: 0.0em;
      max-width: 140px;
      margin-bottom: 15px;
    }
  }

  &__img-wrapper {
    max-width: 490px;
    object-fit: contain;
    position: absolute;
    top: -29%;
    right: -16%;

    @include media-breakpoint-down(xs) {
      max-width: 277px;
      right: -70px;
      top: -51px;
    }
  }

  &__img {
    width: 100%;
  }
}
.alt{
  .discount-card__img-wrapper{
    @include media-breakpoint-down(xs) {
      max-width: 310px;
      right: -70px;
      top: -65px;
    }
  }
}
</style>