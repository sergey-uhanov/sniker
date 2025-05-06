<script setup>
import {inject, onMounted, ref, useSlots} from "vue";

const slots = useSlots();

const props = defineProps({
  quantity: {
    type: Number,
    default: 3
  },
  initialIndex: {
    type: Number,
    default: -1
  }
})
const isMobile = inject('isMobile');
const slider = ref(null);
const wrapper = ref(null);
const container = ref(null);
const shift = ref(0);
const step = ref(0);
const visibleWidth = ref(0);
const totalWidth = ref(0);
const spaceBetween = ref(0);
const quantitySlideVisible = ref(props.quantity);
const activeIndex = ref(props.initialIndex);

function updateSizes() {
  const slides = wrapper.value.children;
  visibleWidth.value = container.value.clientWidth;
  step.value = slides[0].clientWidth;
  calculateSpace()
  totalWidth.value = (step.value * slides.length) + (spaceBetween.value * (slides.length - 1));
}

function calculateSpace() {
  const result =
      ((visibleWidth.value - 30) - step.value * quantitySlideVisible.value)
      / (quantitySlideVisible.value - 1)
  ;
  spaceBetween.value = result < 10 ? 10 : result;
}

onMounted(() => {
  updateSizes();
  window.addEventListener('resize', updateSizes);

})


function applyTransform() {
  wrapper.value.style.transform = `translateX(${shift.value}px)`;
}

function getMaxShift() {
  const result = totalWidth.value - visibleWidth.value

  if (isMobile.value && quantitySlideVisible.value === 3) {
    return result + step.value + spaceBetween.value
  }
  return result
}

function getMinShift() {
  if (isMobile.value && quantitySlideVisible.value === 3) {

    return (step.value + spaceBetween.value)
  }

  return 0
}


function nextStep() {
  const maxShift = +getMaxShift();
  shift.value = Math.max(shift.value - (step.value + spaceBetween.value), -maxShift);
  applyTransform();
  centerActiveSlide()

}


function prevStep() {
  shift.value = Math.min(shift.value + (step.value + spaceBetween.value), getMinShift());

  applyTransform();
  centerActiveSlide()
}


let startPos = 0
let initialShift = 0
let isDragging = ref(false)

function startDrag(event) {
  event.preventDefault()
  isDragging.value = true
  const evt = event.type.startsWith('touch') ? event.touches[0] : event
  startPos = evt.clientX
  initialShift = shift.value


  document.addEventListener('mousemove', onDrag);
  document.addEventListener('touchmove', onDrag);
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);
}

function onDrag(event) {
  event.preventDefault()
  if (isDragging) {
    const evt = event.type.startsWith('touch') ? event.touches[0] : event
    const diff = evt.clientX - startPos
    const maxShift = -getMaxShift()
    shift.value = Math.min(Math.max(initialShift + diff, maxShift), getMinShift())
    applyTransform();
  }
}

function endDrag() {

  isDragging.value = false

  const fullStep = step.value + spaceBetween.value
  const maxShift = -getMaxShift()


  const currentIndex = Math.round(-shift.value / fullStep)
  const snappedShift = -currentIndex * fullStep;


  shift.value = Math.min(Math.max(snappedShift, maxShift), getMinShift())
  applyTransform();
  centerActiveSlide()

  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('mouseup', endDrag)
  document.removeEventListener('touchend', endDrag)

}

function centerActiveSlide() {
  if (isMobile && activeIndex.value !== -1) {
    const fullStep = step.value + spaceBetween.value
    const newIndex = -(shift.value / fullStep)
    activeIndex.value = newIndex + 1
  }
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
          :style="{ cursor: isDragging ? 'grabbing' : 'grab', gap:spaceBetween + 'px' }"
          ref="wrapper"
      >
        <slot name="slides" :activeIndex="isMobile?activeIndex:''"/>
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
    padding: 10px 0;

    @include media-breakpoint-down(sm) {


    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 33px 0;
  }

  &__title {
    font-family: $font-family;
    font-weight: 700;
    font-size: 40px;
  }

  &__nav-btn-block {
    display: flex;
    column-gap: 25px;
  }
}
</style>