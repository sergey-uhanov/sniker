<script setup="">

import Slider from "@/components/home/Slider.vue";
import PromoCard from "@/components/UI/Promo-card.vue";
import LinkBtn from "@/components/UI/buttons/Link-btn.vue";
import DiscountCard from "@/components/UI/Discount-card.vue";
</script>

<template>
  <section class="looks">
    <div class="looks__title">
      <span>LOOKS GOOD. </span>
      <span>RUNS GOOD. </span>
      <span>FEELS GOOD.</span>
    </div>

    <Slider :quantity="2" :minSpace="50" :space="60">
      <template #slides>
        <div class="slider-item" v-for="item in 6">
          <div class="promo-card-wrapper"></div>
          <DiscountCard
              :key="item"
              name="on your first purchase"
              src="/sniker/img/home/shoes5.png"
          >
            <template #title>
              <div class="promo-title"><span>-20%</span> Discount</div>
            </template>
            <template class="link-button" #link-btn>
              <Link-btn>Shop now</Link-btn>
            </template>
          </DiscountCard>
        </div>

      </template>
    </Slider>
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
  }
}

.slider-item {
  display: flex;
  gap: 53px;
  flex-direction: column;
  justify-content: space-between;
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

.promo-title {
  font-family: $font-family;
  font-weight: 700;
  font-size: 24px;
  color: #ff3939;

  margin-top: -10px;
  margin-bottom: 20px;

  span{
    font-size: 30px;
    margin-right: 10px;
  }

}
.link-button{
  margin-top: 20px;
}
</style>