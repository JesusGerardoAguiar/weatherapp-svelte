<script>
	// @ts-nocheck

	import WiRain from 'svelte-icons/wi/WiRain.svelte';
	import WiDayCloudy from 'svelte-icons/wi/WiDayCloudy.svelte';
	import WiCloudy from 'svelte-icons/wi/WiCloudy.svelte';
	import WiDaySunny from 'svelte-icons/wi/WiDaySunny.svelte';
	import WiNightClear from 'svelte-icons/wi/WiNightClear.svelte';
	import WiNightAltPartlyCloudy from 'svelte-icons/wi/WiNightAltPartlyCloudy.svelte';
	export let icon;
</script>

{#if icon === 'rain'}
	<WiRain />
{:else if icon === 'partly-cloudy-day'}
	<WiDayCloudy />
{:else if icon === 'cloudy'}
	<WiCloudy />
{:else if icon === 'clear-night'}
	<WiNightClear />
{:else if icon === 'partly-cloudy-night'}
	<WiNightAltPartlyCloudy />
{:else if icon === 'clear-day'}
	<WiDaySunny />
{/if}
