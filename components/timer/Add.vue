<!-- Add.vue -->
<template>
  <div>
    <button
      class="w-full border-dashed border-2 border-yellow-500 bg-gray-50 rounded-md px-6 py-2 text-sm text-gray-700 hover:bg-yellow-50 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-300"
      @click="openModal">
      Add Timer
    </button>
    <ModalCustom v-if="isModalOpen" @close="closeModal" />
  </div>
</template>

<script>
import ModalCustom from './custom/ModalCustom.vue';

export default {
  name: 'TimerAdd',
  components: {
    ModalCustom,
  },
  layout: 'custom',
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
}
</script>
