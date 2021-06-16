import axiosApi from '@/api/index';

export function apiTest() {
	return axiosApi.get(`/todos/1`);
}
