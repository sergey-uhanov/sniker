<script setup>
import {computed, inject, onMounted, ref, useSlots} from "vue"


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
  },
  space:{
    type: Number,
    default: 0
  },
  minSpace:{
    type: Number,
    default: 15
  }
})
const slots = useSlots()

const hasTitleSlot = !!slots.title
const hasNavSlot = !!slots.nav

const isMobile = inject('isMobile')
const wrapper = ref(null)
const container = ref(null)
const shift = ref(0)
const step = ref(0)
const spaceBetween = ref(0)
const activeIndex = ref(props.initialIndex)

const fullStep = computed(() => step.value + spaceBetween.value)

let visibleWidth = 0
let totalWidth = 0
let quantitySlideVisible = props.quantity


function updateSizes() {
  const slides = wrapper.value.children
  visibleWidth = container.value.clientWidth
  step.value = slides[0].clientWidth
  calculateSpace()
  totalWidth = ((step.value + spaceBetween.value) * slides.length) - spaceBetween.value

}


function calculateSpace() {
  const result = ((visibleWidth) - step.value * quantitySlideVisible) / ((quantitySlideVisible - 1) ? quantitySlideVisible - 1 : 1)

  if(props.space == 0){
    spaceBetween.value = result < props.minSpace ? props.minSpace : result;
  } else{
    spaceBetween.value =  result < props.minSpace ? props.minSpace : props.space;
  }

}

onMounted(() => {
  quantitySlideVisible = props.quantity
  updateSizes();
  window.addEventListener('resize', updateSizes);


})


function applyTransform() {
  wrapper.value.style.transform = `translateX(${shift.value}px)`;
}

function getMaxShift() {
  return totalWidth - visibleWidth + step.value
}

function getMinShift() {
  return 0
}


function nextStep() {
  if (getMaxShift() > -(shift.value - fullStep.value)) {

    const countStep = Math.round((shift.value / fullStep.value) - 1)
    shift.value = fullStep.value * countStep
    changeIndex(activeIndex.value + 1)
  }

  applyTransform();
}


function prevStep() {
  if (getMinShift() <= -(shift.value + fullStep.value)) {

    const countStep = Math.round((shift.value / fullStep.value) + 1)
    shift.value = fullStep.value * countStep
    changeIndex(activeIndex.value - 1)
  }

  applyTransform();
}


let startPos = 0
let initialShift = 0
let isDragging = false

function startDrag(event) {
  event.preventDefault()
  isDragging = true
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

    shift.value = initialShift + diff
    applyTransform();
  }
}

function endDrag() {
  isDragging = false

  const countStep = Math.round(shift.value / fullStep.value)


  shift.value = fullStep.value * countStep


  if (shift.value > 0) {
    shift.value = 0
  }

  if (-shift.value > totalWidth - fullStep.value && !isMobile.value) {
    shift.value += fullStep.value
  }

  if (-countStep >= wrapper.value.children.length) {
    shift.value += fullStep.value * ((-countStep - wrapper.value.children.length) + 1)
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
  <section class="slider">
    <div class="slider__container">
      <div class="slider__header" v-if="hasNavSlot && hasTitleSlot">
        <div class="slider__title">
          <slot name="title"/>
        </div>
        <nav class="slider__nav-btn-block">
          <slot name="nav" :next="nextStep" :prev="prevStep"/>
        </nav>
      </div>
      <div class="slider__center-content" ref="container" :class="props.center? 'center':''">
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
    padding: 33px 0 10px 0;
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


    svg {
      @include media-breakpoint-down(xs) {
        width: 11px;
        height: 8px;
      }
    }
  }
}

.center {
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