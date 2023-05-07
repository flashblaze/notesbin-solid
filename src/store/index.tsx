import { createSignal } from "solid-js";

export const [noteStore, setNoteStore] = createSignal({
  note: "",
});
