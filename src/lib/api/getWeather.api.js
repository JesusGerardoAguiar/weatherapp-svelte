// @ts-nocheck
import axios from 'axios';
export const getWeather = async () => {
	const locationResult = await axios.get(
		`https://extreme-ip-lookup.com/json/?key=${import.meta.env.VITE_LOCATION_KEY}`
	);
	const weatherResult = await axios.get(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
			locationResult.data.city
		}?unitGroup=metric&key=${import.meta.env.VITE_WEATHER_KEY}&contentType=json`
	);
	return weatherResult;
};
