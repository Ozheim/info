// https://nuxt.com/docs/api/configuration/nuxt-config

// import IzidoorStructurePageService from './services/IzidoorStructurePage.service'

// Generate Dynamic Routes for static site generation
// https://dev.to/rafaelmagalhaes/generating-dynamic-routes-for-static-site-generation-with-nuxt-3-1epi
// import type { Variables } from 'graphql-request'

// create a function to fetch the routes from the API
// const graphQLClient = GraphQLClient(serviceInitConfig.GRAPHQL_ENDPOINT_URL)
// const getPostRoutes = async () => {
//   const response = await graphQLClient.request(
//     'https://sli1n332.directus.app/items/posts?filter={%22status%22:%22published%22}&sort=-date_created'
//   )
//   // return the array of routes
//   return response?.data?.data.map((post) => `/post/${post.slug}`);
// }

// const getStructuresRoutes = async () => {
//   IzidoorStructurePageService.init({ GRAPHQL_ENDPOINT_URL: process.env.GRAPHQL_ENDPOINT_URL ?? '' })
//   const structuresRoutes = await IzidoorStructurePageService.getStructuresRoutes()
//   // return the array of routes
//   return structuresRoutes.map((structure) => `/${structure.areaSlug}/${structure.slug}`)
// }

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/7571ad50b4.js',
        },
      ],
      noscript: [],
      // link: [
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css',
      //   },
      // ],
    },
  },
  ssr: true,
  hooks: {
    // async 'nitro:config'(nitroConfig) {
    //   // fetch routes for dedicated structures pages
    //   const structuresRoutes = await getStructuresRoutes()
    //   // add the routes to the nitro config
    //   nitroConfig.prerender?.routes?.push(...structuresRoutes)
    // },
  },
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    app: {
      // GRAPHQL_ENDPOINT_URL: process.env.GRAPHQL_ENDPOINT_URL,
      // MAPBOX_PUBLIC_TOKEN: process.env.MAPBOX_PUBLIC_TOKEN,
      // BOOKING_SITE_URL: process.env.BOOKING_SITE_URL,
    },
  },
  components: true, // Auto import components
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots', // '@zadigetvoltaire/nuxt-gtm',
    '@nuxtjs/google-fonts',
  ],
  sitemap: {},
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  // gtm: {
  //   id: 'GTM-K4CVLKFF',
  //   enableRouterSync: true,
  // },
  css: ['@/assets/css/main.css'],
})
