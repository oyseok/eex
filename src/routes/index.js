import Vue from 'vue';
import VueRouter from 'vue-router';
import sample1 from '@/routes/sample1';
import sample2 from '@/routes/sample2';
import error from '@/routes/error';

Vue.use(VueRouter);

/**
 * @NOTICE
 * router 디렉토리 입니다,
 * 관심사에 따라 파일을 생성후 "routes: []"에 추가 하시면 됩니다.
 * sample1.js, sample2.js를 참고하세요.
 */
const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'enter',
			component: () => import('@/views/Enter.vue'),
		},
		{
			path: '/',
			component: () => import('@/views/layouts/LayoutForm.vue'),
			children: [...sample1],
		},
		{
			path: '/',
			component: () => import('@/views/layouts2/LayoutForm2.vue'),
			children: [...sample2],
		},
		...error,
	],
});

export default router;
