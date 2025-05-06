<script setup>

import AccountIcon from "@/components/icons/home/account-icon.vue";
import SearchInput from "@/components/UI/header/Search-input.vue";
import CartIcon from "@/components/icons/home/cart-icon.vue";

import Logo from "@/components/UI/header/Logo.vue";
import {inject, ref, watch} from 'vue'
import BurgerMenuIcon from "@/components/UI/header/Burger-menu-icon.vue";
import NavMenu from "@/components/UI/header/Filter-menu.vue";
import BurgerMenu from "@/components/UI/header/Burger-menu.vue";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const isMobile = inject('isMobile')
const isOpen = ref(false);
const menuRef = ref(null)

let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 50;

watch(isOpen, (open) => {
  if (open && menuRef.value) {
    disableBodyScroll(menuRef.value, { reserveScrollBarGap: true })
  } else if (menuRef.value) {
    enableBodyScroll(menuRef.value)
  }
})


const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
};


const handleSwipe = () => {
  const swipeDistance = touchEndX - touchStartX;


  if (swipeDistance > minSwipeDistance && !isOpen.value && isMobile.value) {
    isOpen.value = true;
  }

  if (swipeDistance < -minSwipeDistance && isOpen.value) {
    isOpen.value = false;
  }
};


// onMounted(() => {
//   document.addEventListener('touchstart', handleTouchStart);
//   document.addEventListener('touchend', handleTouchEnd);
// });


</script>

<template>
  <header class="header">
    <div class="header__container">
      <Nav-menu class="header__nav-menu" v-if="!isMobile"/>
      <burger-menu-icon
          v-else :isOpen
          @changeMobileMenu="isOpen = !isOpen"/>
      <logo/>
      <div class="header__icon-block">
        <account-icon v-show="!isMobile"/>
        <Search-input v-show="!isMobile"/>
        <cart-icon class="header__cart-icon" />
      </div>
    </div>
    <div ref="menuRef">
      <Burger-menu :isOpen />
    </div>
  </header>
</template>

<style lang="scss">

.header {
  padding: 27px 0 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: $white-bc;

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__icon-block {
    display: flex;
    column-gap: 48px;
  }

  &__cart-icon{
    position: relative;
    left: -8px;
  }
}
</style>
