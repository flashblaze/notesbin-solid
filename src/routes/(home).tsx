import { createServerAction$, redirect } from "solid-start/server";
import { FormError } from "solid-start/data";
import { insertNote } from "~/db/notes";
import Sidebar from "~/components/Sidebar";
import Header from "~/components/Header";
import { Outlet } from "solid-start";

export default function Home() {
  const [, { Form }] = createServerAction$(async (form: FormData) => {
    const note = form.get("note");

    if (typeof note !== "string") {
      throw new FormError(`Form not submitted correctly.`);
    }

    const data = await insertNote(note);
    return redirect(`/${data.id}`);
  });

  return (
    <Form>
      <div class="flex flex-col">
        <Header />
        <div class="flex">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </Form>
  );
}
