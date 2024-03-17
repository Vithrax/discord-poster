<script lang="ts">
	import { page } from '$app/stores';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { breadcrumbDescription } from '$lib/config';
	import Slash from 'svelte-radix/Slash.svelte';

	$: segments =
		$page.route.id
			?.split('/')
			?.splice(1)
			?.reduce((arr: string[], segment: string) => {
				const prefix = arr.at(-1) ?? '';
				const currUrl = `${prefix}/${segment}`;
				arr.push(currUrl);

				return arr;
			}, []) ?? [];

	const getBreadcrumbText = (segment: string): string => {
		if (segment in breadcrumbDescription) {
			// @ts-ignore idk how to satisfy ts with this, TODO
			return breadcrumbDescription[segment];
		}

		return 'Segment';
	};
</script>

<Breadcrumb.Root class="px-4 py-1 m-2 w-fit rounded-lg bg-primary/15">
	<Breadcrumb.List>
		{#each segments as href, index}
			<Breadcrumb.Separator class="first:hidden">
				<Slash tabindex="-1" />
			</Breadcrumb.Separator>
			{#if index < segments.length - 1}
				<Breadcrumb.Item>
					<Breadcrumb.Link {href}>{getBreadcrumbText(href)}</Breadcrumb.Link>
				</Breadcrumb.Item>
			{:else}
				<Breadcrumb.Page>
					<Breadcrumb.Link {href}>{getBreadcrumbText(href)}</Breadcrumb.Link>
				</Breadcrumb.Page>
			{/if}
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>

<slot />
