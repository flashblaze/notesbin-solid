import { createServerAction$, redirect } from "solid-start/server";
import { FormError } from "solid-start/data";
import { insertNote } from "~/db/session";
import Editor from "~/components/Editor";
import Sidebar from "~/components/Sidebar";
import Header from "~/components/Header";

export default function Home() {
  const [, { Form }] = createServerAction$(async (form: FormData) => {
    const note = form.get("note");

    if (typeof note !== "string") {
      throw new FormError(`Form not submitted correctly.`);
    }

    const data = await insertNote({ note });
    return redirect(`/${data.id}`);
  });

  return (
    <Form>
      <div class="flex flex-col">
        <Header />
        <div class="flex">
          <Sidebar />
          <Editor />
        </div>
      </div>
    </Form>
  );
}
