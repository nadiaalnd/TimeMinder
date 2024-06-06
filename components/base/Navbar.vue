<template>
  <nav :class="{ 'cover-gradient-2' : isScrolled }" class="relative z-10 w-full text-neutral-800 justify-between">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-2">
      <div class="flex flex-col lg:flex-row space-x-4 xl:space-x-2">
        <div class="w-full flex flex-row items-center justify-between py-2">
          <div>
            <img :src="require('~/assets/img/logo/TimeMinder.svg')" class="w-32" alt="Time Minder Logo" />
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
          <NavLink name="Home" url="#hero" />
          <NavLink name="About" url="#about" />
          <NavLink name="Features" url="#features" />
          <NavLink name="FAQ" url="#faq" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BaseNavbar',
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
</style>
