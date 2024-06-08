<template>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <div class="absolute w-full cover-gradient sm:cover-gradient-2">
        <BaseNavbar class="sticky top-0 z-10" />
        <main class="text-neutral-800">
          <Nuxt />
        </main>
        <BaseFooter />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
.cover-gradient {
  background: radial-gradient(circle, #d6eaff, #a0edf1, rgb(255, 255, 255), #eff5fb, #eaf5f1) 50% 100%,
  conic-gradient(from 45deg at 50% 50%, #333 0deg, #333 180deg);
  background-size: 100% 50%, auto;
}

.cover-gradient-2 {
  background: radial-gradient(circle, #d6eaff, #a0edf1, rgb(255, 255, 255), #eff5fb, #eaf5f1) 50% 100%,
  conic-gradient(from 45deg at 50% 50%, #333 0deg, #333 180deg);
  background-size: 100% 50%, auto;
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
