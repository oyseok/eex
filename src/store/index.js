/**
 * @NOTICE
 * Vue 저장소 입니다.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dummyData: [
			{ email: 'user@naver.com', password: '1' },
			{ email: 'master@naver.com', password: '1' },
		],
	},
	mutations: {
		setSigninUpTitle(state, title) {
			state.signinUpTitle = title;
		},
	},
});
