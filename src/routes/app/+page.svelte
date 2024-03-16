<script lang="ts">
	import { CalendarDays, CalendarPlus, Settings } from 'lucide-svelte';
	export let data;
</script>

<h1 class="text-center py-8 text-3xl font-semibold tracking-tight">Welcome back señor</h1>

<ul class="p-3 space-y-3">
	<li>
		<a href="/app/posts/new" class="p-4 border flex items-center justify-between rounded-lg">
			<div>
				<h2 class="text-xl font-medium">Schedule a post</h2>
				<p class="font-light text-sm text-muted-foreground">Add a new message to be posted</p>
			</div>
			<CalendarPlus class="text-primary" />
		</a>
	</li>
	<li>
		<a href="/app/posts" class="p-4 border flex items-center justify-between rounded-lg">
			<div>
				<h2 class="text-xl font-medium">View upcoming post</h2>
				<p class="font-light text-sm text-muted-foreground">Preview all scheluded posts</p>
			</div>
			<div class="relative">
				{#if data.upcomingPosts}
					<div
						class="bg-red-500 rounded-full text-xs font-bold h-2 w-2 absolute -right-0.5 -top-0.5"
					/>
				{/if}
				<CalendarDays class="text-primary" />
			</div>
		</a>
	</li>
	<li>
		<a href="/app/settings" class="p-4 border flex items-center justify-between rounded-lg">
			<div>
				<h2 class="text-xl font-medium">Settings</h2>
				<p class="font-light text-sm text-muted-foreground">Edit your account data</p>
			</div>
			<Settings class="text-primary" />
		</a>
	</li>
</ul>
