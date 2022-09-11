<template>
  <div class="lg:w-full w-full bg-blue-0">
    <div class="flex flex-col my-auto items-center mx-3">
      <div class="flex h-screen">
        <div class="m-auto">
          <img :src="googleSearchForm" />

          <div class="flex border rounded-3xl w-full">
            <span class="m-2 ml-4 align-middle text-gray-400 text-xl material-symbols-outlined"> search </span>

            <span class="block p-2.5 w-full z-20 bg-white rounded-3xl list-none googleSearch">
              <VueWriter :array="searchWord" :typeSpeed="100" :eraseSpeed="9999999999" :caret="cursor" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      googleSearchForm: require('@/assets/images/googleSearchForm.png'),
      searchWord: [this.$route.params.searchWord],
    };
  },
  created() {
    const timer = this.searchWord[0].length * 100;

    setTimeout(() => {
      location.href = 'https://www.google.com/search?q=' + this.searchWord;
    }, timer);
  },
};
</script>

<style scope>
img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.googleSearch .is-typed span.typed {
  color: black;
}

.googleSearch .is-typed span.cursor {
  display: inline-block;
  width: 2px;
  height: 25px;
  background-color: black;
  animation: blink 1s infinite;
}

.googleSearch .is-typed span.cursor.typing {
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