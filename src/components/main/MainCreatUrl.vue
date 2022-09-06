<template>
  <section>
    <div id="creat" class="section py-16 pb-8 bg-white mb-96">
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
                <select class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 list-none rounded-l-lg" type="button">
                  <option>Where?</option>
                  <option>Google</option>
                  <option>stackoverflow</option>
                </select>

                <input type="search" class="block p-2.5 w-full z-20 bg-white rounded-r-lg list-none" placeholder="search word" required />
                <button class="p-3 text-sm font-medium text-white bg-black rounded-r-lg hover:bg-gray-800">Create</button>
              </div>
            </div>
          </div>
          <div class="max-w-full w-full">
            <div class="flex justify-center">
              <div class="flex border rounded-xl sm:w-96 md:w-1/2">
                <input type="search" class="block p-2.5 w-full z-20 bg-white rounded-r-lg list-none" placeholder="search word" required />
                <button class="p-3 text-sm font-medium text-white bg-black rounded-r-lg hover:bg-gray-800">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>