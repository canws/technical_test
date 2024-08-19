import { createRouter, createWebHistory } from "vue-router";
import LoanAmount from '../views/LoanAmount.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            layout: "Frontend",
            guest: true,
            requiresAuth: false,
        },
        component: Home,
    },
    {
        path: '/application-submit',
        name: 'About',
        meta: {
            layout: "Frontend",
            guest: true,
            requiresAuth: false,
        },
        component: About,
    },
    {
        path: '/loan-amount',
        name: 'LoanAmount',
        meta: {
            layout: "Frontend",
            guest: true,
            requiresAuth: false,
        },
        component: LoanAmount,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router