<script setup>
import Home from "@/pages/Home.vue";
import {onBeforeMount, provide, ref} from 'vue';
import DefaultLayout from "@/layouts/Default-layout.vue";

const isMobile = ref(false);

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 768;
}

onBeforeMount(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

provide('isMobile', isMobile);
</script>

<template>
  <DefaultLayout>
      <Home/>
  </DefaultLayout>
</template>

<style scoped>

</style>
