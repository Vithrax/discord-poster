<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer';
	import Button from '../ui/button/button.svelte';
</script>

<Drawer.Root>
	<Drawer.Trigger><slot name="trigger" /></Drawer.Trigger>
	<Drawer.Content class="px-4">
		<Drawer.Header>
			<Drawer.Title><slot name="title" /></Drawer.Title>
			<Drawer.Description><slot name="description" /></Drawer.Description>
		</Drawer.Header>
		<slot />
		<Drawer.Footer>
			<slot name="confirm" />
			<Drawer.Close><Button variant="outline">Cancel</Button></Drawer.Close>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
