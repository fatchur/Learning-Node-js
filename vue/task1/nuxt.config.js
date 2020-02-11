export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Learn Javascript',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#FAC50F', failedColor: 'red', height: '4px' },
    /* If we are using spa mode
    loadingIndicator: {
        name: 'circle',
        color: '#FAC50F'
    },*/

    /*
     ** Global CSS
     */
    css: [
        '~assets/styles/main.css',
    ],

    /*
     ** plugin
     ** USUALY used for setting vue/nuxt components as a global variable
     ** So the pages/compnents don't need to declare it again
     ** Plugin wil be rendered before all vue components/pages.
     */
    plugins: [],

    buildModules: [],

    /*
     ** Nuxt.js modules
     ** Same with plugin, bUT
     ** Usually developed by communities
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },

    // nuxt environtment setup
    env: {
        baseUrl: process.env.BASE_URL || "https://task1-d2d88.firebaseio.com",
    },

    // nuxt inter-route transition
    pageTransition: {
        name: 'fade',
        mode: 'out-in'
    }

}