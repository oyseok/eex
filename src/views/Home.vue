<template>
	<div>
		<h1>Home</h1>
		<ul>
			<li @click="join('user')">회원서비스</li>
			<li @click="join('master')">관리자 페이지 이동</li>
		</ul>
		<p>Test API요청 Data</p>
		<p>{{ apiData }}</p>
	</div>
</template>

<script>
import { apiTest } from '@/api/index';

export default {
	data() {
		return {
			apiData: '',
		};
	},
	created() {
		this.test();
	},
	methods: {
		join(target) {
			target === 'user' ? this.$router.push({ name: 'user' }) : this.$router.push({ name: 'master' });
		},
		async test() {
			const test = await apiTest();
			this.apiData = test.data;
			console.log('api test', test);
		},
	},
};
</script>

<style>
ul,
li {
	list-style: none;
}
</style>
