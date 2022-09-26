// @ts-nocheck
import { getWeather } from '../../api/getWeather.api';
import { receiveCurrentWeatherSuccess, receiveNextDayWeatherSuccess } from './changers';

export const fetchWeather = async () => {
	const result = await getWeather();
	receiveCurrentWeatherSuccess({
		address: result.data.address,
		currentConditions: result.data.currentConditions
	});
	receiveNextDayWeatherSuccess(result.data.days);
};
