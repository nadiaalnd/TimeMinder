<template>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <div class="absolute w-full cover-gradient">
        <BaseNavbarTimer class="sticky top-0 z-10" />
        <main class="text-neutral-800 bg-white">
          <Nuxt/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNavbarTimer from '~/components/base/NavbarTimer.vue'
export default {
  name: 'CustomLayout',
  components: {
    BaseNavbarTimer,
  },
}
</script>

<style>
.cover-gradient {
  background: radial-gradient(circle, #d6eaff, #a0edf1, rgb(255, 255, 255), #eff5fb, #eaf5f1) 50% 100%,
  conic-gradient(from 45deg at 50% 50%, #333 0deg, #333 180deg);
  background-size: 100% 50%, auto;
}
</style>
