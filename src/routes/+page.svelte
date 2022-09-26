<script>
	import { onMount } from 'svelte';
	import CurrentWeather from '../lib/components/CurrentWeather/index.svelte';
	import NextDaysWeather from '../lib/components/NextDaysWeather/index.svelte';
	import { fetchWeather } from '../lib/stores/currentWeather/actions';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<CurrentWeather />
	<NextDaysWeather />
</QueryClientProvider>
