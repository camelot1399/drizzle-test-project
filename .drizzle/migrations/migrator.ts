import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import path from "path";
import dotenv from "dotenv/config";

const env = dotenv;

const startMigrator = async () => {
  try {
    const connectionString = `postgres://${process.env.DB_USER}:drizzle@localhost:5432/drizzle_db`;

    const dbConnection = postgres(connectionString, { max: 1 });
    const dbMigrate = drizzle(dbConnection);

    await migrate(dbMigrate, {
      migrationsFolder: path.resolve(".drizzle", "migrations"),
    });

    console.log("Migration is done!");
  } catch (e) {
    console.log("migration is error");
    console.log(e);
  }

  process.exit(0);
};

startMigrator();
