import { createStore } from "solid-js/store";

export const [noteStore, setNoteStore] = createStore({
  note: "",
});
