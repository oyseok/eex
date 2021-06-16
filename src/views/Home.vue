<template>
	<div>
		<h2 class="title">Navigation Guard Test</h2>
		<ul>
			<li>
				<button @click="join('user')">
					회원서비스
				</button>
			</li>
			<li>
				<button @click="join('master')">
					관리자 페이지 이동
				</button>
			</li>
		</ul>
		<h2 class="title">Axios API Test</h2>
		<p>Test API요청 Data(axios)</p>
		<p>{{ apiData }}</p>
		<h2 class="title">다국어 처리 Test</h2>
		<button @click="lang('kr')">한국어</button>
		<button @click="lang('en')">영어</button>
		<p>{{ $t('COMMON.BTN') }}</p>
	</div>
</template>

<script>
import { apiTest } from '@/api/sample/sample';

export default {
	data() {
		return {
			apiData: '',
		};
	},
	created() {
		this.test();
		this.$log.debug('log');
	},
	methods: {
		join(target) {
			target === 'user' ? this.$router.push({ name: 'user' }) : this.$router.push({ name: 'master' });
		},
		async test() {
			const test = await apiTest();
			this.apiData = test.data;
		},
		lang(value) {
			this.$i18n.locale = value;
		},
	},
};
</script>

<style scoped>
ul,
li {
	list-style: none;
}
.title {
	border-bottom: 1px solid black;
	margin-top: 50px;
}
</style>
