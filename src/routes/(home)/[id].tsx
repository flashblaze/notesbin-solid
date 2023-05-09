import "highlight.js/styles/atom-one-dark.css";
import { RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getNote } from "~/db/session";
import hljs from "highlight.js";

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(
    async ([, id]) => {
      const data = await getNote({ id });
      if (data?.note) {
        data.note = hljs.highlightAuto(data.note).value;
        return data;
      }
    },
    {
      key: () => ["note", params.id],
    }
  );
}

const Note = () => {
  const data = useRouteData<typeof routeData>();
  return (
    <>
      <pre innerHTML={data()?.note} class="bg-background w-full text-white" />
    </>
  );
};

export default Note;
