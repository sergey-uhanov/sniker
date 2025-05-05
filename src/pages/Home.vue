<script setup>
import {inject} from 'vue'
import NeverDone from "@/components/home/Never-done.vue";
import RunRow from "@/components/home/Run-row.vue";
import Banner from "@/components/home/Banner.vue";
import Slider from "@/components/home/Slider.vue";
import Slide from "@/components/UI/Slide.vue";

const isMobile = inject('isMobile')
const cardsForSlider = [
  {
    id: 1,
    name: 'Air Max 97',
    price: 20.99,
    url: 'sdfs'
  },
  {
    id: 2,
    name: 'React Presto',
    price: 17.99,
    url: 'sdfs'
  },
  {
    id: 3,
    name: 'KD13 EP',
    price: 50.99,
    url: 'sdfs'
  },
  {
    id: 1,
    name: 'Air Max 97',
    price: 20.99,
    url: 'sdfs'
  },
  {
    id: 2,
    name: 'React Presto',
    price: 17.99,
    url: 'sdfs'
  },
  {
    id: 3,
    name: 'KD13 EP',
    price: 50.99,
    url: 'sdfs'
  }
]

</script>

<template>

  <main class="main">
    <Never-done/>
    <run-row/>
    <Banner/>
    <Slider>

      <template #title>
        <h2>Мой заголовок слайдера</h2>
      </template>

      <template #nav="{next, prev}">
        <button @click="prev">Назад</button>
        <button @click="next">Вперёд</button>
      </template>

      <template #slides="{ spaceBetween }">
        <Slide #slides v-for="(item, index) in cardsForSlider"
               :key="item.id"
               :item="item"
               :style="{
                        marginRight: index < cardsForSlider.length - 1
                        ? spaceBetween + 'px'
                        : '0'
                      }"
        />

      </template>


    </Slider>
  </main>
</template>

<style>

</style>
