// @ts-nocheck
import axios from 'axios';
export const getWeather = async () => {
	const headers = {
		"Content-Type": "application/json",
	  };

	const weatherResult = await axios.get(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Montevideo?unitGroup=metric&key=${import.meta.env.VITE_WEATHER_KEY}&contentType=json`
		, {headers});
	return weatherResult;
};