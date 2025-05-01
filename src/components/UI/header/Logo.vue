<template>

  <a  class="logo" href="/">YOUR<span>SNEAKER</span></a>
</template>

<style lang="scss">
.logo{
  font-family: $font-family;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $grey-fc;
  position: relative;
  left: -49px;
  top:-2px;
  span{
    font-weight: 700;
    color: $black-fc;
  }
  @include media-breakpoint-down(md) {
    left:-2px;
    top: 0;
  }
  @include media-breakpoint-down(sm) {
    font-size: 20px;
  }
}
</style>