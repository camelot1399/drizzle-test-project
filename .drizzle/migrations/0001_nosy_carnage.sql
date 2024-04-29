CREATE SCHEMA "oneTask";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "oneTask"."files" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"text" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "my_schema"."users" SET SCHEMA "oneTask";
--> statement-breakpoint
DROP SCHEMA "my_schema";
