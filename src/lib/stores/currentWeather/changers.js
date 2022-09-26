import { currentWeather, nextDaysWeather } from './weather.state';


export const receiveCurrentWeatherSuccess = (/** @type {{ address: string; currentConditions: { conditions: string; feelslike: string; }; }} */ data) => {
	currentWeather.set(data);
};

export const receiveNextDayWeatherSuccess = (/** @type {never[]} */ data) => {
	nextDaysWeather.set(data);
};

