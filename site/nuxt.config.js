export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'site',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: 'https://icons.veryicon.com/png/o/system/rounded-linear-icon/homepage-27.png'
        }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        'nuxt-vite',
        'bootstrap-vue/nuxt'

    ],

    tailwindcss: {
        config: {
          plugins: [
            ['daisyui']
        ]
        }
      },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: [],


    /* options for vite */
    vite: {
        ssr: true
    }
}