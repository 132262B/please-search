<template>
  <div class="lg:w-full w-full bg-blue-0">
    <div class="flex flex-col my-auto items-center mx-3">
      <div class="flex h-screen">
        <div class="m-auto">
          <img :src="googleSearchForm" />
          asdasd
          {{ $route.params.searchWord }}
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
    };
  },
};
</script>

<style>
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
</style>