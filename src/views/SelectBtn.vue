<template>
	<div class="hello">
		<button @click="lang('kr')">한국어</button>
		<button @click="lang('en')">영어</button>
		<button @click="lang('jp')">일본어</button>
		<button @click="lang('ch')">중국어</button>
	</div>
</template>

<script>
export default {
	name: 'selectBtn',
	methods: {
		lang(value) {
			this.$i18n.locale = value;
			this.$router.push({ name: 'HelloWorld' });
		},
	},
};
</script>

<style scoped>
.hello {
	position: fixed;
	top: 450px;
	left: 650px;
}
button {
	background-color: #6d6d6d;
	border: none;
	color: white;
	padding: 15px 30px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}
</style>
