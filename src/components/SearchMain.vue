<template>
  <div class="text-gray-700">
    <mainHeader />
    <!-- end header -->

    <main>
      <div id="hero" class="section z-0 py-16 md:pt-32 md:pb-20 bg-gray-50">
        <div class="container xl:max-w-6xl mx-auto px-4">
          <div class="flex flex-wrap flex-row -mx-4 justify-center">
            <!-- content -->
            <div
              class="
                flex-shrink
                px-4
                max-w-sm
                w-full
                sm:w-9/12
                lg:w-1/2
                self-center
                lg:mr-10
              "
            >
              <img class="max-w-sm" alt="creative agency" :src="img" />
            </div>
            <!-- end content -->

            <!-- text -->
            <div
              class="
                flex-shrink
                max-w-full
                px-4
                w-full
                md:w-9/12
                lg:w-1/2
                self-center
                lg:pr-12
              "
            >
              <div class="text-center lg:text-left mt-6 lg:mt-0">
                <div class="mb-12">
                  <h1 class="text-4xl leading-normal text-black font-bold mb-4">
                    We are a Digital Agency<br />serve
                    <span
                      data-toggle="typed"
                      data-options='{"strings": ["Online Marketing", "Web Design", "Mobile Apps", "Brand Identity", "Social Content"]}'
                    ></span>
                  </h1>
                  <p
                    class="
                      text-gray-500
                      leading-relaxed
                      font-light
                      text-xl
                      mx-auto
                      pb-2
                    "
                  >
                    We would direct you to limitless ideas and move your brand
                    into a global landscape.
                  </p>
                </div>
                <a
                  class="
                    py-2.5
                    px-10
                    inline-block
                    text-center
                    leading-normal
                    text-gray-900
                    bg-white
                    border-b border-gray-100
                    hover:text-black hover:ring-0
                    focus:outline-none focus:ring-0
                    mr-4
                  "
                  href="#portfolio"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block mr-1"
                    width="1.5rem"
                    height="1.5rem"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M304,384V360c0-29,31.54-56.43,52-76,28.84-27.57,44-64.61,44-108,0-80-63.73-144-144-144A143.6,143.6,0,0,0,112,176c0,41.84,15.81,81.39,44,108,20.35,19.21,52,46.7,52,76v24"
                      style="
                        fill: none;
                        stroke: currentColor;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                    />
                    <line
                      x1="224"
                      y1="480"
                      x2="288"
                      y2="480"
                      style="
                        fill: none;
                        stroke: currentColor;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                    />
                    <line
                      x1="208"
                      y1="432"
                      x2="304"
                      y2="432"
                      style="
                        fill: none;
                        stroke: currentColor;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                    />
                    <line
                      x1="256"
                      y1="384"
                      x2="256"
                      y2="256"
                      style="
                        fill: none;
                        stroke: currentColor;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                    />
                    <path
                      d="M294,240s-21.51,16-38,16-38-16-38-16"
                      style="
                        fill: none;
                        stroke: currentColor;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                    />
                  </svg>
                  Our Work
                </a>

                <a
                  class="
                    py-2.5
                    px-10
                    inline-block
                    text-center
                    leading-normal
                    text-gray-100
                    bg-black
                    border-b border-gray-800
                    hover:text-white hover:ring-0
                    focus:outline-none focus:ring-0
                  "
                  href="#contact"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    class="inline-block mr-1"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <rect
                      x="48"
                      y="96"
                      width="416"
                      height="320"
                      rx="40"
                      ry="40"
                      style="
                        fill: none;
                        stroke: currentColor;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                    />
                    <polyline
                      points="112 160 256 272 400 160"
                      style="
                        fill: none;
                        stroke: currentColor;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                    />
                  </svg>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end Hero -->

      <!-- start services -->
      <div id="creat" class="section pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
        <div class="container xl:max-w-6xl mx-auto px-4">
          <!-- Heading start -->
          <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-black">
              creat URL
            </h2>

            <p
              class="
                text-gray-500
                leading-relaxed
                font-light
                text-xl
                mx-auto
                pb-2
              "
            >
              Save time managing advertising & Content for your business.
            </p>
          </header>
          <!-- End heading -->

          <!-- row -->
          <div class="flex flex-wrap flex-row -mx-2 text-center">
            <div class="px-4 max-w-full w-full">
              <div class="flex justify-center">
                <label
                  for="search-dropdown"
                  class="
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    sr-only
                    dark:text-gray-300
                  "
                  >Your Email</label
                >
                <select
                  class="
                    flex-shrink-0
                    z-10
                    inline-flex
                    items-center
                    py-2.5
                    px-4
                    text-sm
                    font-medium
                    text-center text-gray-900
                    bg-gray-100
                    border border-gray-300
                    dark:border-gray-700 dark:text-white
                    rounded-l-lg
                    hover:bg-gray-200
                  "
                  type="button"
                >
                  <option>Where?</option>
                  <option>Google</option>
                  <option>stackoverflow</option>
                </select>

                <div class="relative w-6/12">
                  <input
                    type="search"
                    id="search-dropdown"
                    class="
                      block
                      p-2.5
                      w-full
                      z-20
                      text-sm text-gray-900
                      bg-gray-50
                      rounded-r-lg
                      border-l-gray-100 border-l-2 border border-gray-300
                    "
                    placeholder="Search"
                    required
                  />
                  <button
                    type="submit"
                    class="
                      absolute
                      top-0
                      right-0
                      p-2.5
                      text-sm
                      font-medium
                      text-white
                      bg-blue-700
                      rounded-r-lg
                    "
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div
              class="
                flex-shrink
                px-4
                max-w-full
                w-full
                sm:w-1/2
                lg:w-1/3 lg:px-6
                wow
                fadeInUp
              "
            >
              <!-- end service block -->
            </div>

            <div
              class="
                flex-shrink
                px-4
                max-w-full
                w-full
                sm:w-1/2
                lg:w-1/3 lg:px-6
                wow
                fadeInUp
              "
            >
              <!-- end service block -->
            </div>

            <div
              class="
                flex-shrink
                px-4
                max-w-full
                w-full
                sm:w-1/2
                lg:w-1/3 lg:px-6
                wow
                fadeInUp
              "
            ></div>

            <div
              class="
                flex-shrink
                px-4
                max-w-full
                w-full
                sm:w-1/2
                lg:w-1/3 lg:px-6
                wow
                fadeInUp
              "
            >
              <!-- end service block -->
            </div>
          </div>
          <!-- end row -->
        </div>
      </div>
      <!-- End Service -->
    </main>
  </div>
</template>

<script>
import mainHeader from "@/components/MainHeader.vue";

export default {
  data() {
    return {
      img: require("@/assets/images/search.svg"),
    };
  },
  components: {
    mainHeader,
  },
};
</script>
<style>
</style>