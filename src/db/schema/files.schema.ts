import {
  serial,
  text,
  pgTable,
  pgSchema,
  timestamp,
} from "drizzle-orm/pg-core";

export const mySchema = pgSchema("oneTask");

export const mySchemaUsers = mySchema.table("files", {
  id: serial("id").primaryKey(),
  name: text("name"),
  text: text("text"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
