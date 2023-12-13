/**
 * Drizzle only helps in "creating" migrations, not running them.
 *
 * > Drizzle Kit is responsible for Migrations.
 * Command: `drizzle-kit generate:postgresql`
 *
 * > Drizzle is unopinionated in the way you can run migrations.
 * My references for making this script:
 * - https://orm.drizzle.team/kit-docs/overview/
 * - https://orm.drizzle.team/docs/migrations/
 *
 * Run this with `tsx`.
 */

import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const sql = postgres(
	process.env.DATABASE_URL ||
		"postgresql://postgres:password123@127.0.0.1:5432/bookabite"
);

async function main() {
	console.log("Migrating into", process.env.DATABASE_URL);

	/** PostgreSQL database connection wrapped with Drizzle. */
	const db = drizzle(sql);

	// This will run migrations on the database, skipping the ones already applied
	await migrate(db, { migrationsFolder: "drizzle" });

	// Don't forget to close the connection, otherwise the script will hang
	sql.end();

	console.log("Migration is Done. 🚀");
}

main();
