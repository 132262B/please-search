<template>
  <section>
    <div id="creat" class="section py-16 pb-8 bg-white">
      <div class="container xl:max-w-6xl mx-auto px-4">
        <!-- Heading start -->
        <header class="text-center mx-auto mb-12 lg:px-20">
          <h2 class="text-2xl leading-normal mb-2 font-bold text-black">Creat URL</h2>

          <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Write down where and what you want to search in the window below, and then create a link through the Create button!</p>
        </header>
        <!-- End heading -->

        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-2 text-center">
          <div class="max-w-full w-full">
            <div class="flex justify-center">
              <div class="flex border rounded-xl sm:w-96 md:w-1/2">
                <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Where?</label>
                <select v-model="selectBoxValue" @change="change" class="flex-shrink-0 z-10 inline-flex items-center bg-white py-2.5 px-4 text-sm font-medium text-center text-gray-900 w-40 list-none rounded-xl">
                  <option v-for="list in selectList" :key="list" v-text="list.name" :value="list.value"></option>
                </select>

                <input type="search" class="block p-2.5 w-full z-20 bg-white rounded-r-lg list-none" placeholder="search word" v-model="searchWord" />
                <button @click="creatUrl()" class="p-3 text-sm font-medium text-white bg-black rounded-r-lg hover:bg-gray-800">CREATE</button>
              </div>
            </div>
          </div>
          <div class="max-w-full w-full mt-10">
            <span v-if="resultStatus" class="animate-pulse mb-4 font-bold">👀 Created Successfully. 👀</span>
            <div class="flex justify-center">
              <!-- 로딩바 -->

              <div v-if="loadingStatus">
                <svg width="90" height="90" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#1c7ed6">
                  <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
                    <circle cx="22" cy="22" r="6" stroke-opacity="0">
                      <animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" />
                      <animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite" />
                    </circle>
                    <circle cx="22" cy="22" r="6" stroke-opacity="0">
                      <animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" />
                      <animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite" />
                    </circle>
                    <circle cx="22" cy="22" r="8">
                      <animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>
              </div>
              <!-- 로딩바 종료 -->
              <div v-if="resultStatus" class="flex border rounded-xl sm:w-96 md:w-1/2">
                <input type="text" class="block p-2.5 w-full z-20 bg-white rounded-xl" :value="createUrlResult" />
                <button @click="copyURL(this.createUrlResult)" class="animate-pulse p-3 text-sm font-medium text-white bg-black rounded-r-lg hover:bg-gray-800">COPY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { copyText } from 'vue3-clipboard';

export default {
  data() {
    return {
      searchWord: '',
      selectBoxValue: '',
      createUrlResult: '',
      selectList: [],
      loadingStatus: false,
      resultStatus: false,
      origin: '',
    };
  },
  methods: {
    getSelectList() {
      const vm = this;

      this.axios({
        method: 'get',
        url: '/data/select.json',
      }).then(function (res) {
        vm.selectList = res.data;
      });
    },
    creatUrl() {
      if (this.searchWord !== '' && this.selectBoxValue !== '') {
        this.createUrlResult = `${this.origin}/${this.selectBoxValue}/${this.searchWord}`;
        this.resultStatus = false;
        this.loadingStatus = true;

        const vm = this;
        setTimeout(function () {
          vm.loadingStatus = false;
          vm.resultStatus = true;
        }, 1000);
      } else {
        alert('생성할 데이터를 입력해주세요.');
      }
    },
  },
  created() {
    this.getSelectList();
    this.origin = window.location.origin;
  },
  setup() {
    const copyURL = copyResult => {
      copyText(copyResult, undefined, error => {
        if (error) {
          alert("I didn't copy it!");
          console.log(error);
        } else {
          alert('I copied it!');
        }
      });
    };

    return { copyURL };
  },
};
</script>

<style>
input,
textarea {
  appearance: none;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: rgb(0, 0, 0) url('@/assets/images/arrow_drop_down.png') no-repeat 98% center;
  background-size: 15%;
}
</style>