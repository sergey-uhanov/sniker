<script setup>

</script>

<template>

  <button class="link-btn">
    <slot/>
  </button>
</template>

<style lang="scss">
.link-btn {
  border-radius: 16px;
  background: $black-bc;
  font-weight: 400;
  font-size: 20px;
  font-family: $font-family;
  padding: 15px 38px;
  color: $white-fc;
  margin-top: 62px;
}
</style>