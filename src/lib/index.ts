import { action, query, redirect } from "@solidjs/router";
import { db } from "./db";
import hljs from "highlight.js";

export const getNote = query(async ({ id }: { id: string }) => {
  "use server";
  const data = await db.note.findFirst({ where: { id } });
  const note = hljs.highlightAuto(data?.note ?? "");
  return note.value;
}, "note");

export const createNote = action(async (formData: FormData) => {
  "use server";
  const content = String(formData.get("note"));
  const note = await db.note.create({ data: { note: content } });
  return redirect(`/${note.id}`);
});
