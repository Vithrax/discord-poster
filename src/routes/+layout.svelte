<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import DiscordLogo from '$lib/components/svg/discord-logo.svelte';
</script>

<ModeWatcher />
<Toaster />

<svelte:head>
	<title>Discord Poster</title>
</svelte:head>

<div data-vaul-drawer-wrapper class="antialiased">
	<header class="py-4 border-b">
		<nav class="flex items-center justify-between max-w-7xl mx-auto px-6">
			<a
				href="/"
				class="font-black text-2xl gap-1 tracking-tight font-logo flex items-center justify-center"
			>
				<DiscordLogo class="fill-primary h-8" />
				<span>Discord<span class="text-sm font-medium italic">poster</span></span>
			</a>
			<div>
				<ModeToggle />
			</div>
		</nav>
	</header>

	<slot />
</div>
