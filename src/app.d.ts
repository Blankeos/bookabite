// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}

		/** For the hooks.server.ts (exposing auth via locals.auth) */
		interface Locals {
			auth: import("lucia").AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

/**
 * Make sure you update Lucia.DatabaseUserAttributes in app.d.ts whenever you
 * add any new columns to the user table.
 *
 * More info: https://lucia-auth.com/getting-started/sveltekit/
 */
/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		type DatabaseSessionAttributes = Record<string, never>;
	}
}

export {};
