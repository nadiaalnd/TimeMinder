<template>
  <div class="justify-center max-w-xl">
    <div class="relative h-2 bg-neutral-200 rounded-full">
      <div
        class="absolute top-0 left-0 h-2 rounded-full" :class="{ [bgColors]: percentages > 0 }" :style="{ width: (100 - percentages) + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimerProgressBar',
  props: {
    percentages: {
      type: Number,
      default: 0,
    },
    bgColors: {
      type: String,
      default: 'running-bg'
    },
  }
}
</script>

<style scoped>
.running-bg {
  background: linear-gradient(169.4deg, #ffbf1c -6.01%, #ffb700 36.87%, #f8f097 78.04%, #ffbf1c 103.77%);
}

.paused-bg {
  background: linear-gradient(169.4deg, #ff1c1c -6.01%, #ff0000 36.87%, #f89797 78.04%, #ff1c1c 103.77%);
}
</style>
