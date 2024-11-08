/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // Just-in-Time mode for Tailwind CSS
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
    },
    extend: {
      scale: {
        105: "1.05",
        98: "0.98",
      },
      lineHeight: {
        p: "1.25", // leading-relaxed
      },
      height: {
        "10r": "10rem",
        "11r": "11rem",
        "12r": "12rem",
        "13r": "13rem",
        "14r": "14rem",
        "15r": "15rem",
        "16r": "16rem",
        "17r": "17rem",
        "18r": "18rem",
        "19r": "19rem",
        "20r": "20rem",
        "21r": "21rem",
        "22r": "22rem",
        "23r": "23rem",
        "24r": "24rem",
        "25r": "25rem",
        "30r": "30rem",
        "31r": "31rem",
        "32r": "32rem",
        "33r": "33rem",
        "34r": "34rem",
        "35r": "35rem",
        "36r": "36rem",
        "37r": "37rem",
        "38r": "38rem",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out", // Custom animation
        bounce: "bounce 1s infinite", // Add bounce animation
      },
    },
  },
  plugins: [
    require("daisyui"), // DaisyUI plugin for Tailwind
    require("@tailwindcss/typography"), // Typography plugin// Animation plugin
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-thin": {
          "::-webkit-scrollbar": {
            width: "2px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#a0aec0",
            borderRadius: "2px",
          },
        },
        ".scrollbar-none": {
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
        "body": {
          margin: "0", // Set body margin to 0
        },
      });
    },
  ],
  daisyui: {
    themes: [
      // có thể thêm themes tùy chọn ở đây
    ],
    themes: false, // tắt themes mặc định
    darkTheme: false, // tắt dark theme
    base: true, // sử dụng các style cơ bản
    styled: true, // sử dụng các style được định nghĩa sẵn
    utils: true, // sử dụng các utility classes
    prefix: "", // prefix cho các class
    logs: false, // tắt logging
    themeRoot: ":root", // root element cho theme
    rtl: false, // tắt right-to-left
    checkbox: {
      size: "1rem", // kích thước checkbox
      animation: true, // hiệu ứng animation khi click
      color: "currentColor", // màu của checkbox
    },
  },
};