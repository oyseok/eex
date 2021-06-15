<template>
	<div>
		<h1>로그인</h1>
		<div>
			<ul>
				<li>
					<input id="user" type="radio" name="role" value="user" v-model="role" />
					<label for="user">User</label>
					<input id="Master" type="radio" name="role" value="master" v-model="role" />
					<label for="Master">Master</label>
				</li>
				<li>
					<label for="email">이메일</label>
					<input type="email" v-model="email" />
				</li>
				<li>
					<label for="password">비밀번호</label>
					<input type="password" v-model="password" />
				</li>
				<li>
					<button @click="signin">로그인</button>
					<router-link to="/select">다국어처리 페이지 이동</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			role: 'user',
			email: 'user@naver.com',
			password: '123',
		};
	},
	methods: {
		signin() {
			const user = { email: 'user@naver.com', password: '123' };
			const master = { email: 'master@naver.com', password: '123' };
			localStorage.removeItem('info');

			let isPass = false;
			if (this.role === 'user') {
				if (this.email !== user.email || this.password !== user.password) return alert('땡!! 틀릿다!');
				isPass = true;
			} else {
				if (this.email !== master.email || this.password !== master.password) return alert('땡!! 틀릿다!');
				isPass = true;
			}
			if (isPass) {
				const payload = JSON.stringify({ role: this.role, email: this.email });
				localStorage.setItem('info', payload);
				this.$router.push({ name: 'home' });
			}
		},
	},
};
</script>

<style scoped>
ul,
li {
	list-style: none;
}
</style>
