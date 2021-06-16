export default [
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
		path: '/users',
		name: 'users',
		component: () => import('@/views/layouts/LayoutForm.vue'),
		children: [
			{
				path: '/user',
				name: 'user',
				component: () => import('@/views/User.vue'),
			},
		],
		beforeEnter: requireAuth,
	},
	{
		path: '/masters',
		name: 'masters',
		component: () => import('@/views/layouts/LayoutForm.vue'),
		children: [
			{
				path: '/master',
				name: 'master',
				component: () => import('@/views/Master.vue'),
			},
		],
		beforeEnter: requireAuth,
	},
];

async function requireAuth(from, to, next) {
	const accountInfo = JSON.parse(localStorage.getItem('info'));
	if (!accountInfo || accountInfo.role !== from.name) return alert(from.name + '만 접속 가능합니다');
	next();
}
