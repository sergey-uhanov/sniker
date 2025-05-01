<script setup>
import {computed, onMounted, ref} from 'vue';

const {logosSrc, animationDuration, logoWidth, logoHeight} = defineProps({
  logosSrc: {
    type: Array,
    default: [
      {
        link: 'https://www.nike.com',
        imgSrc: '/src/assets/img/home/4.png',
        name: 'nike'
      },
      {
        link: 'https://www.adidas.ua/',
        imgSrc: '/src/assets/img/home/44.png',
        name: 'nike'
      },
      {
        link: 'https://ua.puma.com/uk/',
        imgSrc: '/src/assets/img/home/444.png',
        name: 'nike'
      }
    ]
  },
  animationDuration: {
    type: Number,
    default: 20
  },
  logoWidth: {
    type: Number,
    default: 150
  },
  logoHeight: {
    type: Number,
    default: 49
  }
});

const count = ref(Math.ceil(window.innerWidth / logoWidth + 1));
const offset = ref(0);

const logos = computed(() => {
  const len = count.value;
  const logosArray = Array.from({length: len}, (_, i) =>
      logosSrc[i % logosSrc.length]
  );
  if (logosArray[0] === logosArray[logosArray.length - 1]) {
    logosArray[logosArray.length - 1] = logosArray[logosArray.length - 3];
  }
  return logosArray;
});

onMounted(() => {
  let lastTime = performance.now();

  function step(now) {
    const delta = (now - lastTime) / 1000;
    lastTime = now;

    const speed = window.innerWidth / animationDuration;
    offset.value += speed * delta;

    const total = logoWidth * count.value;
    if (offset.value >= total) {
      offset.value -= total;
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

  window.addEventListener('resize', handleResize);

});

const handleResize = () => {
  const currentTotal = logoWidth * count.value;
  const fraction = currentTotal > 0 ? offset.value / currentTotal : 0;
  count.value = Math.ceil(window.innerWidth / logoWidth + 1);
  const newTotal = logoWidth * count.value;
  offset.value = fraction * newTotal;
};
</script>

<template>
  <section class="run-row">
    <div class="run-row__logo-wrapper">
      <div
          class="run-row__logo-track"
          :style="`transform: translateX(-${offset}px);`"
      >
        <a v-for="(logo, idx) in [...logos, ...logos]" :href=logo.link>
          <img
              :key="idx + logo"
              class="run-row__logo"
              :src="`${logo.imgSrc}`"
              alt="logo"
              :style="`width: ${logoWidth}px; height: ${logoHeight}px;`"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.run-row {
  overflow: hidden;

  &__logo-wrapper {
    width: 100%;
  }

  &__logo-track {
    display: flex;
    will-change: transform;
  }

  &__logo {
    flex-shrink: 0;
    padding: 0 10px;
    transition: transform .3s;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>

