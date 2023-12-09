import { auth } from "$lib/server/lucia";
import { error, fail, redirect } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, locals }) => {
	const session = await locals.auth.validate();

	if (!session)
		throw error(
			400,
			"Could not find session. Can't logout a session that isn't logged in."
		);

	await auth.invalidateSession(session.sessionId); // invalidate session
	locals.auth.setSession(null); // remove cookie

	return new Response(
		Object({
			success: false
		})
	);
};
