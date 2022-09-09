<template>
  <header class="top-0 left-0 right-0 z-10 bg-gray-50">
    <nav class="main-nav">
      <div class="container xl:max-w-6xl mx-auto px-4">
        <div class="lg:flex lg:justify-between">
          <div class="flex justify-between">
            <div class="mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center cursor-pointer">
              <a href="/"> Please Search </a>
            </div>
            <!-- mobile nav -->
            <div class="flex flex-row items-center py-4 lg:py-0">
              <div class="relative text-gray-900 hover:text-black block lg:hidden">
                <button type="button" class="menu-mobile block py-3 px-6 border-b-2 border-transparent"></button>
              </div>
            </div>
          </div>

          <div class="flex flex-row">
            <!-- nav menu -->
            <ul class="navbar bg-white lg:bg-transparent w-full hidden text-center lg:text-left lg:flex lg:flex-row text-gray-900 text-sm items-center font-bold">
              <li class="relative hover:text-black">
                <a class="active block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#home">Home</a>
              </li>
              <li class="relative hover:text-black">
                <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#creat">creat URL</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>