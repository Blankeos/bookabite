/**
 * More Information: https://orm.drizzle.team/drizzle-studio/overview/
 */

import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
	schema: "./src/lib/server/drizzle/schema",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString:
			process.env.DATABASE_URL ||
			"postgresql://postgres:password123@127.0.0.1:5432/bookabite"
	}
} satisfies Config;
