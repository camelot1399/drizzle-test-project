import { serial, text, pgSchema, timestamp } from "drizzle-orm/pg-core";

export const mySchema = pgSchema("oneTask");

export const colors = mySchema.enum("colors", ["red", "green", "blue"]);

export const mySchemaUsers = mySchema.table("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  last_name: text("last_name"),
  first_name: text("first_name"),
  color: colors("color").default("red"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
