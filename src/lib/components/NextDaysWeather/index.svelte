<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import WeatherIcon from './WeatherIcon.svelte';
	import { nextDaysWeather } from '../../stores/currentWeather/weather.state';
	import { useQuery } from '@sveltestack/svelte-query';
	const queryResult = useQuery('weatherData', {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		keepPreviousData: true
	});
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
</script>

<!-- rain  clear-day rain -->
{#if $queryResult.isLoading}
	<div class="flex flex-col w-[40%] m-auto pt-10 icon">
		<span>Loading...</span>
	</div>
{:else if $queryResult.error}
	<span>An error has occurred: {$queryResult.error.message}</span>
{:else}
	<div class="flex flex-col w-[40%] m-auto pt-10 icon">
		{#each $nextDaysWeather as weatherDays}
			<div class="flex flex-row justify-between items-center border-b h-[3rem]">
				<p class="w-[100%]">{days[new Date(weatherDays.datetime).getDay()]}</p>
				<WeatherIcon icon={weatherDays.icon} />
				<p class="w-[100%] text-end">{Math.round(parseFloat(weatherDays.feelslikemin))}℃-{Math.round(parseFloat(weatherDays.feelslikemax))}℃</p>
			</div>
		{/each}
	</div>
{/if}
