import { createServerAction$, redirect } from "solid-start/server";
import { FormError } from "solid-start/data";
import { insertNote } from "~/db/session";
import Editor from "~/components/Editor";

export default function Home() {
  return <Editor />;
}
