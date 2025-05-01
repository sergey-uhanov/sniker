<script setup>
import { ref, onMounted } from "vue";

const slider = ref(null);
const wrapper = ref(null);
const shift = ref(0);
const step = ref(0);
const visibleWidth = ref(0);
const totalWidth = ref(0);
const spaceBetween = ref(0);


onMounted(() => {
  const slides = wrapper.value.children;

  step.value = slides[0].clientWidth + spaceBetween.value;

  visibleWidth.value = slider.value.clientWidth;

  totalWidth.value = wrapper.value.scrollWidth;
});


function applyTransform() {
  wrapper.value.style.transform = `translateX(${shift.value}px)`;
}


function nextStep() {
  const maxShift = -(totalWidth.value - visibleWidth.value);
  shift.value = Math.max(shift.value - step.value, maxShift);
  applyTransform();
}


function prevStep() {
  shift.value = Math.min(shift.value + step.value, 0); // Не дальше начала
  applyTransform();
}


let startPos = 0;
let initialShift = 0;
let isDragging = false;

function startDrag(event) {
  isDragging = true;
  const evt = event.type.startsWith('touch') ? event.touches[0] : event;
  startPos = evt.clientX;
  initialShift = shift.value;
}

function onDrag(event) {
  if (isDragging) {
    const evt = event.type.startsWith('touch') ? event.touches[0] : event;
    const diff = evt.clientX - startPos;
    const maxShift = -(totalWidth.value - visibleWidth.value);
    shift.value = Math.min(Math.max(initialShift + diff, maxShift), 0);
    applyTransform();
  }
}

function endDrag(event) {
  isDragging = false;
  const maxShift = -(totalWidth.value - visibleWidth.value);
  const snappedShift = Math.round(shift.value / step.value) * step.value;
  shift.value = Math.min(Math.max(snappedShift, maxShift), 0); // Привязка к ближайшему слайду
  applyTransform();
}
</script>

<template>
  <section class="slider" ref="slider">
    <div
        class="slider__wrapper"
        @mousedown="startDrag"
        @touchstart="startDrag"
        @mousemove="onDrag"
        @touchmove="onDrag"
        @mouseup="endDrag"
        @touchend="endDrag"
        ref="wrapper"
    >
      <slot></slot>
    </div>
    <nav class="slider__nav-btn-block">
      <button class="slider__prev-btn" @click="prevStep">&lt;</button>
      <button class="slider__next-btn" @click="nextStep">&gt;</button>
    </nav>
  </section>
</template>

<style lang="scss">
.slider {
  overflow: hidden;

  &__wrapper {
    display: flex;
    width: 100%;
    touch-action: none;
    will-change: transform;
    transition: transform .3s;
  }

  &__nav-btn-block {
    button {
      font-size: 30px;
      font-weight: bold;
      margin: 0 30px;
    }
  }
}
</style>`