import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

export const dbConfig = {
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const client = new Client(dbConfig);

export const db = drizzle(client);
