export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'dns-prefetch', href: `//surmon.me` },
            { rel: 'dns-prefetch', href: '//api.surmon.me' },
            { rel: 'dns-prefetch', href: '//cdn.surmon.me' },
            { rel: 'dns-prefetch', href: '//static.surmon.me' },
            { rel: 'dns-prefetch', href: '//at.alicdn.com' },
            { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
            { rel: 'dns-prefetch', href: '//adservice.google.com' },
            { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
            { rel: 'dns-prefetch', href: '//googleads.g.doubleclick.net' },
            { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
            { rel: 'dns-prefetch', href: '//tpc.googlesyndication.com' },
            { rel: 'dns-prefetch', href: '//pagead2.googlesyndication.com' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'author', type: 'text/plain', href: '/humans.txt' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
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
    }
}