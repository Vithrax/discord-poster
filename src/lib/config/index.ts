import type { GettingStartedStep } from '$lib/types';

export const startingSteps: GettingStartedStep[] = [
	{
		index: 1,
		title: 'Create a Discord Poster account',
		description:
			'To simplify this process we implemented all popular oauth providers, such as google, github and of course, discord.'
	},
	{
		index: 2,
		title: 'Add webhook url to a target channel',
		description:
			'You need to add configure Discord to accept messages send through webhook. ' +
			`<a
                class="text-primary font-medium"
                href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks#:~:text=Add%20the%20webhook%20URL%20into%20your%20GitHub%20repo,the%20Discord-generated%20URL%20in%20the%20%22Payload%20URL%22%20blank."
                >Learn more</a
            >`
	},
	{
		index: 3,
		title: 'Schedule a post',
		description: `Select date and time, add post content, select some additional options (like <span class='text-foreground bg-primary/50 rounded px-1'>@everyone</span> tag)`
	},
	{
		index: 4,
		title: 'All set up!',
		description:
			'Now just wait untill we will automatically send your message. In the meantime... you can schedule another post ;-)'
	}
];

export const breadcrumbDescription = {
	'/app': 'Home',
	'/app/posts': 'Posts',
	'/app/posts/new': 'New',
	'/app/settings': 'Settings'
};
