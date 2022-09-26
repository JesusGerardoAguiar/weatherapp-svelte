import { currentWeather, weatherLoading, weatherError, nextDaysWeather } from './weather.state';

export const requestWeather = () => {
	weatherLoading.set(true);
};

export const receiveWeatherError = (/** @type {null} */ error) => {
    weatherLoading.set(false);
    weatherError.set(error);
};

export const receiveCurrentWeatherSuccess = (/** @type {{ address: string; currentConditions: { conditions: string; feelslike: string; }; }} */ data) => {
	weatherLoading.set(false);
	currentWeather.set(data);
};

export const receiveNextDayWeatherSuccess = (/** @type {never[]} */ data) => {
    weatherLoading.set(false);
	nextDaysWeather.set(data);
};

