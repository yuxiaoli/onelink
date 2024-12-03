export default ({
    ssr: false, // Disable server-side rendering for static site
    app: {
        baseURL: '/onelink/' // Ensure the base URL is correct
    },
    router: {
        trailingSlash: true // Ensures consistent paths in generated links
    },
    generate: {
        fallback: '404.html' // Enable fallback for GitHub Pages SPA
    },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
})
