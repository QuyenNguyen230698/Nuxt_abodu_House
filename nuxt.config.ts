// https://nuxt.com/docs/api/configuration/nuxt-config
import { compression } from "vite-plugin-compression2";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  css: ['@/assets/css/main.css',],
  devServer: {
    port: 3333,
  },
  vite: {
    plugins: [
      compression({ 
        include: /\.(html|xml|css|json|js|mjs|svg|png|jpg|jpeg|gif|webp)$/,
        algorithm: "gzip",
        threshold: 10240,
        deleteOriginalAssets: false 
      }),
      compression({ 
        algorithm: "brotliCompress",
        threshold: 10240 
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  imports: {
    dirs: ["store"],
    autoImport: true,
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  nitro: {
    serveStatic: true,
    prerender: {},
    routeRules: {
      "/api/**": { headers: { "Cache-Control": "public, max-age=86400, must-revalidate" } },
      "/_nuxt/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
      "/**/*.webp": { headers: { "Cache-Control": "public, max-age=2592000, immutable" } },
      "/**": { headers: { "Cache-Control": "public, max-age=604800, must-revalidate" } },
      "/image/**": { headers: { "Cache-Control": "public, max-age=2592000, immutable" } },
      "/_ipx/**": { headers: { "Cache-Control": "public, max-age=2592000, immutable" } },
    },
    compressPublicAssets: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {}, // Sử dụng Tailwind CSS
      autoprefixer: {}, // Tự động thêm các tiền tố CSS
      "@fullhuman/postcss-purgecss": {
        content: [
          "./components/**/*.{vue,js}",
          "./layouts/**/*.vue",
          "./pages/**/*.vue",
          "./plugins/**/*.{js,ts}",
          "./app.vue",
          "./error.vue",
          "./nuxt.config.{js,ts}",
          "./index.html",
          "./src/**/*.{vue,js,ts,jsx,tsx}",
        ],
        safelist: [
          "aos-init",
          "aos-animate",
          /^aos-/,
          /^data-aos-/,
          /^data-aos/,
          /^v3dp__/,
        ],
        defaultExtractor: (content: string) =>
          content.match(/[\w-/:]+(?<!:)/g) || [], // Explicitly typed 'content' parameter
      },
    },
  },
 image: {
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    domains: ["http://localhost:3333"],
    alias: {
      cdn: "/image/",
    },
    format: ["webp", "avif"],
    presets: {
      default: {
        modifiers: {
          quality: 85,
          format: "webp",
          loading: "lazy",
          sizes: "100vw, md:100vw, lg:100vw, xl:50vw, xxl:50vw, 2xl:33vw", // Cấu hình sizes chi tiết hơn
        },
      },
    },
  },
})