<script lang="ts" setup="">
import {useTypeFilterStore} from '@/stores/filter-type'
import {computed} from "vue";

const storeFilterType = useTypeFilterStore()

</script>

<template>

  <nav>
    <ul class="nav-menu">
      <li v-for="item of storeFilterType.allFilterType"
          class="nav-menu__item"
          :class="item === storeFilterType.filterType ?'nav-menu__item_active':''"
          @click="storeFilterType.changeFilterType(item) "
      >
        {{ item.toUpperCase() }}
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.nav-menu {
  display: flex;
  column-gap: 57px;
  max-width: 300px;
  width: 100%;


  &__item {
    font-family: $font-family;
    font-weight: 400;
    font-size: 18px;
    position: relative;
    display: inline-block;

    background: linear-gradient($black-fc) no-repeat bottom / 0% 100%;
    //-webkit-background-clip: text;
    background-clip: text;
    //-webkit-text-fill-color: currentColor;
    transition:
        background-size 0.5s ease,
        -webkit-text-fill-color 0.5s ease;

    @media (hover) {
      cursor: pointer;
    }

    &:before {
      content: '';
      display: block;
      opacity: 0;
      height: 1px;

      background: #000;
      position: absolute;
      left: 0;
      bottom: -16px;
      width: 100%;
      transform: scaleX(0);
      transition: opacity 0.3s ease, transform 0.5s ease;
    }

    &_active {
      font-weight: 700;
      background-size: 100% 100%;
      -webkit-text-fill-color: transparent;

      &:before {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
}
</style>