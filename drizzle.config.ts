import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema",
  out: "./.drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgresql://camelot:drizzle@localhost/drizzle_db",
  },
  verbose: true,
  strict: true,
} satisfies Config;
