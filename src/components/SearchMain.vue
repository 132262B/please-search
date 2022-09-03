<template>
  <div class="text-gray-700">
    <!-- ========== { HEADER }==========  -->
    <header class="top-0 left-0 right-0 z-10 bg-gray-50">
      <nav class="main-nav">
        <div class="container xl:max-w-6xl mx-auto px-4">
          <div class="lg:flex lg:justify-between">
            <div class="flex justify-between">
              <div
                class="
                  mx-w-10
                  text-4xl
                  font-bold
                  capitalize
                  text-gray-900
                  flex
                  items-center
                "
              >
                Please Search
              </div>
              <!-- mobile nav -->
              <div class="flex flex-row items-center py-4 lg:py-0">
                <div
                  class="
                    relative
                    text-gray-900
                    hover:text-black
                    block
                    lg:hidden
                  "
                >
                  <button
                    type="button"
                    class="
                      menu-mobile
                      block
                      py-3
                      px-6
                      border-b-2 border-transparent
                    "
                  ></button>
                </div>
              </div>
            </div>

            <div class="flex flex-row">
              <!-- nav menu -->
              <ul
                class="
                  navbar
                  bg-white
                  lg:bg-transparent
                  w-full
                  hidden
                  text-center
                  lg:text-left lg:flex lg:flex-row
                  text-gray-900 text-sm
                  items-center
                  font-bold
                "
              >
                <li class="relative hover:text-black">
                  <a
                    class="
                      active
                      block
                      py-3
                      lg:py-7
                      px-6
                      border-b-2 border-transparent
                    "
                    href="#hero"
                    >Home</a
                  >
                </li>
                <li class="relative hover:text-black">
                  <a
                    class="
                      block
                      py-3
                      lg:py-7
                      px-6
                      border-b-2 border-transparent
                    "
                    href="#services"
                    >What we do</a
                  >
                </li>
                <li class="relative hover:text-black">
                  <a
                    class="
                      block
                      py-3
                      lg:py-7
                      px-6
                      border-b-2 border-transparent
                    "
                    href="#portfolio"
                    >Our works</a
                  >
                </li>
                <li class="relative hover:text-black">
                  <a
                    class="
                      block
                      py-3
                      lg:py-7
                      px-6
                      border-b-2 border-transparent
                    "
                    href="#clients"
                    >Clients</a
                  >
                </li>
                <li class="relative hover:text-black">
                  <a
                    class="
                      block
                      py-3
                      lg:py-7
                      px-6
                      border-b-2 border-transparent
                    "
                    href="#team"
                    >Team</a
                  >
                </li>
                <li class="relative hover:text-black">
                  <a
                    class="
                      block
                      py-3
                      lg:py-7
                      px-6
                      border-b-2 border-transparent
                    "
                    href="#contact"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
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
      <div id="services" class="section pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
        <div class="container xl:max-w-6xl mx-auto px-4">
          <!-- Heading start -->
          <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-black">
              What We Do
            </h2>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style="margin: 0 auto; height: 35px"
              xml:space="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r="5"
                class="stroke-primary"
                style="
                  fill: transparent;
                  stroke-width: 2;
                  stroke-miterlimit: 10;
                "
              ></circle>
              <line
                x1="55.1"
                y1="30.4"
                x2="100"
                y2="30.4"
                class="stroke-primary"
                style="stroke-width: 2; stroke-miterlimit: 10"
              ></line>
              <line
                x1="45.1"
                y1="30.4"
                x2="0"
                y2="30.4"
                class="stroke-primary"
                style="stroke-width: 2; stroke-miterlimit: 10"
              ></line>
            </svg>
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
          <div class="flex flex-wrap flex-row -mx-4 text-center">
            <div
              class="flex-shrink px-4 max-w-full w-full wow fadeInUp"
              data-wow-duration="1s"
            >
              <!-- service block -->
              <div
                class="
                  py-8
                  px-12
                  mb-12
                  bg-gray-50
                  border-b border-gray-100
                  transform
                  transition
                  duration-300
                  ease-in-out
                  hover:-translate-y-2
                "
              >
                <div class="inline-block text-gray-900 mb-4">
                  <!-- icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                  </svg>
                </div>
                <h3
                  class="text-lg leading-normal mb-2 font-semibold text-black"
                >
                  SEO Services
                </h3>
                <p class="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
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
              data-wow-duration="1s"
              data-wow-delay=".1s"
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
              data-wow-duration="1s"
              data-wow-delay=".3s"
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
              data-wow-duration="1s"
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
              data-wow-duration="1s"
              data-wow-delay=".1s"
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
export default {
  data() {
    return {
      img: require("@/assets/images/search.svg"),
    };
  },
};
</script>
<style>
</style>