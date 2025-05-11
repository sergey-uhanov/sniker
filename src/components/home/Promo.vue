<script setup>

import PromoCard from "@/components/UI/Promo-card.vue";
import LinkRow from "@/components/icons/home/link-row.vue";
</script>

<template>
  <section class="promo">
    <div class="promo__container">
      <PromoCard
          name="AIR JORDAN 1 MID LIGHT SMOKE GREY"
          src="/sniker/img/home/shoes4.webp"
          link="example.com"
      >
        <a class="promo-link" href='#'>
          <link-row/>
        </a>
      </PromoCard>
      <PromoCard
          name="AIR JORDAN 1 MID LIGHT SMOKE GREY"
          src="/sniker/img/home/shoes5.webp"
          link="example.com"
      >
        <a class="promo-link" href="#">
          <link-row/>
        </a>
      </PromoCard>
    </div>
  </section>

</template>

<style lang="scss">
.promo {
  position: relative;
  z-index: 10;
  top: -29px;

  @include media-breakpoint-down(xs) {
    top: -20px;
  }

  &__container {
    display: flex;
    gap: 74px;

    @media (max-width: 1080px) {
      flex-direction: column;
      max-width: 700px;
      margin: 0 auto;
    }

    @include media-breakpoint-down(xs) {
      max-width: 400px;
      padding-left: 26px;
      gap:52px;
    }
  }
}

.promo-link {
  display: block;
  margin-top: 17px;
  margin-left: 35px;
  
  @include media-breakpoint-down(xs) {
    width: 25px;
    height: 25px;
    margin-bottom: 15px;
    margin-left: 18px;

    svg{
      width: 25px;
      height: 25px;
    }
  }
}
</style>