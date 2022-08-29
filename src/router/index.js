import { createWebHistory, createRouter } from "vue-router";

import SearchMain from '@/components/SearchMain.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: SearchMain,
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;