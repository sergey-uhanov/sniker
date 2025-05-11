<script setup>
import {inject} from "vue";

const isMobile= inject('isMobile')
</script>

<template>
  <div class="banner">
    <img v-if="!isMobile" class="banner__img" src="@/assets/img/home/6.webp" alt="banner" width="1400" height="700" />
    <img v-else class="banner__img" src="@/assets/img/home/66.1.webp" alt="banner" width="415" height="200" />
    <img  class="banner__logo"  src="@/assets/img/home/Vector.webp" alt="logo" width="370" height="132" />
  </div>

</template>

<style lang="scss">
.banner {
  object-fit: cover;
  position: relative;
  overflow: hidden;

  &__img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: auto;
    filter: blur(8px);
  }

  &__logo{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 3;

    @include media-breakpoint-down(sm) {
      width: 99px;
      height: 36px;
    }

    @include media-breakpoint-down(xs) {
      top:49%;
      left:49%;
    }
  }
  
}
</style>