<template>
  <div class="relative overflow-hidden">
      <Hero />
      <button
        class="
          theme-toggle
          z-10
          fixed
          top-4
          right-4
          rounded-full
          bg-blue-500
          hover:bg-blue-400
          focus:bg-blue-600
          p-2
          lg:p-3
          font-semibold
          text-sm
          bg-sky-500
          rounded-none
          shadow-lg
          hover:shadow-md
        "
        @click="toggle"
      >
        <svg
          v-if="this.themeMode === 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 fill-current text-white"
          viewBox="0 0 20 20"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          />
        </svg>
        <svg
          v-if="this.themeMode === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 fill-current text-white"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    <div class="container mx-auto relative">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      class="
        w-full
        md:w-2/3 lg:w-3/4
        h-auto
        absolute
        fill-current
        text-gray-100
        dark:text-gray-700
        z-0
        -top-32
        -left-1/3
      "
    >
      <path
        d="M48.8,-52.3C61.1,-47.9,67.3,-30.4,71.5,-11.9C75.6,6.7,77.7,26.4,70.9,43.6C64.1,60.7,48.5,75.4,31,79.1C13.5,82.8,-5.7,75.7,-24.6,68.4C-43.5,61.2,-62.1,53.9,-69.1,40.5C-76.1,27.1,-71.6,7.7,-64.6,-7.9C-57.7,-23.4,-48.3,-34.9,-37.2,-39.5C-26,-44,-13,-41.6,2.6,-44.7C18.3,-47.9,36.6,-56.6,48.8,-52.3Z"
        transform="translate(100 100)"
      />
    </svg>
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      class="
        w-full
        md:w-2/3 lg:w-3/4
        h-auto
        absolute
        fill-current
        text-gray-100
        dark:text-gray-700
        z-0
        top-1/3
        -right-1/3
      "
    >
      <path
        d="M47.6,-39.9C60.2,-22.2,68,-2.4,66.4,19.4C64.8,41.2,53.9,65.2,35.7,73.8C17.5,82.4,-7.8,75.7,-25.8,63.3C-43.8,51,-54.4,32.9,-52.8,18.3C-51.2,3.6,-37.4,-7.6,-26.5,-25C-15.7,-42.4,-7.9,-65.9,4.8,-69.8C17.5,-73.6,35,-57.7,47.6,-39.9Z"
        transform="translate(100 100)"
      />
    </svg>
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      class="
        w-full
        md:w-2/3 lg:w-3/4
        h-auto
        absolute
        fill-current
        text-gray-100
        dark:text-gray-700
        z-0
        top-3/4
        -left-1/3
      "
    >
      <path d="M35,-43.3C48.3,-30.5,64,-22.3,68.9,-9.9C73.7,2.5,67.8,19.1,57.3,29.2C46.8,39.2,31.8,42.7,15.8,52.3C-0.1,61.9,-17.1,77.7,-28.8,75.1C-40.4,72.5,-46.9,51.7,-54.9,33.7C-62.9,15.7,-72.4,0.6,-70.8,-13.2C-69.2,-27,-56.5,-39.5,-42.8,-52.2C-29.1,-64.8,-14.6,-77.6,-1.9,-75.4C10.9,-73.2,21.7,-56,35,-43.3Z" transform="translate(100 100)" />
    </svg>
      <div class="grid grid-cols-1 relative">
      <h5 class="text-blue-500 font-bold text-center">Development & Design</h5>
      <h3 class="font-semibold mb-10 lg:mb-20 text-center">My Favorite Projects</h3>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-1 gap-5 md:gap-10 pb-10">
        
        <Project
          preview="invoice-generator.png"
          title="React Invoice Generator"
          description="An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and covert it from canvas -> pdf."
          demo="https://invoice-generator-react.netlify.app/"
          github="https://github.com/johnuberbacher/invoice-generator"
          languages="Vue,Firebase,TailWind"
        />
        <Project
          preview="vue-chat.png"
          title="Vue Online Chat Client"
          description="Vue Chat webapp built with VueJS 3, TailwindCSS and Firebase for Google and GitHub authentication, and realtime firestore database. Uses VueRouter to redirect to Chat screen when logged in."
          demo="https://vue-chat-johnuberbacher.netlify.app/"
          github="https://github.com/johnuberbacher/vue-chat"
          languages="Vue,Firebase,TailWind"
        />
        <Project
          preview="pokedex.png"
          title="Flutter Pokédex Mobile App"
          description="Pokédex Index App built using Dart and Flutter. View Pokemon sprites, pokedex entries, stats, evolutions and type advantages/weaknesses in battle."
          demo=""
          github="https://github.com/johnuberbacher/pokedex"
          languages="Flutter,Dart"
        />
        <Project
          preview="amiibo-tracker.png"
          title="Amiibo Tracker"
          description="Catalog the Amiibo you've collected! Vue project built with Vue and BootstrapVue. Loads all Amiibo data from AmiiboApi."
          demo="https://amiibo-tracker.netlify.app/"
          github="https://github.com/johnuberbacher/amiibo-tracker"
          languages="Vue,TailWind"
        />
        <Project
          preview="johnuberbacher.png"
          title="johnuberbacher.com"
          description="This website was built from the ground up with Vue JS and Tailwind CSS. Projects are passed in as components and are automatically generated with JSON. Design by John Uberbacher."
          demo="https://johnuberbacher.com/"
          github=""
          languages="Vue,TailWind"
        />
        <Project
          preview="vue-compound-interest.png"
          title="Vue Compound Interest Calculator"
          description="Single Page VueJS Application. Enter initial principal amount, interest rate, time duration (in months or years), cycles year/month that the interest compounds. Built using Vue2 and TailwindCSS."
          demo="https://vue-js-compound-interest-calculator.netlify.app/"
          github="https://github.com/johnuberbacher/vue-compound-interest-calculator"
          languages="Vue,TailWind"
        />
        <Project
          preview="flutter-calculator.jpg"
          title="Calculator Mobile App"
          description="Functioning calculator App in Flutter/Dart with light and dark mode toggle switch. Shared Preferences keeps the users dark or light mode selection even after the app closes."
          github="hhttps://github.com/johnuberbacher/flutter_calculator"
          languages="Flutter,Dart"
        />
      </div>
    </div>
      <Footer />
  </div>
</template>

<script>
import Project from "./Project.vue";
import Hero from "./Hero.vue";
import Footer from "./Footer.vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      themeMode: "dark",
    };
  },
  components: {
    Hero,
    Project,
    Footer,
  },
  props: {
    msg: String,
  },
  methods: {
    toggle() {
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        this.themeMode = "light";
        document.documentElement.classList.remove("dark");
      } else {
        localStorage.theme = "dark";
        this.themeMode = "dark";
        document.documentElement.classList.add("dark");
      }
    },
  },
  mounted() {
    this.toggle();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
