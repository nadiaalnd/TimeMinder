<template>
  <li class="space-y-2">
    <div class="flex items-center space-x-2">
      <CheckCircleIcon :size="20" class="text-[#FFBF1C]" />
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'LandingListItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
