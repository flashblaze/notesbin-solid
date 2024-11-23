import { Note } from "@prisma/client";
import { db } from ".";

export async function insertNote(note: string) {
  return db.note.create({
    data: { note: note },
  });
}

export async function getNote(
  id: string
): Promise<(Note & { rawNote?: string }) | null> {
  const note = await db.note.findUnique({ where: { id } });
  if (!note) return null;
  return note;
}
