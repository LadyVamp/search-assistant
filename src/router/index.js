import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutView.vue'),
    },
    {
        path: '/links',
        name: 'Links',
        component: () => import('@/views/LinksView.vue'),
    },
    {
        path: '/password-generator',
        name: 'PasswordGeneratorView',
        component: () => import('@/views/PasswordGeneratorView.vue'),
    },
    {
        path: '/empirical-table',
        name: 'EmpiricalTable',
        component: () => import('@/views/EmpiricalTableView.vue'),
    },
    {
        path: '*',
        redirect: '/',
    },
];

const router = new VueRouter({
    routes,
});

export default router;
