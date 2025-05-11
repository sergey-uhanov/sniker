<script setup>

</script>

<template>
  <section class="category">
    <div class="category__container">
      <div class="category__title">Buy by category</div>
      <div class="category__item ">
        <div class="category__text"><span>WORKOUT</span></div>
        <div class="category__img-wrapper">
          <img class="category__img" src="@/assets/img/home/category3.webp" alt="picture" loading="lazy">
          <p class="category__img-text">WORKOUT</p>
        </div>

      </div>
      <div class="category__item ">

        <div class="category__img-wrapper">
          <img class="category__img" src="@/assets/img/home/category2.webp" alt="picture">
          <p class="category__img-text">RUN</p>
        </div>
        <div class="category__text"><span>RUN</span></div>
      </div>
      <div class="category__item ">
        <div class="category__text"><span>FOOTBALL</span></div>
        <div class="category__img-wrapper">
          <img class="category__img" src="@/assets/img/home/category1.webp" alt="picture" loading="lazy">
          <p class="category__img-text">FOOTBALL</p>
        </div>

      </div>
    </div>
  </section>

</template>

<style lang="scss">
.category {
  padding-top: 88px;
  padding-bottom: 107px;

  @include media-breakpoint-down(xs) {
    padding-top: 33px;
    padding-bottom: 38px;
  }

  &__title {
    font-family: $font-family;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 34px;

    @include media-breakpoint-down(xs) {
      font-size: 16px;
    }
  }

  &__item {
    display: flex;
  }

  &__text {
    max-width: 652px;
    width: 100%;
    font-family: $font-family;
    font-style: italic;
    font-weight: 700;
    font-size: 36px;
    letter-spacing: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    height: 100%;

    @include media-breakpoint-down(sm) {
      font-size: 22px;
    }

    @include media-breakpoint-down(xs) {
      display: none;
    }

    span {
      position: relative;

      @media (hover) {
        cursor: pointer;
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 3px;
        background: black;
        top: -10px;
        left: 0;
        transition: all .5s;
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 3px;
        background: black;
        bottom: -10px;
        right: 0;
        transition: all .5s;
      }
    }
  }

  &__img-wrapper {
    max-width: 653px;
    width: 100%;
    overflow: hidden;
    position: relative;

    @include media-breakpoint-down(xs) {
      height: 330px;
      transform: scale(1.087);
    }
  }

  &__img {
    width: 100%;
    transition: transform .5s;
  }

  &__img-text {
    display: none;
    @include media-breakpoint-down(xs) {
      display: block;
      position: absolute;
      font-family: $font-family;
      font-style: italic;
      font-weight: 700;
      font-size: 40px;
      color: #fff;
      z-index: 10;
      top: 47%;
      left: 50%;
      transform: translate(-50%, -50%);
      letter-spacing: 0.2em;
    }
  }
}

@media (hover) {
  .category__item:hover {
    .category__text span {
      &::before,
      &::after {
        width: 100%;
      }
    }

    .category__img {
      transform: scale(1.1);
    }
  }
}


</style>