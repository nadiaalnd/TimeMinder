<template>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <div class="absolute w-full cover-gradient-2 sm:cover-gradient">
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
  background: linear-gradient(
    169.4deg,
    rgb(248, 240, 151) -6.01%,
    rgb(255, 239, 133) 36.87%,
    rgb(248, 240, 151) 78.04%,
    rgb(248, 240, 151) 103.77%
  );
}

.cover-gradient-2 {
  background: linear-gradient(
    169.4deg,
    rgb(255, 249, 229) -6.01%,
    rgb(255, 249, 229) 36.87%,
    rgb(255, 249, 229) 78.04%,
    rgb(255, 249, 229) 103.77%
  );
}

.bg-orange-gradient,
.text-gradient {
  background: linear-gradient(136.91deg, #e7bc57 -12.5%, #ffbf1c 107.5%);
}

.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
