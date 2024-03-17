<script lang="ts">
	import BaseDrawer from './base-drawer.svelte';
	import Button from '../ui/button/button.svelte';
	import { EllipsisVertical } from 'lucide-svelte';

	export let post: {
		title: string;
		id: number;
	};
</script>

<BaseDrawer>
	<svelte:fragment slot="title">{post.title}</svelte:fragment>
	<svelte:fragment slot="description">Choose an action</svelte:fragment>
	<Button variant="ghost" size="icon" slot="trigger">
		<EllipsisVertical />
	</Button>

	<Button>View</Button>
	<Button variant="destructive" class="mt-2">Delete</Button>
</BaseDrawer>
