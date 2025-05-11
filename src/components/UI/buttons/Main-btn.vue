<script setup>

const props = defineProps({
  background: {
    type: String,
    default: '#ffffff'
  },
  color: {
    type: String,
    default: '#000000'
  }
})
</script>

<template>
  <button
      class="button"
      :style="{
      background: props.background,
      color: props.color
    }"
  >
    <slot/>
  </button>
</template>

<style lang="scss">
.button{
  border-radius: 16px;
  padding: 10px 30px 10px 26px;
  font-family: $font-family;
  font-weight: 600;
  font-size: 16px;
  color: $white-bc;
  
  @include media-breakpoint-down(xs) {
    font-size: 10px;
    padding: 9px 13px 9px 13px;
    border-radius: 7px;
  }
}
</style>