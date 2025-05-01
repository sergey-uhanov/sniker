<script setup>
import {computed, ref} from "vue";

const shift = ref(0)
const step = window.innerWidth / 3

function nextStep(){
  shift.value += step
}

function prevStep(){
  if(shift.value >= step ){
    shift.value -= step
  }
}

const styleWrapper = computed(() => ({
  transform: `translateX(-${shift.value}px)`
}))
</script>

<template>
  <section class="slider">
    <div class="slider__wrapper"  :style="styleWrapper">
      <slot></slot>
    </div>
    <nav class="slider__nav-btn-block">
      <button class="slider__prev-btn" @click="prevStep"><</button>
      <button class="slider__next-btn" @click="nextStep">></button>
    </nav>
  </section>

</template>

<style lang="scss">
.slider {
  overflow: hidden;
  &__wrapper {
    display: flex;
    width: 100%;

    transition: transform .3s;
  }

  &__nav-btn-block {
    button {
      font-size: 30px;
      font-weight: bold;
      margin: 0 30px;
    }
  }
}
</style>