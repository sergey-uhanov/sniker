<script setup>

import MainBtn from "@/components/UI/buttons/Main-btn.vue";
import {inject} from "vue";

const isMobile = inject("isMobile");
</script>

<template>
  <section class="never-done" v-if="!isMobile">
    <div class="never-done__container">
      <h1 class="never-done__title">WE ARE NEVER DONE</h1>
      <p class="never-done__sub-title">Celebrating 50 years of Nike from May 16th!
        Exclusive products, experiences and much more await you for five days. Scan and join the Nike app!</p>
      <Main-btn>Celebrate with us</Main-btn>
    </div>
  </section>

  <section class="never-done-mobile" v-else>
    <picture class="never-done-mobile__banner">
      <source srcset="@/assets/img/home/3.1.png" media="(min-width: 415px)">

      <img src="@/assets/img/home/3.png" alt="banner">
    </picture>
    <div class="never-done-mobile__text-block">
      <div class="never-done-mobile__container">
        <h1 class="never-done-mobile__title">WE ARE NEVER DONE</h1>
        <p class="never-done-mobile__sub-title">Celebrating 50 years of Nike from May 16th!
          Exclusive products, experiences and much more await you for five days. Scan and join the Nike app!</p>
        <Main-btn>Celebrate with us</Main-btn>
      </div>
    </div>
  </section>

</template>

<style lang="scss">
.never-done {
  background-image: url('@/assets/img/home/1.png');
  background-size: cover;

  background-repeat: no-repeat;
  padding: 56px 0 30px 0;
  font-family: $font-family;
  color: $white-fc;

  @include media-breakpoint-down(md) {
    background-position: center;
  }

  &__title {
    font-style: italic;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 30px;

    @include media-breakpoint-down(md) {
      font-size: 30px;
      max-width: 270px;
    }
  }

  &__sub-title {
    font-weight: 900;
    font-size: 20px;
    max-width: 560px;
    margin-bottom: 30px;
    line-height: 1.25;

    @include media-breakpoint-down(md) {
      font-size: 15px;
      max-width: 250px;
    }
  }
}

.never-done-mobile {
  img {
    width: 100%;
  }

  &__text-block{
    background-image: url('@/assets/img/home/2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    padding: 50px 0 ;
    color: $white-fc;
    font-family: $font-family;

    @include media-breakpoint-down(xs) {
      padding: 16px 0 ;
      background-position: 83%;
    }

    @include media-breakpoint-down(xxs) {
      background-position: 92%
    }
  }

  &__title{
    font-style: italic;
    font-weight: 900;
    font-size: 25px;
    margin-bottom: 32px;
    @include media-breakpoint-down(xs) {
      font-size: 16px;
    }
  }

  &__sub-title {
    font-weight: 900;
    font-size: 18px;
    max-width:380px;
    margin-bottom:32px;

    @include media-breakpoint-down(xs) {
      font-size: 12px;
      max-width:289px;
    }

    @include media-breakpoint-down(xxs) {
      max-width:249px;
    }
  }
}
</style>