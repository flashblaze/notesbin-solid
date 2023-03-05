import { createServerAction$, redirect } from "solid-start/server";
import { FormError } from "solid-start/data";
import { insertNote } from "~/db/session";

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
    <main class="max-w-7xl mx-auto mt-20">
      <Form>
        <textarea name="note" class="w-full border border-blue-300" />
        <button name="submit" type="submit">
          Submit
        </button>
      </Form>
    </main>
  );
}
