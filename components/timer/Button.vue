<template>
  <div class="relative justify-center items-center">
    <!-- Button Pause Timer -->
    <button
      class="bg-blue-100 px-4 py-4 sm:py-3 rounded-md text-[#59A7F2] hover:shadow-md transition duration-300"
      @click="handleButtonClick"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TimerButton',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    onClick: Function
  },
  methods: {
    handleButtonClick() {
      if (this.onClick) {
        this.onClick();
      }
    }
  }
}
</script>
