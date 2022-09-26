<script>
	// @ts-nocheck

	import WeatherIcon from './WeatherIcon.svelte';
	import { nextDaysWeather } from '../../stores/currentWeather/weather.state';

	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

</script>

<!-- rain  clear-day rain -->
<div class="flex flex-col w-[40%] m-auto pt-10 icon">
	{#each $nextDaysWeather as weatherDays}
		<div class="flex flex-row justify-between items-center border-b h-[3rem]">
			<p class="w-[100%]">{days[new Date(weatherDays.datetime).getDay()]}</p>
			<WeatherIcon icon={weatherDays.icon} />
			<p class="w-[100%] text-end">{weatherDays.feelslikemin}-{weatherDays.feelslikemax}</p>
		</div>
	{/each}
</div>

