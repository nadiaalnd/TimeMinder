<template>
  <div class="w-full mx-auto">
    <!-- Hero section -->
    <section class="py-8">
      <section id="hero" class="w-full pb-24">
        <BaseSection>
          <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-4 text-center sm:text-left">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
            >
              Optimize Your Time with <br />
              <span class="text-time-gradient">Time</span>
              <span class="text-minder-gradient">Minder</span>
            </h1>
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
              TimeMinder membantu kamu agar bisa lebih fokus dan teratur dalam menyelesaikan seluruh tugasmu setiap hari.
            </p>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4"
            >
              <nuxt-link to="/timer" class="max-w-full px-8 py-4 rounded-3xl bg-gradient-to-r from-[#FFBF1C] to-[#F8F097] text-white">
                <button>
                  Get Started
                </button>
              </nuxt-link>

              <a href="https://play.google.com/store/apps/details?id=com.a3.time_minder" class="max-w-full px-6 py-4 rounded-3xl text-gradient border border-[#FFBF1C] flex items-center justify-center" target="_blank">
                <button>
                  Download Apps
                </button>
              </a>
            </div>
          </div>
          <div class="hidden sm:block col-span-12 lg:col-span-6">
            <div class="w-full">
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/hero-image.svg')"
                class="mt-2"
                alt=""
              />
            </div>
          </div>
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            :src="require('~/assets/img/pattern/ellipse-1.png')"
            class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            :src="require('~/assets/img/pattern/ellipse-2.png')"
            class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            :src="require('~/assets/img/pattern/ellipse-3.png')"
            class="hidden sm:block absolute bottom-24 right-20 w-6"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            :src="require('~/assets/img/pattern/star.png')"
            class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[32rem] w-8"
          />
        </BaseSection>
      </section>
    </section>

    <!-- About Time Minder -->
    <section class="relative pb-24 flex flex-col justify-center items-center">
      <div class="bg-white absolute h-[70%] w-full bottom-0"></div>
      <section
        id="about"
        class="z-[5] max-w-screen-xl mx-8 sm:mx-auto px-4 sm:px-6 lg:px-0 py-4 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md flex flex-col items-center"
      >
        <div class="text-center px-8 sm:px-12">
          <h2 class="text-4xl font-semibold">
            About
            <span class="text-time-gradient">Time </span> <span class="text-minder-gradient">Minder</span>
          </h2>
          <p data-aos="fade-up" class="paragraph text-about text-justify mt-4 sm:mt-6">
            TimeMinder adalah aplikasi yang didesain untuk membantu siapapun mengelola waktu mereka secara efisien guna
            meningkatkan produktivitas. Dengan antarmuka yang intuitif dan fitur yang dapat disesuaikan, TimeMinder
            memungkinkan pengguna untuk mengatur sesi kerja dan istirahat sesuai dengan preferensi mereka.
          </p>
        </div>
      </section>
    </section>

    <!-- Intoduction section -->
    <section class="bg-white">
      <section class="w-full" data-aos="fade-down">
        <div class="relative max-w-screen-xl justify-center items-center px-8 mx-auto grid grid-cols-12 gap-x-6">
          <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
            <div class="flex justify-center items-center">
              <img :src="require('assets/img/hero.png')" class="w-70 sm:w-65" alt="" />
            </div>
          </div>
          <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
            <h2 class="text-4xl font-semibold">
              Introducing <span class="text-time-gradient">Time </span><span class="text-minder-gradient">Minder</span>
              Focus and Productivity Apps
            </h2>
            <p class="paragraph">Solusi terbaik untuk mengatur waktumu secara efektif!</p>
            <ul class="space-y-4 sm:space-y-2">
              <LandingListItem title="Costumizable Timer" />
              <LandingListItem title="Intuitive Interface" />
              <LandingListItem title="Work-Break Ratio" />
            </ul>
          </div>
        </div>
      </section>

      <!-- Features section -->
      <section
        id="features"
        class="bg-features relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden"
      >
        <div class="relative max-w-full-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
          <HomepageImage class="sm:hidden" />
          <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
            <h2 class="text-4xl font-semibold">Our <span class="text-time-gradient">Features</span></h2>
            <div class="space-y-2">
              <h4 class="text-lg font-medium">Add Your Own Custom Timer</h4>
              <p class="paragraph text-justify text-sm xl:text-base">
                Kustomisasi waktu fokus dan istirahat sesuai preferensimu. Atur durasi fokus dan istirahat serta interval sesuai kebutuhanmu.
              </p>
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-medium">Focus Timer</h4>
              <p class="paragraph text-justify text-sm xl:text-base">
                Fitur-fitur utama kami dirancang untuk meningkatkan produktivitas dan pengelolaan waktu pengguna menjadi lebih baik.
              </p>
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-medium">List View Timer</h4>
              <p class="paragraph text-justify text-sm xl:text-base">
                Dengan tampilan list terstruktur, kamu dapat mengelola waktu untuk setiap tugas dan jadwalmu lebih efisien.
              </p>
            </div>
          </div>
          <HomepageImage data-aos="fade-left" class="hidden sm:block" />
        </div>
      </section>

      <!-- Timer section -->
      <section class="w-full my-24">
        <div class="relative max-w-screen-xl justify-center items-center px-8 mx-auto grid grid-cols-12 gap-x-6">
          <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
            <div class="w-full">
              <img :src="require('~/assets/img/timer.png')" class="w-70" alt="" />
            </div>
          </div>
          <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-4 xl:px-8">
            <h2 class="text-4xl font-semibold">Our Timer</h2>
            <ul class="space-y-8 sm:space-y-4">
              <LandingListItem title="Customizable Timer">
                <p class="text-justify text-sm text-gray-700 leading-relaxed">
                  Atur timer pribadi untuk sesi kerja dan istirahat, sesuai dengan preferensi dan alur kerja unikmu.
                </p>
              </LandingListItem>
              <LandingListItem title="Fokus dan Produktivitas">
                <p class="text-justify text-sm text-gray-700 leading-relaxed">
                  Tetap fokus dan produktif sepanjang hari dengan antarmuka intuitif TimeMinder dan fitur-fitur canggih yang meningkatkan produktivitas.
                </p>
              </LandingListItem>
              <LandingListItem title="Cross-Platform Compatibility">
                <p class="text-justify text-sm text-gray-700 leading-relaxed">
                  Akses TimeMinder dengan mudah di semua perangkat untuk tetap terorganisir di mana pun kamu berada.
                </p>
              </LandingListItem>
            </ul>
          </div>
        </div>
      </section>

      <!-- Getting started section -->
      <section class="bg-features relative max-w-full-xl my-24 mx-auto shadow sm:rounded-2xl overflow-hidden">
        <div class="w-full py-16 flex flex-col items-center">
          <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
            Ayo Coba <span class="text-time-gradient">Time </span>
            <span class="text-minder-gradient">Minder</span> Sekarang!
          </h2>
          <div
            data-aos="fade-up"
            class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
          >
            <LandingStep v-for="step in steps" :key="step.title" :step="step" />
            <img
              :src="require('~/assets/img/getting-started/arrow.png')"
              class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
              alt=""
            />
            <img
              :src="require('~/assets/img/getting-started/arrow.png')"
              class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
              alt=""
            />
          </div>
        </div>
      </section>

      <!-- FAQ section -->
      <section id="faq" class="w-full" data-aos="fade-down">
        <div class="relative max-w-screen-xl justify-center items-center px-8 mx-auto grid grid-cols-12 gap-x-6">
          <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
            <div data-aos="fade-right" data-aos-delay="150" class="flex justify-center items-center">
              <div class="flex justify-center items-center">
                <img :src="require('~/assets/img/cat_hello.svg')" class="max-w-full max-h-xl " alt="" />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-8">
            <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
            <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>
            <ul class="shadow-box">
              <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
            </ul>
          </div>
        </div>
      </section>

      <div class="w-full py-10 flex justify-center">
        <a
          v-smooth-scroll
          data-aos="flip-down"
          data-aos-delay="150"
          href="#hero"
          class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
        >
          <span>Back to top</span>
          <ArrowUpIcon :size="20" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
import HomepageImage from '~/components/landing/HomepageImage.vue'
export default {
  name: 'IndexPage',
  components: { HomepageImage },
  mixins: [aosMixin],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      accordions: [
        {
          title: 'Apa itu TimeMinder?',
          description:
            'TimeMinder adalah sebuah aplikasi timer yang dirancang khusus untuk membantu kamu meningkatkan fokus dan produktivitasmu. Dengan fitur-fitur kustomisasi untuk istirahat, TimeMinder membantu kamu mengatur waktu kerja dan istirahat secara optimal, sehingga kamu dapat bekerja dengan lebih efisien.',
        },
        {
          title: 'Apa saja fitur utama yang ditawarkan oleh TimeMinder?',
          description:
            'TimeMinder menawarkan fitur utama berupa timer kustomisasi yang memungkinkan kamu mengatur periode kerja dan istirahat sesuai kebutuhanmu. Kamu dapat menyesuaikan durasi istirahat, mengatur interval antara periode kerja dan istirahat, serta menentukan jumlah siklus kerja-istirahat yang diinginkan.',
        },
        {
          title: 'Mengapa saya harus menggunakan TimeMinder daripada aplikasi timer lainnya?',
          description:
            'TimeMinder dirancang khusus untuk membantu kamu meningkatkan fokus dan produktivitas dengan pendekatan yang terbukti efektif. Dengan fitur-fitur kustomisasi untuk istirahat, TimeMinder memungkinkan kamu untuk mengatur pola kerja yang sesuai dengan ritme dan preferensimu, sehingga dapat tetap fokus dan terorganisir sepanjang hari.',
        },
        {
          title: 'Bagaimana TimeMinder dapat membantu saya secara konkret?',
          description:
            'TimeMinder membantu meningkatkan produktivitas dengan memberikan kontrol yang lebih besar atas waktu kerja dan istirahat. Dengan fitur yang memungkinkan pengaturan timer yang dapat digunakan kembali, kamu dapat mengatur pola kerjamu sekali dan menggunakannya berkali-kali tanpa perlu menambahkannya lagi. Hal ini membantumu tetap fokus dan terorganisir, sehingga dapat mencapai hasil yang lebih baik dalam waktu yang lebih singkat.',
        },
      ],
      steps: [
        {
          img: 'cat_pencil.svg',
          title: 'Tambahkan Kegiatan dan Waktu',
          description:
            'Tambahkan kegiatanmu dan atur waktu yang diperlukan untuk setiap kegiatan secara mudah dan cepat.',
        },
        {
          img: 'cat_setting.svg',
          title: 'Atur Kustom Waktu Jeda dan Jumlah Istirahat',
          description:
            'Atur waktu jeda antara sesi kerja dan istirahat sesuai preferensi kamu, serta tentukan jumlah istirahat yang diinginkan.',
        },
        {
          img: 'cat_clock.svg',
          title: 'Gunakan Timer',
          description:
            'Mulai menggunakan timer untuk mengatur waktu kerja dan istirahatmu dengan lebih teratur dan efisien.',
        },
      ],
    }
  },
}
</script>
<style scoped>
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

.bg-features {
  background: url('../assets/img/bg-section.webp');
  background-size: cover;
  background-position: center;
}

.text-about {
  text-align: justify;
}
</style>
