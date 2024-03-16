import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		upcomingPosts: Math.random() > 0.5
	};
};
