import { query } from "@solidjs/router";
import { db } from "./db";

export const getNote = query(async () => {
  "use server";
  const note = await db.note.findFirst();
  return note;
}, "note");
