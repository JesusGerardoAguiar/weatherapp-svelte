<script>
	// @ts-nocheck

	export let currentWeather;
</script>

<div class="flex flex-col justify-center items-center pt-20">
	<h2 class="text-2xl">{$currentWeather?.address}</h2>
	<h4 class="text-lg">{$currentWeather.currentConditions?.conditions}</h4>
	<h3 class="text-base">
		{$currentWeather.currentConditions.feelslike &&
			`${Math.round(parseFloat($currentWeather.currentConditions?.feelslike))}℃`}
	</h3>
</div>
