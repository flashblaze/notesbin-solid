import { action, query, redirect } from "@solidjs/router";
import { createDb } from "../db/index";
import hljs from "highlight.js";
import { getRequestEvent } from "solid-js/web";
import { eq } from "drizzle-orm";
import { notes } from "~/db/schema";

export const getNote = query(async ({ id }: { id: string }) => {
  "use server";
  const event = getRequestEvent();
  const dbUrl =
    event?.nativeEvent.context.cloudflare.env.DATABASE_URL ??
    process.env.DATABASE_URL ??
    "";

  const db = createDb(dbUrl);
  const data = await db.select().from(notes).where(eq(notes.id, id));
  const note = hljs.highlightAuto(data[0]?.note ?? "");
  return { html: note.value, data: data[0] };
}, "note");

export const createNote = action(async (formData: FormData) => {
  "use server";
  const content = String(formData.get("note"));
  const event = getRequestEvent();
  const dbUrl =
    event?.nativeEvent.context.cloudflare.env.DATABASE_URL ??
    process.env.DATABASE_URL ??
    "";

  const db = createDb(dbUrl);
  const note = await db.insert(notes).values({ note: content }).returning();
  return redirect(`/${note[0].id}`);
});
