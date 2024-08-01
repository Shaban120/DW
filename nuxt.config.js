import colors from 'vuetify/es5/util/colors'

export default {
  
  // router: {
  //   extendRoutes(routes, resolve) {
  //     return [
  //       {
  //         name: 'sitemap',
  //         path: '/sitemap', 
  //         component: resolve(__dirname, 'sitemap.xml'),
  //         chunkName: 'sitemap'
  //       },

  //     ]
  //   }
  // },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Distinction Wrapping',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Add fonts via CDN
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }
    ],
    // script: [
    //   { src: 'https://services.leadconnectorhq.com/appengine/loc/eYfduDnP9mHbOhbqiOFN/pool/QEEgQzfFmExfgv1Ps90t/number_pool.js', body: true },
    //   { src: 'https://services.leadconnectorhq.com/appengine/js/user_session.js', body: true }
    // ],
    script: [
      // Google Tag Manager script
      {
        innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WJG79QJB');
        `,
        body: true
      }
    ],
  },
  
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/Public/main.css"],
 
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/lazyLoad.js', ssr: false },
    { src: '~/plugins/clientScript.js', ssr: false },
    { src: '~/plugins/gtm.js', ssr: false },
    { src: '~/plugins/VueSlickCarousel.js', ssr: false },
    { src: '~/plugins/Click-outside.js', ssr: false },
    // { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' },

  ],
  // plugins: ['~/plugins/axios'],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'

  ],
  robots: [
    {
      UserAgent: 'Googlebot',
      Disallow: ['/user', '/admin'],
    },
    
    {
      UserAgent: '*',
      Disallow: '/admin',
    },

  ],
 
  axios: {
    // Other Axios options...
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#1CA3C2',
          accent: '#0C54AD',
          secondary: '#5b9ba9',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          footer: '#FFC107',
          header: '#363636',
          white: '#ffffff',
          grey:"a1a1a1",
          grey1: "A2A2A2",
          grey2: "#DCDCDC",
          grey3: "#1E1E1E",
          greylighten6: "#F1F1F1",
          listFont: '#8F8F8F',
          cardText: '#5b9ba9',
          red: '#FF2F00',
          black: '#000000',
          yellow:'#ffaa17',
          white5:'#f7f7f7',

        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      // Add loader for PDF files
      config.module.rules.push({
        test: /\.(pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      });
    },
  },
 

}
