<template>
	<div>
		<Header></Header>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/views/layouts/Header';
import Footer from '@/views/layouts/Footer';

export default {
	name: 'layoutTemplate',
	components: {
		Header,
		Footer,
	},
};
</script>
