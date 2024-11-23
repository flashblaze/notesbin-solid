import { eq } from "drizzle-orm";
import { getRequestEvent } from "solid-js/web";
import { createDb } from "~/db/index";
import { notes } from "~/db/schema";

export async function GET({ request }: { request: Request }) {
  const headers = request.headers;
  const cronSecret = headers.get("cron-secret");

  if (cronSecret !== process.env.CRON_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  const event = getRequestEvent();
  const dbUrl =
    event?.nativeEvent.context.cloudflare.env.DATABASE_URL ??
    process.env.DATABASE_URL ??
    "";

  const db = createDb(dbUrl);
  const createdNote = await db
    .insert(notes)
    .values({
      note: "Hello, world!",
    })
    .returning();

  const [newNote] = createdNote;
  await db.delete(notes).where(eq(notes.id, newNote.id));
  return new Response(JSON.stringify({ id: newNote.id }), {
    status: 200,
  });
}
