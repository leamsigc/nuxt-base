// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtseo/module",
    "@nuxt/content",
    "nuxt-delay-hydration",
    "@nuxthq/studio",
    "nuxt-content-assets",
    "@unlighthouse/nuxt",
  ],
  site: {
    url: "https://example.com",
    name: "Awesome Site",
    description: "Welcome to my awesome site!",
    defaultLocale: "en",
    identity: {
      type: "Person",
    },
    twitter: "@harlan-zw",
  },
});