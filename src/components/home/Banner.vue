<script setup>

</script>

<template>
  <div class="banner">
    <img class="banner__img" src="@/assets/img/home/6.png" alt="banner" width="1400" height="700"/>
    <img class="banner__logo"  src="@/assets/img/home/Vector.png" alt="logo" width="370" height="132"/>
  </div>

</template>

<style lang="scss">
.banner {
  object-fit: cover;
  position: relative;
  overflow: hidden;

  &__img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: auto;
    filter: blur(8px);
  }

  &__logo{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 3;

    @include media-breakpoint-down(sm) {
      width: 99px;
      height: 36px;
    }
  }
  
}
</style>