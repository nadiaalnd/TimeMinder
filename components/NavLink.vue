<template>
  <li class="w-full">
    <NuxtLink
      class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline"
      :to="url"
      @click.prevent="scrollToElement"
    >
      {{ name }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollToElement(event) {
      const targetElement = document.getElementById(this.url.substring(1));
      if (targetElement) {
        // Hitung tinggi header
        const headerHeight = document.getElementById('about').offsetHeight;
        let headerOffset = headerHeight;

        if (targetElement.id === 'faq') {
          headerOffset = -50;
        }

        const elementPosition = targetElement.getBoundingClientRect().top;

        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        event.stopPropagation();
        event.preventDefault();
      }
    }
  }
}
</script>
