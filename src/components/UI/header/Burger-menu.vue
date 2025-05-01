<script setup>

import SearchInput from "@/components/UI/header/Search-input.vue";
import AccountIcon from "@/components/icons/home/account-icon.vue";
import NikeIcon from "@/components/icons/home/nike-icon.vue";

defineProps({
  isOpen: Boolean,
});


</script>

<template>

    <div
        class="burger-menu"
        :class="{ 'burger-menu_open': isOpen }"
    >
      <div class="burger-menu__item-special">
        <SearchInput class="burger-menu__item-special-icon_search"/>
        <p>SEARCH</p>
      </div>

      <div class="burger-menu__item-special">
        <account-icon class="burger-menu__item-special-icon_login"/>
        <p>LOGIN</p>
      </div>

      <ul class="burger-menu__filter-list ">
        <li class="burger-menu__item burger-menu__item_active">all</li>
        <li class="burger-menu__item">WOMAN</li>
        <li class="burger-menu__item">MEN</li>
        <li class="burger-menu__item">WORCOUT</li>
        <li class="burger-menu__item">RUN</li>
        <li class="burger-menu__item">FOOTBALL</li>
      </ul>

      <div class="burger-menu__icon-wrapper">
        <nike-icon class="burger-menu__icon"/>
      </div>
    </div>


</template>

<style lang="scss">
.burger-menu {
  margin-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 375px + 18px;
  background: $white-bc;
  transform: translateX(-200%);
  transition: transform .5s;
  display: flex;
  flex-direction: column;
  padding-left: 18px;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow-Y: auto;
  height: 100vh;

  &_open {
    transform: translateX(0);
  }

  &__item-special {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 33px;
    font-family: $font-family;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #9f9f9f;
  }

  &__item-special-icon {
    &_search {
      width: 40px;
      height: 40px;
    }

    &_login {
      width: 36px;
      height: 42px;
    }


  }

  &__icon-wrapper {
    width: 167px;
    height: 68px;
    position: relative;
    left: 70px;
  }

  &__filter-list {
    padding-top: 20px;
    margin-bottom: 54px;
  }

  &__item {
    font-family: $font-family;
    font-weight: 400;
    font-size: 24px;
    color: #000;
    margin-bottom: 35px;
    text-transform: uppercase;
    position: relative;


    &_active {
      font-weight: 700;
      display: inline-block;

      &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 2px;
        background: $black-bc;
      }
    }
  }

  &__icon {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 167px;
    height: 67px  + 50px;
    margin-bottom: 50px;
  }
}
</style>


