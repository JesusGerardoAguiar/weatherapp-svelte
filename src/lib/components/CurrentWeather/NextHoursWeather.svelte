<script>
	import WeatherIcon from '../NextDaysWeather/WeatherIcon.svelte';
	export /**
	 * @type {any[]}
	 */
	let nextHoursWeather = [];
	const currentHour = new Date().toTimeString().split(':')[0];
	nextHoursWeather.filter(
		(specificWeatherTime) => specificWeatherTime.datetime.split(':')[0] >= currentHour
	);
</script>

<div class="flex  pt-20  overflow-x-scroll m-auto overflow-x-scroll flex w-[40%]">
	{#each nextHoursWeather as specificWeatherTime}
		{#if specificWeatherTime.datetime.split(':')[0] >= currentHour}
			<div class="flex-none py-6 px-3 first:pl-6 last:pr-6 ">
				<div class="flex flex-col items-center justify-center gap-3">
					<h3>{specificWeatherTime.datetime.split(':')[0]}</h3>
					<div class="icon">
						<WeatherIcon icon={specificWeatherTime.icon} />
					</div>
					<p>{Math.round(parseFloat(specificWeatherTime.feelslike))}℃</p>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.icon {
		width: 2rem;
	}
</style>
