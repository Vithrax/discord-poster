<script lang="ts">
	import BaseDrawer from './base-drawer.svelte';
	import Button from '../ui/button/button.svelte';
</script>

<BaseDrawer>
	<svelte:fragment slot="title">Login to Discord Poster</svelte:fragment>
	<svelte:fragment slot="description">You can use any provider listed below</svelte:fragment>

	<Button size="lg" slot="trigger" class="w-56" {...$$props}>Join Now!</Button>
	<Button class="mx-4"><a href="/app">Just login for now</a></Button>
</BaseDrawer>
