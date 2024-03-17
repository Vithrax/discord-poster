import { z } from 'zod';

export const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Name should have at least 2 characters' })
		.max(50, { message: 'Name should have less than 50 characters' }),
	content: z
		.string()
		.min(10, { message: 'Content is required and should have at least 10 characters' })
		.max(2000, { message: 'Discord limits characters to 2000' }),
	everyone: z.boolean().default(false),
	date: z.string().refine((v) => v, { message: 'Posting date is required.' })
});

export type FormSchema = typeof formSchema;
