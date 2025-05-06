<script setup>
import NeverDone from "@/components/home/Never-done.vue";
import RunRow from "@/components/home/Run-row.vue";
import Banner from "@/components/home/Banner.vue";
import Slider from "@/components/home/Slider.vue";
import Slide from "@/components/UI/Slide.vue";
import NavRow from "@/components/icons/home/nav-row.vue";

const cardsForSlider = [
  {
    id: 1,
    name: 'Air Max 97',
    price: 20.99,
    url: 'sdfs',
    src: '/sniker/img/home/shoes1.png'
  },
  {
    id: 2,
    name: 'React Presto',
    price: 17.99,
    url: 'sdfs',
    src: '/sniker/img/home/shoes2.png'
  },
  {
    id: 3,
    name: 'KD13 EP',
    price: 50.99,
    url: 'sdfs',
    src: '/sniker/img/home/shoes3.png'
  },
  {
    id: 4,
    name: 'Air Max 97',
    price: 20.99,
    url: 'sdfs',
    src: '/sniker/img/home/shoes1.png'
  },
  {
    id: 5,
    name: 'React Presto',
    price: 17.99,
    url: 'sdfs',
    src: '/sniker/img/home/shoes3.png'
  },
  {
    id: 6,
    name: 'KD13 EP',
    price: 50.99,
    url: 'sdfs',
    src: '/sniker/img/home/shoes2.png'
  }
]

</script>

<template>

  <main class="main">
    <Never-done/>
    <run-row/>
    <Banner/>
    <Slider :initialIndex="1">

      <template #title>
        Top sneakers
      </template>

      <template #nav="{next, prev}">
        <button class="slider-btn-prev" @click="prev"><nav-row/></button>
        <button class="slider-btn-next" @click="next"><nav-row/></button>
      </template>

      <template #slides="{ activeIndex }">
        <Slide #slides v-for="(item, index) in cardsForSlider"
               :key="item.id"
               :item="item"
               :isActiveClass="index === activeIndex ? 'active' : ''"

        />

      </template>


    </Slider>
  </main>
</template>

<style lang="scss">

%nav-btn{
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active{
    background: #c6c6c6;
  }
}
.slider-btn-prev{
  @extend %nav-btn

}
.slider-btn-next{
  @extend %nav-btn;
  transform: rotate(180deg);
}
</style>
