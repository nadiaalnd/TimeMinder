<template>
  <div class="mt-2">
    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-2 flex items-center">
      <button class="h-10 flex items-center justify-center px-2 py-1 bg-[#FAF8EE] border-t border-b border-l border-yellow-500 border-r-white rounded-l-md" @click="decrease">-</button>
      <input v-model.number="inputValue" type="number" class="h-10 block w-full text-center shadow-sm sm:text-sm bg-[#FAF8EE] border-t border-b border-yellow-500 focus:ring-0 focus:border-yellow-500" @input="$emit('update:modelValue', inputValue)">
      <button class="h-10 flex items-center justify-center px-2 py-1 bg-[#FAF8EE] border-t border-b border-r border-yellow-500 border-l-white rounded-r-md" @click="increase">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    modelValue: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      inputValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.inputValue = newValue;
    },
  },
  created() {
    this.inputValue = parseInt(localStorage.getItem('customTime') || 0);
  },
  methods: {
    increase() {
      this.inputValue++;
      this.$emit('update:modelValue', this.inputValue);
    },
    decrease() {
      if (this.inputValue > 0) {
        this.inputValue--;
        this.$emit('update:modelValue', this.inputValue);
      }
    },
  },
};
</script>

<style scoped>
button:focus,
input:focus {
  outline: none;
  box-shadow: none;
}
</style>
