<script lang="ts">
	import type { PageData } from './$types.js';
	import SettingsForm from './form.svelte';
	export let data: PageData;
</script>

<div class="px-3">
	<SettingsForm data={data.form} />
</div>
