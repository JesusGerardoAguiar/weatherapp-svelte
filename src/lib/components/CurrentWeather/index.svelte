<script>
	// @ts-nocheck

	import {
		currentWeather,
		nextDaysWeather,
		weatherLoading,
		weatherError
	} from '../../stores/currentWeather/weather.state';
	import WeatherIcon from '../NextDaysWeather/WeatherIcon.svelte';
</script>

{#if $weatherLoading}

<div class="flex flex-col justify-center items-center pt-20">

	<p>loading...</p>
</div>
{:else}
	<div class="flex flex-col justify-center items-center pt-20">
		<h2 class="text-2xl">{$currentWeather?.address}</h2>
		<h4 class="text-lg">{$currentWeather.currentConditions?.conditions}</h4>
		<h3 class="text-base">
			{$currentWeather.currentConditions.feelslike &&
				`${Math.round(parseFloat($currentWeather.currentConditions?.feelslike))}℃`}
		</h3>
	</div>
	{#if $nextDaysWeather[0] && $nextDaysWeather[0]?.hours?.length > 0}
		<div class="flex  pt-20  overflow-x-scroll m-auto overflow-x-scroll flex w-[40%]">
			{#each $nextDaysWeather[0].hours as specificWeatherTime}
				<div class="flex-none py-6 px-3 first:pl-6 last:pr-6 ">
					<div class="flex flex-col items-center justify-center gap-3">
						<h3>{specificWeatherTime.datetime.split(':')[0]}</h3>
						<div class="icon">
							<WeatherIcon icon={specificWeatherTime.icon} />
						</div>
						<p>{Math.round(parseFloat(specificWeatherTime.feelslike))}℃</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
{/if}

<style>
	.icon {
		width: 2rem;
	}
</style>
