<template>
  <nav :class="{ 'cover-gradient-2' : isScrolled }" class="relative z-10 w-full text-neutral-800 justify-between">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-2">
      <div class="flex flex-col lg:flex-row space-x-4 xl:space-x-2">
        <div class="w-full flex flex-row items-center justify-between py-2">
          <div>
            <h2 class="font-bold">Get <span class="text-time-gradient">Time </span><span class="text-minder-gradient">Minder</span> Mobile Apps!</h2>
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-4">
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <NuxtLink to="/">Home</NuxtLink>
          <a href="https://play.google.com/store/apps/details?id=com.a3.time_minder" target="_blank">Download</a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BaseNavbarTimer',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    dropdownToggler () {
      this.dropdownNavbar = !this.dropdownNavbar
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    }
  }
}
</script>

<style scoped>
.cover-gradient-2 {
  background: linear-gradient(
    169.4deg,
    rgb(255, 249, 229) -6.01%,
    rgb(255, 249, 229) 36.87%,
    rgb(255, 249, 229) 78.04%,
    rgb(255, 249, 229) 103.77%
  );
}
.text-time-gradient {
  background: rgb(255, 191, 28);
  background: linear-gradient(169.4deg, #ffbf1c -6.01%, #ffb700 36.87%, #f8f097 78.04%, #ffbf1c 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-minder-gradient {
  background: rgb(3, 10, 48);
  background: linear-gradient(169.4deg, #030a30 -6.01%, #030a30 36.87%, #94caff 78.04%, #030a30 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
