import {
  serial,
  text,
  pgTable,
  pgSchema,
  timestamp,
} from "drizzle-orm/pg-core";

export const mySchema = pgSchema("my_schema");

export const colors = mySchema.enum("colors", ["red", "green", "blue"]);

export const mySchemaUsers = mySchema.table("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  color: colors("color").default("red"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
