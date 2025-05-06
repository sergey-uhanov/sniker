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
  },
  center: {
    type: Boolean,
    default: false
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
const isCenter = ref(false);

function updateSizes() {
  const slides = wrapper.value.children;
  visibleWidth.value = container.value.clientWidth;

  step.value = slides[0].clientWidth;
  calculateSpace()
  totalWidth.value = (step.value * slides.length) + (spaceBetween.value * (slides.length - 1));

  if (isMobile && quantitySlideVisible.value === 3 && props.center) {
    isCenter.value = true;
  }
}


function calculateSpace() {
  const result =
      ((visibleWidth.value) - step.value * quantitySlideVisible.value)
      / (quantitySlideVisible.value - 1)
  ;
  spaceBetween.value = result < 15 ? 15 : result;
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
  return result + step.value
}

function getMinShift() {
  if (isMobile.value && quantitySlideVisible.value === 3) {
    return (step.value + spaceBetween.value)
  }

  return 0
}


function nextStep() {

  const fullStep = step.value + spaceBetween.value

  if (getMaxShift() > -(shift.value - fullStep - 1) && getMinShift() < -(shift.value - fullStep - 1)) {
    const fullStep = step.value + spaceBetween.value
    const countStep = Math.round((shift.value / fullStep) - 1)
    shift.value = fullStep * countStep
    changeIndex(activeIndex.value + 1)

  }
  applyTransform();
}


function prevStep() {
  const fullStep = step.value + spaceBetween.value


  if (getMinShift() < -(shift.value - (fullStep))) {

    const fullStep = step.value + spaceBetween.value
    const countStep = Math.round((shift.value / fullStep) + 1)
    shift.value = fullStep * countStep
    changeIndex(activeIndex.value - 1)

  }
  applyTransform();
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
    if (maxShift < (initialShift + diff))
      shift.value = initialShift + diff
    applyTransform();
  }
}

function endDrag(event) {
  isDragging.value = false
  const fullStep = step.value + spaceBetween.value

  const countStep = Math.round(shift.value / fullStep)
  shift.value = fullStep * countStep


  if (shift.value > 0) {
    shift.value = 0
  }

  changeIndex(-countStep, activeIndex.value)
  applyTransform();


  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('mouseup', endDrag)
  document.removeEventListener('touchend', endDrag)

}


function changeIndex(value) {
  if (value >= 0) activeIndex.value = value
}
</script>

<template>
  <section class="slider" ref="slider">
    <div class="slider__container" >
      <div class="slider__header">
        <div class="slider__title">
          <slot name="title"/>
        </div>
        <nav class="slider__nav-btn-block">
          <slot name="nav" :next="nextStep" :prev="prevStep"/>
        </nav>
      </div>
      <div class="slider__center-content" ref="container" :class="isCenter? 'center':''">
        <div
            class="slider__wrapper"
            @mousedown="startDrag"
            @touchstart="startDrag"
            :style="{ cursor: isDragging ? 'grabbing' : 'grab', gap:spaceBetween + 'px' }"
            ref="wrapper"
        >
          <slot name="slides" :activeIndex="activeIndex"/>
        </div>
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
    padding: 20px 0;

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

    @include media-breakpoint-down(sm) {
      font-size: 30px;
    }

    @include media-breakpoint-down(xs) {
      font-size: 16px;
    }
  }

  &__nav-btn-block {
    display: flex;
    column-gap: 25px;


    svg{
      @include media-breakpoint-down(xs) {
        width: 11px;
        height: 8px;
      }
    }
  }
}

.center{
  @include media-breakpoint-down(sm) {
    position: relative;
    left: 25vw;
  }

  @include media-breakpoint-down(xs) {
    left: 18.6vw;
  }
  @include media-breakpoint-down(xxs) {
    left: 15vw;
  }
}
</style>