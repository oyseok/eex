import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: () => import('@/views/HelloWorld.vue'),
		},
	],
});

export default router;
