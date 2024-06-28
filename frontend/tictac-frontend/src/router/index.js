import { createRouter, createWebHistory } from "vue-router";
import findGame from "../components/findGame.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'findgame',
            component: findGame
        }
    ]
});


export default router;