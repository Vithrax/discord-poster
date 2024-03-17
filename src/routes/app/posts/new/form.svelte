<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Input } from '$lib/components/ui/input';
	import { Switch } from '$lib/components/ui/switch';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { cn } from '$lib/utils.js';
	import { buttonVariants } from '$lib/components/ui/button';
	import { CalendarIcon } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import {
		DateFormatter,
		getLocalTimeZone,
		today,
		type DateValue,
		parseDate,
		CalendarDate
	} from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar/index.js';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		taintedMessage: null,
		onUpdated: ({ form: f }) => {
			if (f.valid) {
				toast.success('You submitted' + JSON.stringify(f.data, null, 2));
			} else {
				toast.error('Please fix the errors in the form.');
			}
		}
	});

	const { form: formData, enhance } = form;

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	$: value = $formData.date ? parseDate($formData.date.toString()) : undefined;

	let placeholder: DateValue = today(getLocalTimeZone());
</script>

<form method="POST" use:enhance class="pt-8">
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Friendly name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.Description>This is a display name for this event</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="date" class="flex flex-col">
		<Form.Control let:attrs>
			<Form.Label class="pt-4">Posting Date</Form.Label>
			<Popover.Root>
				<Popover.Trigger
					{...attrs}
					class={cn(
						buttonVariants({ variant: 'outline' }),
						'w-[280px] justify-start pl-4 text-left font-normal',
						!value && 'text-muted-foreground'
					)}
				>
					{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
					<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
				</Popover.Trigger>
				<Popover.Content class="w-auto p-0" side="top">
					<Calendar
						{value}
						bind:placeholder
						minValue={today(getLocalTimeZone())}
						calendarLabel="Posting Date"
						initialFocus
						onValueChange={(v) => {
							if (v) {
								$formData.date = v.toString();
							} else {
								$formData.date = '';
							}
						}}
					/>
				</Popover.Content>
			</Popover.Root>
			<Form.FieldErrors />
			<input hidden value={$formData.date} name={attrs.name} />
		</Form.Control>
	</Form.Field>

	<Form.Field {form} name="everyone">
		<Form.Control let:attrs>
			<dir class="flex items-center justify-start gap-1.5 pl-0">
				<Switch {...attrs} bind:checked={$formData.everyone} />
				<Form.Label>@everyone tag?</Form.Label>
			</dir>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="content">
		<Form.Control let:attrs>
			<Form.Label>Content</Form.Label>
			<Textarea rows={10} {...attrs} bind:value={$formData.content} />
		</Form.Control>
		<Form.Description>This is your message!</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class="mt-8">Submit</Form.Button>
</form>
