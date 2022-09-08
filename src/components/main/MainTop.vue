<template>
  <section>
    <div id="home" class="section z-0 py-16 md:pt-32 md:pb-20 bg-gray-50">
      <div class="container xl:max-w-6xl mx-auto px-4">
        <div class="flex flex-wrap flex-row -mx-4 justify-center">
          <!-- content -->
          <div class="flex-shrink px-4 max-w-sm w-full sm:w-9/12 lg:w-1/2 self-center lg:mr-10">
            <img class="max-w-sm" alt="creative agency" :src="homeSearchImage" />
          </div>
          <!-- end content -->

          <!-- text -->
          <div class="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
            <div class="text-center lg:text-left mt-6 lg:mt-0">
              <div class="mb-12">
                <h1 class="text-4xl leading-normal text-black font-bold mb-4">
                  <VueWriter :array="arr" :typeSpeed="70" :caret="cursor" />
                </h1>
                <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">If you search for it, you can see everything</p>
              </div>
              <a class="py-2.5 px-10 inline-block text-center leading-normal text-gray-900 bg-white border-b border-gray-100 hover:text-black hover:ring-0 focus:outline-none focus:ring-0 mr-4" href="#home">
                <span class="align-middle material-symbols-outlined"> house </span>
                <span class="align-middle">&nbsp;HOME</span>
              </a>

              <a class="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border-b border-gray-800 hover:text-white hover:ring-0 focus:outline-none focus:ring-0" href="#creat">
                <span class="align-middle material-symbols-outlined"> construction</span>
                <span class="align-middle">&nbsp;CreatURL</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      homeSearchImage: require('@/assets/images/search.svg'),
      arr: ['Please search your question on the Internet.', '검색하면 다나와요.'],
    };
  },
};
</script>

<style>
.is-typed span.typed {
  color: black;
}

.is-typed span.cursor {
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>