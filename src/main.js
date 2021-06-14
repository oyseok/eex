import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
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
// 개발모드, 운영모드 사용 시 설정
// const isProduction = process.env.NODE_ENV === 'production';
const options = {
	isEnabled: true,
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
}).$mount('#app');
