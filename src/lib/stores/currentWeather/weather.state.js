import { writable } from 'svelte/store';

export const currentWeather = writable({
	address: '',
	currentConditions: { conditions: '', feelslike: '' },
});
export const nextDaysWeather = writable([]);

