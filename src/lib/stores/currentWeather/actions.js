// @ts-nocheck
import { getWeather } from '../../api/getWeather.api';
import {
	requestWeather,
	receiveWeatherError,
	receiveCurrentWeatherSuccess,
    receiveNextDayWeatherSuccess
} from './changers';

export const fetchWeather = async () => {
	try {
		requestWeather();
		const result = await getWeather();
		receiveCurrentWeatherSuccess({
			address: result.data.address,
			currentConditions: result.data.currentConditions
		});
        console.log(result.data.days)
        receiveNextDayWeatherSuccess(result.data.days)
	} catch (e) {
		receiveWeatherError(e);
	}
};
