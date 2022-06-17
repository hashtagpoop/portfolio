import { createRouter, createWebHistory } from "vue-router";
import Portfolio from "/src/views/portfolio.vue";

const Home = () => import("/src/views/home.vue");

const routes = [
    { 
        path: '/',
        component: Portfolio,
        meta: {
            enterClass: "animate__animated animate__fadeInLeft",
            leaveClass: "animate__animated animate__fadeOutRight",
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutLeft",
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router
