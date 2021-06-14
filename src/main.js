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

Vue.config.productionTip = false;
new Vue({
	render: h => h(App),
	router,
	i18n,
}).$mount('#app');
