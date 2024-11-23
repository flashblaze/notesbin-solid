import { createAsync, RouteDefinition, useParams } from "@solidjs/router";
import { getNote } from "~/lib";
import "highlight.js/styles/atom-one-dark.css";
import { Title } from "@solidjs/meta";
import { setNote } from "~/lib/store";

export const route: RouteDefinition = {
  preload: ({ params }) => {
    return getNote({ id: params.id });
  },
};

const Note = () => {
  const params = useParams();
  const note = createAsync(() => getNote({ id: params.id }));
  setNote(note()?.data?.note ?? "");
  return (
    <>
      <Title>Custom Note</Title>
      <pre
        innerHTML={note()?.html}
        class="h-[calc(100vh-64px)] w-[calc(100vw-64px)] p-2 text-white overflow-y-auto bg-zinc-800"
      />
    </>
  );
};

export default Note;
