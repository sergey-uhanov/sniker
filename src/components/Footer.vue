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
        <img class="footer__circle-text" src="@/assets/img/home/1234.webp" alt="logo">

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

  @include media-breakpoint-down(xs) {
    padding: 28px 0 0 0;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 56px;
    max-width: 110px;
    align-items: center;
    margin-left: 4px;
    margin-right: 4px;

    @include media-breakpoint-down(xs) {
      gap: 6px;
      margin-left: 0px;
      margin-right: 10px;
    }
  }

  &__circle-text {
    position: absolute;
    left: 50%;
    top: 43%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @include media-breakpoint-down(xs) {
      display: none;
    }
  }

  &__logo-icon {
    position: relative;
    z-index: 10;
    top: -13px;
    left: 11px;

    @include media-breakpoint-down(xs) {
      top: -17px;
      left: -3px;
    }


    svg {
      @include media-breakpoint-down(md) {
        width: 400px;
      }

      @include media-breakpoint-down(sm) {
        width: 300px;
      }

      @include media-breakpoint-down(xs) {
        width: 160px;
        height: 100px;
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

      @include media-breakpoint-down(xs) {
        font-size: 10px;
      }
    }
  }
}
</style>
