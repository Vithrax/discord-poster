<script lang="ts">
	import EventOptionsDrawer from '$lib/components/drawers/event-options-drawer.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import { Ghost } from 'lucide-svelte';
	import { Plus } from 'svelte-radix';

	const invoices = [
		{
			invoice: '2020-06-30',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV002',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV003',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV004',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV005',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV006',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV007',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card'
		}
	];
</script>

<div class="space-y-8">
	{#if invoices.length > 0}
		<Table.Root>
			<Table.Caption>A list of your upcoming posts.</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-fit">Date</Table.Head>
					<Table.Head>Post Name</Table.Head>
					<Table.Head class="text-center">Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each invoices as invoice, i (i)}
					<Table.Row>
						<Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>
						<Table.Cell class="truncate">{invoice.paymentMethod}</Table.Cell>
						<Table.Cell class="text-center">
							<EventOptionsDrawer post={{ id: 1, title: 'Ixodus' }} />
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	{:else}
		<div class="flex flex-col items-center justify-center text-muted-foreground">
			<Ghost /> <span>Pretty empty out here!</span>
		</div>
	{/if}

	<div class="text-center">
		<Button size="lg">
			<a href="/app/posts/new" class="flex">
				<Plus class="w-5 h-5 mr-1.5" />
				<span>Add new post</span>
			</a>
		</Button>
	</div>
</div>
