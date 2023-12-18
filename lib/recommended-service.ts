import { getSelf } from '@/lib/auth-service';
import { db } from '@/lib/db';

export const getRecommended = async () => {
	const users = await db.user.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	});

	return users;
};
