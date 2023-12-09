/**
 * Drizzle Setup (More Information)
 * With Lucia: https://lucia-auth.com/guidebook/drizzle-orm/
 */
import { env } from "$env/dynamic/private";
import { drizzle } from "drizzle-orm/postgres-js";
/**
 * Client for 1 static connection (Use this for transactions).
 * Pool for multiple connections reducing latency (never use this for transactions).
 */
import postgres from "postgres";

/** PostgreSQL database connection (Will be used by Lucia) */
export const sql = postgres(env.DATABASE_URL);

/** PostgreSQL database connection wrapped with Drizzle. */
export const db = drizzle(sql);
