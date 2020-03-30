import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Partners from '../views/Partners.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/blog',
        name: 'Blog',
        component: Blog
    }, {
        path: '/partners',
        name: 'Partners',
        component: Partners
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
