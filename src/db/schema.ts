import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
  id: uuid("id").primaryKey().defaultRandom(),
  note: text("note").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
