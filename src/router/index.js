import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/HomeView.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/AboutView.vue'),
	},
	{
		path: '*',
		redirect: '/'
	},
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes,
});

export default router;
