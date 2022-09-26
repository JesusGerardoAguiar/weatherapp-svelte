<script>
	// @ts-nocheck
	import CurrentInfo from './CurrentInfo.svelte';
	import NextHoursWeather from './NextHoursWeather.svelte';
	import { fetchWeather } from '../../stores/currentWeather/actions';
	import { useQuery } from '@sveltestack/svelte-query';
	import { currentWeather, nextDaysWeather } from '../../stores/currentWeather/weather.state';
	const queryResult = useQuery('weatherData', fetchWeather);
</script>

{#if $queryResult.isLoading}
	<div class="flex flex-col justify-center items-center pt-20">
		<span>Loading...</span>
	</div>
{:else if $queryResult.error}
	<span>An error has occurred: {$queryResult.error.message}</span>
{:else}
	<CurrentInfo {currentWeather} />

	{#if $nextDaysWeather[0] && $nextDaysWeather[0]?.hours?.length > 0}
		<NextHoursWeather nextHoursWeather={$nextDaysWeather[0].hours} />
	{/if}
{/if}
