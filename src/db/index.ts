import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

export const createDb = (dbUrl: string) => {
  const sql = neon(dbUrl);
  const db = drizzle({ client: sql });
  return db;
};
