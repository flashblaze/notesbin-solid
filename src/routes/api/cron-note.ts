import { db } from "~/lib/db";

export async function GET({ request }: { request: Request }) {
  const headers = request.headers;
  const cronSecret = headers.get("cron-secret");

  if (cronSecret !== process.env.CRON_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  const createdNote = await db.note.create({
    data: {
      note: "Hello, world!",
    },
  });

  await db.note.delete({
    where: {
      id: createdNote.id,
    },
  });

  return new Response(JSON.stringify({ id: createdNote.id }), { status: 200 });
}
