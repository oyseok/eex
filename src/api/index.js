/**
 * @NOTICE
 * api index파일 입니다.
 * 기본URL설정, axios 인터셉터 설정, axios export 역할을 합니다.
 * 관심사에 따라 해당 디렉토리에 파일을 생성 후 사용하시면 됩니다.
 * 기본URL은 개발, 운영에 따라 설정 필요
 * (sample.js 참고)
 */
import axios from 'axios';
import { setInterceptors } from '@/api/interceptors';

const instance = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
});

const axiosApi = setInterceptors(instance);

export default axiosApi;
