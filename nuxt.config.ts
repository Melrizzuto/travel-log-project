import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
  css: ["~/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    dataValue: "theme",
  },
});
