<script lang="ts">
	import Switch from "./ui/switch/switch.svelte";
  import Moon from "svelte-radix/Moon.svelte";
  import { toggleMode, mode } from "mode-watcher";
</script>

<div class='flex items-center justify-center gap-2'>
  <Switch checked={$mode !== 'light'} on:click={toggleMode} />
  <Moon class='h-4' />
</div>