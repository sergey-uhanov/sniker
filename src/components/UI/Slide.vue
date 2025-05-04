<script setup>
const props = defineProps({
  item: Object
    }
)
</script>

<template>
<div class="card">
  {{props.item.name}}
</div>


</template>

<style lang="scss">
.card {
  width: 400px;
  height: 580px;
  background: #456;
  flex-shrink: 0;
  transition: transform .3s;
  color: black;
}
</style>