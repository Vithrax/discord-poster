<script>
	import LoginDrawer from '$lib/components/drawers/login-drawer.svelte';
	import Step from '$lib/components/landing-page/step.svelte';
	import { startingSteps } from '$lib/config';
</script>

<main class="pt-14">
	<section id="hero" class="p-3 space-y-2">
		<h1 class="text-3xl tracking-tight uppercase font-extrabold">Imagine a place...</h1>
		<p class="font-light text-muted-foreground">
			...where you can set up all of your upcoming post, annoucements etc. ahead of time. Where you
			can add multiple servers, multiple messages. All of you data stored in cloud, secured,
			private.
		</p>

		<div class="flex items-center py-24 justify-center">
			<LoginDrawer />
		</div>
	</section>

	<section id="features" class="p-3 space-y-4">
		<h2 class="text-2xl uppercase font-bold">Just few steps to set up...</h2>
		<ul>
			{#each startingSteps as step}
				<Step {step} />
			{/each}
		</ul>
	</section>

	<section id="cta" class="p-3 bg-primary text-center py-16 text-white">
		<h2 class="text-2xl uppercase font-bold">Don't wait. Join us!</h2>
		<p class="font-light">We know you want this.</p>

		<div class="flex items-center pt-4 justify-center">
			<LoginDrawer variant="outline" class="text-foreground" />
		</div>
	</section>

	<footer
		class="flex items-center justify-between border-t px-3 text-muted-foreground text-sm italic"
	>
		<div>
			<div>2024 &copy; Adrian Gajdulewicz</div>
		</div>
		<div>Github</div>
	</footer>
</main>
