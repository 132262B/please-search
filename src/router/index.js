import { createWebHistory, createRouter } from "vue-router";

import SearchMain from '@/components/SearchMain.vue'
import SearchGoogle from '@/components/search/SearchGoogle.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: SearchMain,
    },
    {
        path: "/g/:searchWord",
        name: "Google",
        component: SearchGoogle,
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;