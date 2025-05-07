<script setup="">

import Slider from "@/components/home/Slider.vue";
import PromoCard from "@/components/UI/Promo-card.vue";
import LinkRow from "@/components/icons/home/link-row.vue";
</script>

<template>
      <section class="looks">
        <div class="looks__title">
          <span>LOOKS GOOD. </span>
          <span>RUNS GOOD.</span>
          <span>FEELS GOOD</span>
        </div>

        <Slider :quantity="1">
          <template #slides>
            <div class="slider-item"  v-for="item in 6">
              <PromoCard
                  name="AIR JORDAN 1 MID LIGHT SMOKE GREY"
                  src="/sniker/img/home/shoes5.png"
                  link="example.com"
              >
                <a class="promo-link" :href=link>
                  <link-row/>
                </a>
              </PromoCard>
              <PromoCard
                  name="AIR JORDAN 1 MID LIGHT SMOKE GREY"
                  src="/sniker/img/home/shoes5.png"
                  link="example.com"
              >
                <a class="promo-link" :href=link>
                  <link-row/>
                </a>
              </PromoCard>
            </div>

          </template>
        </Slider>
      </section>

</template>

<style lang="scss">
.looks{

  &__title{
    font-family: $font-family;
    font-style: italic;
    font-weight: 900;
    font-size: 40px;
    color: #000;
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 40px;
  }
}

.slider-item{
  display: flex;
  gap: 53px;
  justify-content: space-between;
}
</style>