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
  padding: 67px 37px;
  position: relative;

  @include media-breakpoint-down(sm) {
    max-width: 300px;
    margin-right: 30px;
  }

  &__bg-text{
    content: 'NIKE';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    font-family: $third-family;
    font-style: italic;
    font-weight: 900;
    font-size: 160px;
    text-align: center;
    color: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  &__wrapper-img {
    max-width: 291px;
    height: 251px;
    margin-bottom: 16px;
    position: relative;
    z-index: 10;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  &__title {
    font-family: $second-family;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 30px;
    position: relative;
    z-index: 10;
  }

  &__price {
    font-family: $second-family;
    font-weight: 400;
    font-size: 20px;
    position: relative;
    z-index: 10;
  }

  &__link {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
}

.card.active {
  transform: scale(1.2);
}
</style>