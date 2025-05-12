<script setup="">

import Ukraine from "@/components/icons/home/ukraine.vue";
</script>

<template>
  <section class="glory">
    <div class="glory__content">
      <div class="glory__text">thanks for watching</div>

      <div class="glory__title">Glory to Ukraine</div>

      <ukraine/>
    </div>
  </section>
</template>

<style lang="scss">
.glory {
  padding: 103px 0 98px 0;

  @include media-breakpoint-down(xs) {
    display: none;
  }

  &__content {
    max-width: 428px;
    margin: 0 auto;
    text-align: center;
  }

  &__text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 39px;
  }

  &__title {
    font-family: $font-family;
    font-style: italic;
    font-weight: 900;
    font-size: 48px;
    color: #000;
    margin-bottom: 33px;
  }
}
</style>