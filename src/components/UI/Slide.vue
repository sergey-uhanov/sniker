<script setup>
import LinkRow from "@/components/icons/home/link-row.vue";

const props = defineProps({
      item: Object,
      isActiveClass: String
    }
)
</script>

<template>
  <div :class="['card', isActiveClass]">
    <div class="card__wrapper-img">
      <img class="card__img" :src=props.item.src alt="shoes picture"/>
    </div>

    <div class="card__title">{{ props.item.name }}</div>
    <div class="card__price">${{ props.item.price }}</div>
    <a class="card__link" :href="props.item.link">
      <link-row/>
    </a>
    <div class="card__bg-text">NIKE</div>
  </div>


</template>

<style lang="scss">
.card {
  max-width: 400px;
  width: 100%;
  background: $card-bc;
  flex-shrink: 0;
  transition: transform .3s;
  color: black;
  box-shadow: 5px 5px 25px 0 rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  padding: 40px 0 67px 0px;
  position: relative;

  @include media-breakpoint-down(sm) {
    max-width: 50vw;
    transform: scale(0.85);
    padding: 20px 27px;
  }
  @include media-breakpoint-down(xs) {
    max-width: 60.9vw;
    padding: 40px 0 49px 0;
  }

  @include media-breakpoint-down(xxs) {
    max-width: 62.8vw;

  }

  &__bg-text {
    content: 'NIKE';
    position: absolute;
    top: 50.6%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    font-family: $third-family;
    font-style: italic;
    font-weight: 900;
    font-size: 160px;
    text-align: center;
    color: rgba(0, 0, 0, 0.1);
    z-index: 1;

    @include media-breakpoint-down(sm) {
      font-size: 100px;
      top: 40%;
    }

    @include media-breakpoint-down(xs) {
      font-size: 80px;
      top: 50%;
    }
  }

  &__wrapper-img {
    max-width: 400px;
    width: 100%;
    max-height: 350px;
    height: 100%;
    margin-bottom: 27px;
    position: relative;
    z-index: 10;


    @include media-breakpoint-down(xs) {
      max-width: 200px;
      height: 200px;
      margin-bottom: 5px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  &__title {
    font-family: $second-family;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 33px;
    margin-left: 45px;
    position: relative;
    z-index: 10;

    @include media-breakpoint-down(xs) {
      margin-bottom: 17px;
      margin-left: 16px;
      font-size: 16px;
    }
  }

  &__price {
    font-family: $second-family;
    font-weight: 400;
    font-size: 20px;
    position: relative;
    z-index: 10;
    margin-left: 45px;

    @include media-breakpoint-down(xs) {
      font-size: 12px;
      margin-left: 16px;
    }
  }

  &__link {
    position: absolute;
    bottom: 25px;
    right: 30px;

    @include media-breakpoint-down(xs) {
      bottom: 23px;
      right: 23px;

      svg {
        width: 35px;
        height: 35px;
      }
    }
  }
}

.card.active {
  @include media-breakpoint-down(sm) {
    transform: scale(1);
  }

}
</style>