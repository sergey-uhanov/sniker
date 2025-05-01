<script setup>
import {inject} from 'vue'
import NeverDone from "@/components/home/Never-done.vue";
import RunRow from "@/components/home/Run-row.vue";
import Banner from "@/components/home/Banner.vue";
import Slider from "@/components/home/Slider.vue";




const isMobile = inject('isMobile')

const logoArr = [{logo:'@/assets/img/home/4.png', alt:'logo'}]
</script>

<template>

    <main class="main">
      <Never-done/>
      <run-row logos="logoArr"/>
      <Banner/>
      <Slider>
        <div v-for="(item, index) in 10" class="card">
            {{item}}
        </div>
      </Slider>
    </main>


</template>

<style >
.card{
  width: 30vw;
  height: 200px;
  background: #456;
  margin-right:  5vw;
  flex-shrink: 0;
  transition: transform .3s;
}
</style>
