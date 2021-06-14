import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'enter',
			component: () => import('@/views/Enter.vue'),
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/Home.vue'),
		},
		{
			path: '/user',
			name: 'user',
			component: () => import('@/views/User.vue'),
			beforeEnter: (to, form, next) => {
				const accountInfo = JSON.parse(localStorage.getItem('info'));
				if (!accountInfo || accountInfo.role !== 'user') {
					alert('User만 접속 가능합니다');
					next({ name: 'home' });
				}
				next();
			},
		},
		{
			path: '/master',
			name: 'master',
			component: () => import('@/views/Master.vue'),
			beforeEnter: (to, form, next) => {
				const accountInfo = JSON.parse(localStorage.getItem('info'));
				if (!accountInfo || accountInfo.role !== 'master') {
					alert('Master만 접속 가능합니다');
					next({ name: 'home' });
				}
				next();
			},
		},
		{
			path: '',
			name: 'seleBtn',
			component: () => import('@/views/SelectBtn.vue'),
		},
		{
			path: '/next',
			name: 'HelloWorld',
			component: () => import('@/views/HelloWorld.vue'),
		},
	],
});

export default router;
