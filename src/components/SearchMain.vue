<template>
  <div class="text-gray-700">
    <main-header />
    <main-top />
    <main-creat-url />
    <main-footer />
  </div>
</template>

<script>
import mainHeader from '@/components/main/MainHeader.vue';
import mainTop from '@/components/main/MainTop.vue';
import mainCreatUrl from '@/components/main/MainCreatUrl.vue';
import mainFooter from '@/components/main/MainFooter.vue';

export default {
  components: {
    mainHeader,
    mainTop,
    mainCreatUrl,
    mainFooter,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
</style>