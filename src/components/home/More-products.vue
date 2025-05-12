<script setup="">

</script>

<template>
  <section class="more-products">
    <div class="more-products__container">
      <div class="more-products__title">More Nike products</div>
    </div>

    <div class="more-products__content">
      <div class="more-products__container">
        <div class="more-products__sub-title">
          YOUR NIKE MEMBERSHIP
        </div>

        <p class="more-products__description">
          Join our members and show your love with
          <span>Nike By You!</span>
        </p>

        <button class="more-products__btn">Join Us</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.more-products {
  padding-top: 85px;
  color: $white-fc;

  @include media-breakpoint-down(xs) {
    padding-top: 55px;
  }

  &__title {
    font-family: $font-family;
    font-weight: 700;
    font-size: 40px;
    text-transform: uppercase;
    color: $black-fc;
    margin-bottom: 35px;

    @include media-breakpoint-down(xs) {
      font-size: 16px;
      margin-bottom: 22px;
    }
  }

  &__content {
    padding: 44px 0;
    background: url("@/assets/img/home/back-ground.webp") no-repeat;
    background-size: cover;

    @include media-breakpoint-down(xs) {
      padding-top: 12px;
      padding-bottom: 8px;
      background-position: 40%;
    }
  }

  &__sub-title {
    font-family: $font-family;
    font-style: italic;
    font-weight: 900;
    font-size: 40px;
    color: $white-fc;
    max-width: 308px;
    line-height: 1.2;
    margin-bottom: 25px;

    @include media-breakpoint-down(xs) {
      font-size: 16px;
      margin-bottom: 6px;
      max-width: 125px;
    }
  }

  &__description {
    font-family: $font-family;
    font-weight: 400;
    font-size: 20px;
    max-width: 446px;
    line-height: 1.3;
    margin-bottom: 23px;

    @include media-breakpoint-down(xs) {
      font-size: 12px;
      max-width: 264px;
      margin-bottom: 9px;
    }

    span {
      font-weight: 700;
    }
  }

  &__btn {
    font-family: $font-family;
    font-weight: 400;
    font-size: 16px;
    background: $white-bc;
    padding: 10px 46px;
    border-radius: 16px;

    @include media-breakpoint-down(xs) {
      padding: 6px 17px 7px 16px;
      font-size: 10px;
      border-radius: 5px;
    }
  }
}

</style>