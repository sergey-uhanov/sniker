<script  setup>


defineProps({
  isOpen: Boolean,
});


</script>

<template>
  <div class="burger-wrapper" @click="$emit('changeMobileMenu')">
    <div class="burger" :class="{ open: isOpen }" ></div>
  </div>
</template>

<style lang="scss">
.burger-wrapper{
  width: 25px;
 @media (hover: hover) {
   cursor: pointer;
 }
}
.burger {

  display: block;
  position: relative;
  top: 10px;
  border: none;
  width: 24px;
  height: 2px;
  background: black;
  transition: width 0.4s;
  z-index: 99;

  &::before,
  &::after {
    content: '';
    left: 0;
    position: absolute;
    display: block;
    width: 17px;
    height: 2px;
    background: #000;
    transition: width 0.4s;
  }

  &::before {
    top: 7px;
    transition:  top .3s .15s, transform .3s;
  }

  &::after {
    bottom: 7px;
    transition: bottom .3s .15s, transform .3s;
  }

  &.open {
    background: transparent;
    width: 0;
    &::before {
      width: 24px;
      top: 0;
      transform: rotate(30deg);
      transition: box-shadow .15s, top .3s, transform .3s .15s;
    }

    &::after {
      width: 24px;
      bottom: 0;
      transform: rotate(-30deg);
      transition: bottom .3s, transform .3s .15s;
    }
  }
}
</style>