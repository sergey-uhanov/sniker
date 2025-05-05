<script setup>
import {onMounted, ref, useSlots} from "vue";

const slots = useSlots();

const props = defineProps({
  quantity: {
    type: Number,
    default: 3
  }
})

const slider = ref(null);
const wrapper = ref(null);
const container = ref(null);
const shift = ref(0);
const step = ref(0);
const visibleWidth = ref(0);
const totalWidth = ref(0);
const spaceBetween = ref(0);
const quantitySlideVisible = ref(props.quantity);


onMounted(() => {
  const slides = wrapper.value.children;

  visibleWidth.value = container.value.clientWidth;

  step.value = slides[0].clientWidth + spaceBetween.value;

  spaceBetween.value = +((visibleWidth.value - (step.value * quantitySlideVisible.value)) / (quantitySlideVisible.value - 1)).toFixed(2)

  totalWidth.value = wrapper.value.scrollWidth + ((spaceBetween.value * slides.length - 1) - spaceBetween.value);
});


function applyTransform() {
  wrapper.value.style.transform = `translateX(${shift.value}px)`;

}


function nextStep() {
  const maxShift = +(totalWidth.value - visibleWidth.value);
  shift.value = Math.max(shift.value - (step.value + spaceBetween.value), -maxShift);
  applyTransform();
}


function prevStep() {
  shift.value = Math.min(shift.value + (step.value + spaceBetween.value), 0);

  applyTransform();
}


let startPos = 0;
let initialShift = 0;
let isDragging = ref(false);

function startDrag(event) {
  event.preventDefault();
  isDragging.value = true;
  const evt = event.type.startsWith('touch') ? event.touches[0] : event;
  startPos = evt.clientX;
  initialShift = shift.value;



  document.addEventListener('mousemove', onDrag);
  document.addEventListener('touchmove', onDrag);
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);
}

function onDrag(event) {
  event.preventDefault();
  if (isDragging) {
    const evt = event.type.startsWith('touch') ? event.touches[0] : event;
    const diff = evt.clientX - startPos;
    const maxShift = -(totalWidth.value - visibleWidth.value);
    shift.value = Math.min(Math.max(initialShift + diff, maxShift), 0);
    applyTransform();
  }
}

function endDrag() {

  isDragging.value= false;
  const maxShift = -(totalWidth.value - visibleWidth.value);
  const snappedShift = Math.round(shift.value / step.value) * step.value;

  shift.value = Math.min(Math.max(snappedShift, maxShift), 0);
  applyTransform();

  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('touchmove', onDrag);
  document.removeEventListener('mouseup', endDrag);
  document.removeEventListener('touchend', endDrag);
}
</script>

<template>
  <section class="slider" ref="slider">
    <div class="slider__container" ref="container">
      <div class="slider__header">
        <div class="slider__title">
          <slot name="title"/>
        </div>
        <nav class="slider__nav-btn-block">
          <slot name="nav" :next="nextStep" :prev="prevStep"/>
        </nav>
      </div>
      <div
          class="slider__wrapper"
          @mousedown="startDrag"
          @touchstart="startDrag"
          :style="{cursor: isDragging ? 'grabbing' : 'grab'}"
          ref="wrapper"
      >
        <slot name="slides" :spaceBetween="spaceBetween"/>
      </div>

    </div>
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
    //cursor: grab;
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