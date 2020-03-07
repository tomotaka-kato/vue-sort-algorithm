
export default {
    mode: 'universal',
    server: {
        port: 3000,
        host: '0.0.0.0'
    },
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
    css: [
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // ['@babel/plugin-proposal-decorators', { legacy: true }],
        // ['@babel/plugin-proposal-class-properties', { loose: true }]
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxt/typescript-build'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        // extend (config, ctx) {
        // }
    },
    typsecript: {
        typeCheck: {
            eslint: true
        }
    }
}
