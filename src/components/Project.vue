<template>
  <div class="project">
    <div
      class="
        grid grid-cols-1
        md:grid-cols-3
        border
        dark:border-gray-700
        rounded-md
        bg-white
        dark:bg-gray-800
        shadow-md
        hover:shadow-lg
        overflow-hidden
        z-1
        relative
      "
    >
      <div
        class="
          bg-overlay
          flex
          items-center
          justify-center
          bg-cover bg-center
          border-b
          md:border-r md:border-b-0
          dark:border-gray-700
        "
      >
        <div
          class="bg-cover bg-center bg-no-repeat w-full h-full"
          style="min-height: 150px"
          :style="{
            backgroundImage: `url(${require('@/assets/img/projects/' +
              preview)})`,
          }"
        ></div>
      </div>
      <div class="col-span-2 p-5 md:p-7 lg:p-10">
        <h5 class="mb-4 font-medium dark:text-white">{{ title }}</h5>
        <p class="dark:text-white">
          {{ description }}
        </p>
        <div>
          <div
            class="
              inline-block
              px-3
              py-2
              font-semibold
              text-xs
              dark:text-white
              border border-blue-500
              rounded-md
              mt-3
              mr-3
            "
          >
            HTML
          </div>
          <div
            class="
              inline-block
              px-3
              py-2
              font-semibold
              text-xs
              dark:text-white
              border border-blue-500
              rounded-md
              mt-3
              mr-3
            "
          >
            CSS3
          </div>
          <div
            class="
              inline-block
              px-3
              py-2
              font-semibold
              text-xs
              dark:text-white
              border border-blue-500
              rounded-md
              mt-3
              mr-3
            "
          >
            JavaScript
          </div>
        </div>
        <a
          v-if="demo"
          v-bind:href="demo"
          target="_blank"
          rel="noopener noreferrer"
          class="
            inline-flex
            items-center
            justify-center
            pl-4
            pr-3
            py-2
            font-semibold
            text-sm
            bg-blue-500
            hover:bg-blue-400
            focus:bg-blue-600
            text-white
            rounded-full
            shadow-sm
            hover:shadow-md
            focus:shadow-sm
            mt-5
            mr-3
          "
        >
          Live Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <a
          v-if="github"
          v-bind:href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="
            inline-flex
            items-center
            justify-center
            pl-4
            pr-3
            py-2
            font-semibold
            text-sm
            bg-blue-500
            hover:bg-blue-400
            focus:bg-blue-600
            text-white
            rounded-full
            shadow-sm
            hover:shadow-md
            focus:shadow-sm
            mt-5
            mr-3
          "
        >
          View Source
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    description: String,
    preview: String,
    demo: String,
    github: String,
  },
};
</script>
<style>
.bg-overlay {
  position: relative;
}
.bg-overlay > div {
  transition: 0.3s filter;
  filter: grayscale(100%);
}
.project:hover .bg-overlay div {
  filter: none;
}
</style>
