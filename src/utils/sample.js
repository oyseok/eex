/**
 * @NOTICE
 * 공통으로 사용되는 코드를 관리하는 디렉토리 입니다.
 * 관심사에 따라 utils에 파일을 생성해서 사용하시면 됩니다.
 * (아래 코드는 예제 입니다)
 */

//sec to msec
export function formatTimeMsec(msec) {
	if (!msec) return '00:00';
	const hour = ('0' + Math.floor(msec / 3600000)).slice(-2);
	const minutes = ('0' + Math.floor((msec % 3600000) / 60000)).slice(-2);
	const seconds = ('0' + Math.floor(msec % 60000)).slice(-2);
	return msec >= 3600 ? [hour, minutes, seconds].join(':') : [minutes, seconds].join(':');
}

//sec to string
export function formatTimeSec(sec) {
	if (!sec) return '00:00';
	const hour = ('0' + Math.floor(sec / 3600)).slice(-2);
	const minutes = ('0' + Math.floor((sec % 3600) / 60)).slice(-2);
	const seconds = ('0' + Math.floor(sec % 60)).slice(-2);
	return sec >= 3600 ? [hour, minutes, seconds].join(':') : [minutes, seconds].join(':');
}
