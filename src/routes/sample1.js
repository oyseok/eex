export default [
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/users',
		name: 'users',
		component: () => import('@/views/User.vue'),
	},
	{
		path: '/masters',
		name: 'masters',
		component: () => import('@/views/Master.vue'),
	},
];

// async function requireAuth(from, to, next) {
// 	const accountInfo = JSON.parse(localStorage.getItem('info'));
// 	if (!accountInfo || accountInfo.role !== from.name) return alert(from.name + '만 접속 가능합니다');
// 	next();
// }
