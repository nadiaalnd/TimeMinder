export default {
  head: {
    title: 'TimeMinder',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  plugins: [
    '~/plugins/smooth-scroll.js',
    '~/plugins/mdi.js',
    '~/plugins/timer.js',
    {src: '~/plugins/sendNotification.js', mode: 'client'}
  ],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],
  modules: [],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      });
    },
  },

  /**
   buildDir: 'nuxt-dist',
   */
}
