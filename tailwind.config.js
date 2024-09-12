/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {

      colors : {

        light : {
          "bg-wight" : "#fff",
          "nav-hover" : "#007BFF",
          "high-bg" : "#FFE2DB",
          "high-text" : "#FF5F37",
          "med-bg" : "#FFEFD6",
          "med-text" : "#FFAF37",
          "low-bg" : "#C3FFF1",
          "low-text" : "#11A483"
        },
        dark :{
          "bg-nav" : "#091120",
          "bg-body" : "#060C18",
          "nav-bg-hover" : "#041933",
          "nav-btn" : "#0C1B31",
          "dark-btn" : "#002247"
        }


      },



    },
  },
  plugins: [],
}

