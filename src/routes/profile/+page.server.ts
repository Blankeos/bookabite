/**
 * 'Profile' is a PROTECTED ROUTE.
 *
 * the `load` function below:
 * Gets authenticated user. If not authenticated, redirect to /login.
 *
 * TODO: This can be polished. Watch this: https://www.youtube.com/watch?v=ieECVME5ZLU
 */

import { redirect } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, "/login");
	return {
		userId: session.user.userId,
		username: session.user.username
	};
};
