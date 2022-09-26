import { writable } from 'svelte/store';

export const currentWeather = writable({
	address: '',
	currentConditions: { conditions: '', feelslike: '' },
});
export const nextDaysWeather = writable([]);

export const weatherLoading = writable(false);
export const weatherError = writable(null);
