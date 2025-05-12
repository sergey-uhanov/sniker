<script setup="">

import LinkBtn from "@/components/UI/buttons/Link-btn.vue";
import DiscountCard from "@/components/UI/Discount-card.vue";
import {inject} from "vue";
import LinkRow from "@/components/icons/home/link-row.vue";

const isMobile = inject("isMobile");
</script>

<template>
  <section class="looks">
    <div class="looks__title">
      <span>LOOKS GOOD. </span>
      <span>RUNS GOOD. </span>
      <span>FEELS GOOD.</span>
    </div>

    <div class="discounts">
      <div class="discounts__container">
        <DiscountCard
            class="alt"
            name="on your first purchase"
            src="/sniker/img/home/shoes7.webp"
        >
          <template #title>
            <div class="promo-title"><span>-20%</span> Discount</div>
          </template>

          <template class="link-button" #link-btn>
            <Link-btn v-if="!isMobile">Shop now</Link-btn>
            <link-row v-else width=25 left="17"/>
          </template>
        </DiscountCard>

        <DiscountCard
            class="discount-card_img-size"
            name="on your first purchase"
            src="/sniker/img/home/shoes6.webp"

        >
          <template #title>
            <div class="promo-title"><span>-20%</span> Discount</div>
          </template>

          <template class="link-button" #link-btn>
            <Link-btn v-if="!isMobile">Shop now</Link-btn>
            <link-row v-else width=25 left="17"/>
          </template>
        </DiscountCard>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.looks {

  &__title {
    font-family: $font-family;
    font-style: italic;
    font-weight: 900;
    font-size: 40px;
    color: #000;
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 33px;

    @include media-breakpoint-down(xs) {
      font-size: 24px;
      padding-bottom: 53px;

      span {
        display: block;
        line-height: 1.2;

        &:nth-child(1) {
          margin-left: 15px;
        }

        &:nth-child(2) {
          display: flex;
          justify-content: center;
          position: relative;
          right: 5px;
        }

        &:nth-child(3) {
          display: flex;
          justify-content: end;
          margin-right: 25px;
        }
      }
    }
  }
}


.promo-card-wrapper {
  width: 602px;

  @include media-breakpoint-down(sm) {
    max-width: 600px;
    width: 90vw;
  }

  @include media-breakpoint-down(xs) {
    width: 302px;
  }
}

.discounts {
  margin-top: 73px;
  margin-bottom: 20px;

  @include media-breakpoint-down(xs) {
    margin-top: 0;
    margin-bottom: 0;
  }

  &__container {
    display: flex;
    gap: 50px;

    @include media-breakpoint-down(xs) {
      margin-left: 12px;
      flex-direction: column;
    }
  }
}

.promo-title {
  font-family: $font-family;
  font-weight: 700;
  font-size: 24px;
  color: #ff3939;
  margin-top: -10px;
  margin-bottom: 20px;

  @include media-breakpoint-down(xs) {
    font-size: 12px;
    margin-bottom: 8px;
  }

  span {
    font-size: 30px;
    margin-right: 10px;

    @include media-breakpoint-down(xs) {
      font-size: 14px;
      margin-right: 0;
    }
  }
}

.link-button {
  margin-top: 20px;
}

.row-link {
  svg {
    width: 25px;
    height: 25px;
  }
}
</style>