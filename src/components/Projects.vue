
<template>
  <div class="container mx-auto relative">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      class="
        w-full
        md:w-2/3
        lg:w-3/4
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
        md:w-2/3
        lg:w-3/4
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
        md:w-2/3
        lg:w-3/4
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
      <path
        d="M35,-43.3C48.3,-30.5,64,-22.3,68.9,-9.9C73.7,2.5,67.8,19.1,57.3,29.2C46.8,39.2,31.8,42.7,15.8,52.3C-0.1,61.9,-17.1,77.7,-28.8,75.1C-40.4,72.5,-46.9,51.7,-54.9,33.7C-62.9,15.7,-72.4,0.6,-70.8,-13.2C-69.2,-27,-56.5,-39.5,-42.8,-52.2C-29.1,-64.8,-14.6,-77.6,-1.9,-75.4C10.9,-73.2,21.7,-56,35,-43.3Z"
        transform="translate(100 100)"
      />
    </svg>
    <div class="grid grid-cols-1 relative">
      <h5 class="text-blue-500 font-bold text-center">Development & Design</h5>
      <h3 class="font-semibold mb-10 lg:mb-20 text-center">
        My Favorite Projects
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-5 md:gap-10 pb-10">
      <Project
        v-for="project in projects"
        :key="project.title"
        :preview="project.preview"
        :title="project.title"
        :description="project.description"
        :demo="project.demo"
        :github="project.github"
        :languages="project.languages"
      />
    </div>
  </div>
</template>

<script>
import jsonProjects from "@/assets/projects/projects.json";
import Project from "./Project.vue";
export default {
  name: "Hero",
  components: {
      Project
  },
  data() {
      return {
          projects: []
      }
  },
  mounted() {
    this.projects = jsonProjects['projects'];
    console.log(this.projects['projects']);
  }
};
</script>
