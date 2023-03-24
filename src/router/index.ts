import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/HomePage.vue")
    },
    {
        path: '/zip/:zip',
        name: 'zip',
        component: () => import("../views/ZipPage.vue")
    },
    {
        path: '/ip',
        name: 'ip',
        component: () => import("../views/IpPage.vue")
    },
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
