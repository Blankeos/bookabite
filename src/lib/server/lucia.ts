/**
 * Lucia Setup (More Info)
 * - With Drizzle: https://lucia-auth.com/guidebook/drizzle-orm/#postgresql
 * - With SvelteKit:
 * - https://lucia-auth.com/getting-started/sveltekit/
 * - https://lucia-auth.com/guidebook/sign-in-with-username-and-password/sveltekit/
 */

import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";

/**
 * Renamed to avoid confusion. `postgres` is a 'driver' like in `db.ts`.
 * While 'postgres' is an 'adapter' in Lucia-auth/adapter-postgresql.
 */
import { postgres as luciaPostgresAdapter } from "@lucia-auth/adapter-postgresql";

import { sql } from "./db";

export const auth = lucia({
	adapter: luciaPostgresAdapter(sql, {
		user: "auth_user",
		key: "user_key",
		session: "user_session"
	}),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),

	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export type Auth = typeof auth;
