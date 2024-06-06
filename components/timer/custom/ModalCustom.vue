<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <button @click="close" class="absolute top-0 right-0 mt-2 mr-2 text-gray-800 py-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 8l32 32M8 40L40 8"/>
          </svg>
        </button>
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Tambah Waktumu Sendiri!</h3>
          <FormInput @update:time="handleTime" />
        </div>
        <div class="px-4 py-3 sm:px-6 flex justify-center">
          <button class="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md" @click="apply">
            Terapkan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/timer/custom/FormInput.vue';

export default {
  components: {
    FormInput,
  },
  data() {
    return {
      time: 0,
    };
  },
  mounted() {
    this.time = parseInt(localStorage.getItem('customTime'));
  },
  methods: {
    apply() {
      localStorage.setItem('customTime', this.time);
      this.$emit('close');
    },
    handleTime(time) {
      this.time = time;
    },
    reset() {
      this.time = 0;
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
