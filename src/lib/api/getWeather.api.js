// @ts-nocheck
import axios from 'axios';
export const getWeather = async () => {
	const headers = {
		"Content-Type": "application/json",
	  };
	const locationResult = await axios.get(
		`https://extreme-ip-lookup.com/json/?key=${import.meta.env.VITE_LOCATION_KEY}`
	, {headers});
	const weatherResult = await axios.get(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
			locationResult.data.city
		}?unitGroup=metric&key=${import.meta.env.VITE_WEATHER_KEY}&contentType=json`
		, {headers});
	return weatherResult;
};
