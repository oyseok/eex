import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';

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
}).$mount('#app');
