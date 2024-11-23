import { createAsync, type RouteDefinition } from "@solidjs/router";
import { getNote } from "~/lib";

export const route = {
  preload() {
    getNote();
  },
} satisfies RouteDefinition;

export default function Home() {
  const note = createAsync(() => getNote(), { deferStream: true });
  return (
    <main class="w-full p-4 space-y-2">
      <h2 class="font-bold text-3xl">Hello {note()?.note}</h2>
    </main>
  );
}
