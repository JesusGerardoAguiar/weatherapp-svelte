<script>
	import { onMount } from 'svelte';
	import CurrentWeather from '../lib/components/CurrentWeather/index.svelte';
	import NextDaysWeather from '../lib/components/NextDaysWeather/index.svelte';
	import {fetchWeather} from '../lib/stores/currentWeather/actions'

	onMount(async () => {
		fetchWeather();
	});
</script>

<CurrentWeather />
<NextDaysWeather />
