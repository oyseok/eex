<template>
	<div>
		<Header2></Header2>
		<router-view></router-view>
	</div>
</template>

<script>
import Header2 from '@/views/layouts2/Header2';

export default {
	name: 'layoutTemplate',
	components: {
		Header2,
	},
};
</script>
