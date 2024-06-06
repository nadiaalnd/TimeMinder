<template>
  <div
    v-if="show" id="default-modal" tabindex="-1" aria-hidden="true"
    class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative p-4 max-w-2xl w-full md:max-w-lg lg:max-w-xl">
      <!-- Konten Modal -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Header Modal -->
        <div class="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 text-center">
            Konfirmasi
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="$emit('close')">
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Isi Modal -->
        <div class="p-4 md:p-5 space-y-2">
          <p class="text-gray-600 dark:text-gray-400 text-center">
            Apakah Anda yakin ingin mengganti timer?
          </p>
        </div>
        <!-- Footer Modal -->
        <div class="px-4 bg-gray-50 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b">
          <div class="w-full flex justify-end">
            <button
              type="button"
              class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-300 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:text-sm w-auto"
              @click="closeModal">
              tidak
            </button>
            <button
              type="button"
              class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:w-auto sm:text-sm w-auto ml-2"
              @click="confirmModal">
              ya
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimerPopup',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    confirmModal() {
      this.$emit('confirm');
    }
  }
}
</script>
