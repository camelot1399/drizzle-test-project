import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import path from "path";

const connectionString = process.env.DB_URL as string;
const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);

await migrate(db, { migrationsFolder: path.resolve(".drizzle", "migrations") });
await sql.end();
