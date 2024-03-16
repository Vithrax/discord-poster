<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { GettingStartedStep } from '$lib/types';
	export let step: GettingStartedStep;
</script>

<li class="group grid grid-cols-[auto,1fr] items-center justify-center gap-x-2 text-sm">
	<p class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">{step.index}</p>
	<h3 class="text-base font-medium">{step.title}</h3>
	<div class="mx-auto h-[85%] w-[2px] y-1 bg-primary/10 group-last:bg-background" />
	<p class="pb-6 text-muted-foreground">
		{@html step.description}
	</p>
</li>
