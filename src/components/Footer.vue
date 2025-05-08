<script setup>

import NikeBlack from "@/components/icons/home/nike-black.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <ul class="footer__list">
        <li class="footer__item"><a href="#">ALL</a></li>
        <li class="footer__item"><a href="#">WOMAN</a></li>
        <li class="footer__item"><a href="#">MEN</a></li>
      </ul>
      <div class="footer__logo">
        <img class="footer__circle-text" src="@/assets/img/home/1234.png" alt="logo">
        <div class="footer__logo-icon">
          <NikeBlack/>
        </div>
      </div>
      <ul class="footer__list">
        <li class="footer__item"><a href="#">WORCOUT</a></li>
        <li class="footer__item"><a href="#">RUN</a></li>
        <li class="footer__item"><a href="#">FOOTBALL</a></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: $black-bc;
  padding: 76px 0;

  &__container {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 110px;
    align-items: center;
  }

  &__circle-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @include media-breakpoint-down(xs) {
      display: none;
    }
  }

  &__logo-icon {
    position: relative;
    z-index: 10;


    svg {
      @include media-breakpoint-down(md) {
        width: 400px;
      }

      @include media-breakpoint-down(sm) {
        width: 300px;
      }

      @include media-breakpoint-down(xs) {
        width: 160px;
      }
      @include media-breakpoint-down(xxs) {
        width: 130px;
      }
    }

  }

  &__item {
    a {
      color: $white-fc;
      font-family: $font-family;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
    }
  }

}
</style>
