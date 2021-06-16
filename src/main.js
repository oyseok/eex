import Vue from 'vue';
import App from './App.vue';

// router
import router from '@/routes/index';

// vuex
import store from '@/store/index';

// VueI18n(다국어)
import VueI18n from 'vue-i18n';
import kr from '@/lang/locale_kr.json';
import en from '@/lang/locale_en.json';

Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: 'kr',
	fallbackLocale: 'kr',
	messages: { en, kr },
});

// logger
import VueLogger from 'vuejs-logger';
const isLogActive = process.env.NODE_ENV === 'development' ? true : false;
const options = {
	isEnabled: isLogActive,
	logLevel: 'debug',
	stringifyArguments: false,
	showLogLevel: true,
	showMethodName: true,
	separator: '|',
	showConsoleColors: true,
};
Vue.use(VueLogger, options);

Vue.config.productionTip = false;
new Vue({
	render: h => h(App),
	router,
	i18n,
	store,
}).$mount('#app');
