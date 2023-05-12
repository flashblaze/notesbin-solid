import "highlight.js/styles/atom-one-dark.css";
import { RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";
import { getNote } from "~/db/notes";
import hljs from "highlight.js";
import { setNoteStore } from "~/store";
import { createEffect } from "solid-js";

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(
    async ([, id]) => {
      const data = await getNote(id);
      if (data?.note) {
        data.rawNote = data.note;
        data.note = hljs.highlightAuto(data.note).value;
        return data;
      }

      throw redirect("/");
    },
    {
      key: () => ["note", params.id],
    }
  );
}

const Note = () => {
  const data = useRouteData<typeof routeData>();

  createEffect(() => {
    setNoteStore("note", data()?.rawNote ?? "");
  });

  return (
    <pre
      innerHTML={data()?.note}
      class="h-[calc(100vh-64px)] w-[calc(100vw-64px)] p-2 bg-background text-white overflow-y-auto"
    />
  );
};

export default Note;
